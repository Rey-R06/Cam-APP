import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Cam-Talk</h1>

      <div className="navbar-right">
        <span className="navbar-placeholder">Usuario</span>
      </div>
    </nav>
  )
}

