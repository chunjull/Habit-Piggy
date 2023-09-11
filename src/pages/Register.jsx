import { Link } from 'react-router-dom';

const Register = () => {
  return (
  <>
    <div className="registerBanner">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 py-11 py-lg-16">
          <div className="col d-flex flex-column justify-content-center align-items-center align-items-lg-baseline px-13 px-lg-17 mb-7 mb-lg-0">
            <h2 className="fs-5 fs-lg-3 lobster-two text-white mb-1 mb-lg-5">Sign up</h2>
            <h3 className="fs-2 fs-lg-11 fw-bold text-white mb-3 mb-lg-5 text-center text-lg-start">ENJOY<br></br>JOURNEY</h3>
            <p className="fs-9 fs-lg-7 text-white">在「Habit Piggy」，你可以養成很多習慣，或是存到很多錢，最棒的是：你可以在養成習慣的同時存錢！</p>
          </div>

          <div className="col">
            <div className="p-7 p-lg-13 w-100 bg-light rounded">
              <h2 className="text-dark fs-5 fs-lg-10 lh-base fw-bold mb-3 mb-lg-7">會員註冊</h2>
              <form action="#">
                <div className="mb-3 mb-lg-7">
                  <label htmlFor="registerEmail" className="form-label fs-lg-5 fw-bold text-dark mb-1">Email</label>
                  <input type="email" name="registerEmail" id="registerEmail" className="form-control border-0 bg-white fs-6 fs-lg-5" />
                </div>
                <div className="mb-3 mb-lg-7">
                  <label htmlFor="registerAccount" className="form-label fs-lg-5 fw-bold text-dark mb-1">Account</label>
                  <input type="text" name="registerAccount" id="registerAccount" className="form-control border-0 bg-white fs-6 fs-lg-5" />
                </div>
                <div className="mb-3 mb-lg-7">
                  <label htmlFor="registerPassword" className="form-label fs-lg-5 fw-bold text-dark mb-1">Password</label>
                  <input type="password" name="registerPassword" id="registerPassword" className="form-control border-0 bg-white fs-6 fs-lg-5" />
                </div>
                <div className="pb-7 pb-lg-12">
                  <Link className="btn btn-primary text-white fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12" to="/Login">註冊</Link>
                </div>
                <div className="d-flex justify-content-between border-top border-black pt-5">
                  <p className="fs-8 fs-lg-7">已經有帳號？</p>
                  <Link className="fs-8 fs-lg-7 text-black" to="/Login">立即登入<i className="bi bi-arrow-up-right ms-1"></i></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Register;