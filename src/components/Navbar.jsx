import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <Link to="/" className="navbar-brand mb-0 h1">
        Online Learning Portal
      </Link>
      <div>
        <Link to="/login" className="btn btn-light me-2">Login</Link>
        <Link to="/register" className="btn btn-outline-light">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;