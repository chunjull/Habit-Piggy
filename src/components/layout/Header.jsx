import { Link } from 'react-router-dom';
import Icon from '../../assets/images/icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar navbar-expand-lg navbar-light bg-primary py-5">
        <nav className="container">
          <h1><Link className="navbar-brand fs-3 lobster-two text-white" to="./"><img src={Icon} alt="habit-piggy-icon" className="align-bottom" />Habit Piggy</Link></h1>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list text-white fs-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-auto mb-lg-0 fs-6 pb-1 pb-lg-0 mt-3">
              <li className="nav-item pt-5 pt-lg-0 ps-12 ps-lg-0">
                <Link className="nav-link text-white fs-5 p-0" to="./Articles">推薦文章</Link>
              </li>
              <li className="nav-item pt-5 pt-lg-0 ps-12 ps-lg-16">
                <Link className="nav-link text-white fs-5 p-0" to="./Subscribe">訂閱方案</Link>
              </li>
              <li className="nav-item pt-5 pt-lg-0 ps-12 ps-lg-16">
                <Link className="nav-link text-white fs-5 p-0" to="./Login">會員登入</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>  
    </header>
  );
}

export default Header;
