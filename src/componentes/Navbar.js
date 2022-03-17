import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav">
    <Link to={`/cat/1`} className="nav--link">  cat 1  </Link>
    <Link to={`/cat/2`} className="nav--link">  cat 2  </Link>
    <Link to={`/cat/3`} className="nav--link">  cat 3   </Link>

  </nav>

  )
}

export default Navbar