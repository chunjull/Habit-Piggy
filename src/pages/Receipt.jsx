import { Link } from 'react-router-dom';

const Receipt = () => {
  return (
  <>
    <div className="container fit-container py-11 py-lg-16">
      <div className="row mb-7 mb-lg-11">
        <div className="col-lg-8 mx-auto">
          <ol className="pay-list mt-5 d-flex justify-content-between list-unstyled position-relative">
            <li className="d-flex flex-column align-items-center">
              <p className="number fw-bold fs-6 fs-lg-3 d-flex justify-content-center align-items-center number-active mb-0">1</p>
              <p className="fs-8 text-darkgray mt-1 mb-0">訂單確認</p>
            </li>
            <li className="d-flex flex-column align-items-center">
              <p className="number fw-bold fs-6 fs-lg-3 d-flex justify-content-center align-items-center number-active mb-0">2</p>
              <p className="fs-8 text-darkgray mt-1 mb-0">信用卡付款</p>
            </li>
            <li className="d-flex flex-column align-items-center">
              <p className="number fw-bold fs-6 fs-lg-3 d-flex justify-content-center align-items-center number-active mb-0">3</p>
              <p className="fs-8 text-darkgray mt-1 mb-0">付款成功</p>
            </li>
          </ol>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="mb-7 mb-lg-11">
            <div className="text-center text-lg-start">
              <h3 className="fs-5 fs-lg-4 mb-3">訂購成功</h3>
              <p className="fs-lg-6">以下為您的訂單細節：</p>
            </div>
            <div className="bg-light border border-primary border-3 rounded-1 py-5 px-8 py-lg-7 px-lg-10">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fs-7 fs-lg-6 mb-0">月費</p>
                  <p className="fs-9 fs-lg-7 text-darkgray mb-0">開始計費日期：2023 年 09 月 17 日</p>
                </div>
                <p className="fs-6 fs-lg-5 mb-0">每月 NT$109</p>
              </div>
              <div className="border border-bottom border-primary my-5"></div>
              <div className="d-flex justify-content-between">
                <p className="fs-7 fs-lg-6 mb-0">付款金額</p>
                <p className="fs-6 fs-lg-5 mb-0">NT$109</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/Today" className="btn btn-primary text-white fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12" href="../pages/today.html">立即養成習慣</Link>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Receipt;