export default function Day1() {
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
        <strong>Day 1</strong> · ⏱ 10 Minutes
      </p>

      <hr />

      <h2>📚 Part 1 · Vocabulary</h2>

      <p>Today, learn these core Product Ops words.</p>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr><td>Product</td><td>产品</td></tr>
          <tr><td>User</td><td>用户</td></tr>
          <tr><td>Page</td><td>页面</td></tr>
          <tr><td>Button</td><td>按钮</td></tr>
          <tr><td>Feature</td><td>功能</td></tr>
          <tr><td>Search</td><td>搜索</td></tr>
          <tr><td>Upload</td><td>上传</td></tr>
          <tr><td>Meeting</td><td>会议</td></tr>
          <tr><td>History</td><td>历史记录</td></tr>
          <tr><td>Settings</td><td>设置</td></tr>
        </tbody>
      </table>

      <br />

      <a href="/day1/part2">
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
          Next →
        </button>
      </a>
    </main>
  );
}