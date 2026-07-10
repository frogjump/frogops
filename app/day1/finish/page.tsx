export default function Finish() {
  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "60px auto",
        padding: "20px",
        fontFamily: "Arial",
        textAlign: "center",
        lineHeight: 1.8,
      }}
    >
      <h1>🎉 Great Job!</h1>

      <h2>You completed Day 1.</h2>

      <p style={{ fontSize: "22px" }}>
        ⭐ XP +10
      </p>

      <p>
        Keep learning every day.
      </p>

      <br />

      <a href="/">
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
          🏠 Back Home
        </button>
      </a>
    </main>
  );
}