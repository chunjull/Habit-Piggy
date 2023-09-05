import Icon from '../../assets/images/icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="bg-primary">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-5">
            <div className="container d-flex justify-content-between">
              <h1><a className="navbar-brand fs-3 lobster-two text-white" href="./Home"><img src={Icon} alt="habit-piggy-icon" className="align-bottom" />Habit Piggy</a></h1>
              <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link text-white fs-5 p-0" href="../pages/articles.html">推薦文章</a>
                    </li>
                    <li className="nav-item ps-16">
                      <a className="nav-link text-white fs-5 p-0" href="../pages/subscription.html">訂閱方案</a>
                    </li>
                    <li className="nav-item ps-16">
                      <a className="nav-link text-white fs-5 p-0" href="./Login">會員登入</a>
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
