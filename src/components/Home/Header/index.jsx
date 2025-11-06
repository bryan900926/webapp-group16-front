import "./index.css";

export default function Header({toggleLoginModal}) {
  return (
    <header className="home-header">
      <h1>NTU Investment</h1>
      <button className="login-btn" onClick={toggleLoginModal}>Log In</button>
    </header>
  );
}
