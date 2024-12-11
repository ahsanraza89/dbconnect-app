import Link from "next/link"

export default function Header (){
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">
      Navbar
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/login">
            LOGIN
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/signup">
            SIGN UP
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/users">
          USERS
          </Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
}