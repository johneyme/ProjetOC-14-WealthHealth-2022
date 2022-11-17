import './header.css';
import { Link } from 'react-router-dom';
import logoWH from '../../assets/logo-wh.png';

function Header() {
  return (
    <header>
      <div className="header-title">
        <img src={logoWH} alt="logo HRnet" className="logo-hrnet"></img>
        <h1>HRnet</h1>
      </div>
      <nav>
        <Link to="/">Create Employee</Link>
        <Link to="/employee-list">View Current Employee</Link>
      </nav>
    </header>
  );
}

export default Header;
