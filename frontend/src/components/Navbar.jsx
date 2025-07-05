import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header>
      <div>MyApp</div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/create">Create Product</NavLink>
      </nav>
    </header>
  );
}
