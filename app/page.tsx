export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F4F8F4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#fff",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "64px" }}>🐸</div>

        <h1
          style={{
            fontSize: "36px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          FrogOps
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          You Could Be Better.
        </p>

        <div
          style={{
            background: "#F6F7F8",
            borderRadius: "16px",
            padding: "20px",
            marginBottom: "30px",
            textAlign: "left",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
            Today's Mission
          </div>

          <div>🎯 Product Ops English · Day 1</div>

          <div style={{ marginTop: "8px", color: "#888" }}>
            ⏱ 10 Minutes
          </div>
        </div>

  <a href="/day1">
  <button
    style={{
      width: "100%",
      height: "56px",
      border: "none",
      borderRadius: "16px",
      background: "#2ECC71",
      color: "white",
      fontSize: "20px",
      cursor: "pointer",
    }}
  >
    🐸 Jump
  </button>
</a>
      </div>
    </main>
  );
}