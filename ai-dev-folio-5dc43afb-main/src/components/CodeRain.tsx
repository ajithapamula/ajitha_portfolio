const CodeRain = () => {
  const codeLines = [
    "def neural_network(x):",
    "  return sigmoid(W @ x + b)",
    "model.fit(X_train, y_train)",
    "loss = cross_entropy(pred, y)",
    "optimizer.step()",
    "import torch.nn as nn",
    "class Transformer(nn.Module):",
    "  self.attention = MultiHead()",
    "embeddings = model.encode(text)",
    "tokens = tokenizer.encode(prompt)",
    "response = llm.generate(input)",
    "accuracy: 0.987",
    ">>> Training complete",
    "gradient_descent(learning_rate)",
    "vector_db.search(query, k=5)",
  ];

  return (
    <div className="absolute right-0 top-0 w-80 h-full overflow-hidden opacity-20 pointer-events-none hidden lg:block">
      <div className="animate-code-scroll">
        {[...codeLines, ...codeLines].map((line, i) => (
          <div
            key={i}
            className="font-mono text-xs whitespace-nowrap py-1"
            style={{
              color: i % 3 === 0 ? "hsl(189 94% 55%)" : i % 3 === 1 ? "hsl(270 91% 65%)" : "hsl(0 0% 50%)",
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeRain;
