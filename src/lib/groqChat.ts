export async function groqChatStream(
  messages: any[],
  onChunk: (text: string) => void
) {
  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-70b-versatile",
        messages,
        stream: true,
      }),
    }
  );

  if (!response.ok || !response.body) {
    throw new Error("Groq API error");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";

    for (let line of lines) {
      if (!line.startsWith("data:")) continue;
      if (line.includes("[DONE]")) return;

      try {
        const jsonStr = line.replace("data:", "").trim();
        const json = JSON.parse(jsonStr);
        const content = json.choices?.[0]?.delta?.content;
        if (content) onChunk(content);
      } catch (err) {
        console.error("JSON parse error:", err);
      }
    }
  }
}
