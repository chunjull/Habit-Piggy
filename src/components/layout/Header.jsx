import { Link } from 'react-router-dom';
import Icon from '../../assets/images/icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="bg-primary">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-5">
            <div className="container d-flex justify-content-between">
              <h1><Link className="navbar-brand fs-3 lobster-two text-white" to="./"><img src={Icon} alt="habit-piggy-icon" className="align-bottom" />Habit Piggy</Link></h1>
              <div>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link text-white fs-5 p-0" to="./Articles">推薦文章</Link>
                    </li>
                    <li className="nav-item ps-16">
                      <Link className="nav-link text-white fs-5 p-0" to="./Subscribe">訂閱方案</Link>
                    </li>
                    <li className="nav-item ps-16">
                      <Link className="nav-link text-white fs-5 p-0" to="./Login">會員登入</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
