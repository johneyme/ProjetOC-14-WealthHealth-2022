import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>HRnet</h1>
      <nav>
        <Link to="/">---</Link>
        <Link to="/employee-list">View Current Employee</Link>
      </nav>
    </header>
  );
}

export default Header;
