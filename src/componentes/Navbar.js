import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav">
    <Link to={`/categoria/accion`} className="nav--link">  Accion </Link>
    <Link to={`/categoria/rpg`} className="nav--link">  RPG </Link>
    <Link to={`/categoria/deportes`} className="nav--link">  Deportes  </Link>

  </nav>

  )
}

export default Navbar