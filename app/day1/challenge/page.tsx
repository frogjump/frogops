export default function Challenge() {
  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial",
        lineHeight: 1.8,
      }}
    >
      <h1>🐸 Product Ops English</h1>

      <p>
        <strong>Day 1</strong> · Mini Challenge
      </p>

      <hr />

      <h2>🎯 Translate into English</h2>

      <p>Try it before looking at the answer.</p>

      <br />

      <p><strong>1.</strong> 这是一个按钮。</p>
      <input
        placeholder="Type your answer..."
        style={{
          width: "100%",
          height: "40px",
          fontSize: "16px",
          padding: "8px",
        }}
      />

      <br /><br />

      <p><strong>2.</strong> 我喜欢这个功能。</p>
      <input
        placeholder="Type your answer..."
        style={{
          width: "100%",
          height: "40px",
          fontSize: "16px",
          padding: "8px",
        }}
      />

      <br /><br />

      <p><strong>3.</strong> 这是一个页面。</p>
      <input
        placeholder="Type your answer..."
        style={{
          width: "100%",
          height: "40px",
          fontSize: "16px",
          padding: "8px",
        }}
      />

      <br /><br />

      <a href="/day1/finish">
        <button
          style={{
            width: "100%",
            height: "52px",
            border: "none",
            borderRadius: "12px",
            background: "#2ECC71",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Finish 🎉
        </button>
      </a>
    </main>
  );
}