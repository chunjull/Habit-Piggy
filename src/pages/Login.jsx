const Login = () => {
    return (
        <div className="bgCover">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2 py-11 py-lg-16">
                    <div className="col d-flex flex-column justify-content-center align-items-center align-items-lg-baseline px-13 px-lg-17 mb-7 mb-lg-0">
                        <h2 className="fs-5 fs-lg-3 lobster-two text-white mb-1 mb-lg-5">Login</h2>
                        <h3 className="fs-2 fs-lg-11 fw-bold text-white mb-3 mb-lg-5 text-center text-lg-start">WELCOME<br></br>BACK</h3>
                        <p className="fs-9 fs-lg-7 text-white">歡迎回到「Habit Piggy」！養成習慣、乖乖存錢，你今天選擇哪一個呢？</p>
                    </div>

                    <div className="col">
                        <div className="p-7 p-lg-13 w-100 bg-light rounded">
                            <h2 className="text-dark fs-5 fs-lg-10 lh-base fw-bold mb-3 mb-lg-7">會員登入</h2>
                            <form action="#">
                                <div className="mb-3 mb-lg-7">
                                    <label htmlFor="loginAccount" className="form-label fs-lg-5 fw-bold text-dark mb-1">Account</label>
                                    <input type="text" name="loginAccount" id="loginAccount" className="form-control border-0 bg-white fs-6 fs-lg-5" />
                                </div>
                                <div className="mb-3 mb-lg-7">
                                    <label htmlFor="loginPassword" className="form-label fs-lg-5 fw-bold text-dark mb-1">Password</label>
                                    <input type="password" name="loginPassword" id="loginPassword" className="form-control border-0 bg-white fs-6 fs-lg-5" />
                                </div>
                                <div className="d-flex justify-content-center pb-7 pb-lg-12">
                                    <a href="#" className="btn btn-primary text-white fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12" role="button">登入</a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-black pt-5">
                                    <p className="fs-8 fs-lg-7">還沒有帳號？</p>
                                    <a href="#" className="fs-8 fs-lg-7 text-black">立即註冊<i className="bi bi-arrow-up-right ms-1"></i></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;