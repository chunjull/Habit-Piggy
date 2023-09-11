import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
  <>
    <div className="container py-11 py-lg-16">
      <div className="row mb-7 mb-lg-11">
        <div className="col-lg-8 mx-auto">
          <ol className="pay-list mt-5 d-flex justify-content-between list-unstyled position-relative">
            <li className="d-flex flex-column align-items-center">
              <p className="number fw-bold fs-6 fs-lg-3 d-flex justify-content-center align-items-center number-active mb-0">1</p>
              <p className="fs-8 text-darkgray mt-1 mb-0">訂單確認</p>
            </li>
            <li className="d-flex flex-column align-items-center">
              <p className="number fw-bold fs-6 fs-lg-3 d-flex justify-content-center align-items-center mb-0">2</p>
              <p className="fs-8 text-darkgray mt-1 mb-0">信用卡付款</p>
            </li>
            <li className="d-flex flex-column align-items-center">
              <p className="number fw-bold fs-6 fs-lg-3 d-flex justify-content-center align-items-center mb-0">3</p>
              <p className="fs-8 text-darkgray mt-1 mb-0">付款成功</p>
            </li>
          </ol>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="mb-7 mb-lg-11">
            <h3 className="fs-5 fs-lg-4 mb-5">訂單摘要</h3>
            <div className="d-flex flex-column justify-content-between bg-light border border-primary border-3 rounded-1 py-5 px-8 py-lg-7 px-lg-10">
              <p className="fs-6 fs-lg-5 mb-0">從 2023/09/17 開始：</p>
              <div className="text-end">
                <p className="fs-3 fs-lg-1 mb-0">每月 NT$109</p>
                <p className="mb-0">（價格已含稅）</p>
              </div>
            </div>
          </div>
          <div className="mb-7 mb-lg-11">
            <div className="bg-white rounded-1 py-5 px-7 py-lg-7 px-lg-9">
              <p className="fs-6 fs-lg-5 mb-1 mb-lg-3">您將在 2023/09/17 被收費。</p>
              <p className="fs-8 fs-lg-7 mb-0 text-darkgray">在訂閱到期前至少24小時，您可以透過 帳號設定－會員訂閱 頁面取消自動續訂。</p>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-7 mb-lg-11">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                我同意 Habit Piggy 的 <Link to="#" className="text-darkgray"><u>服務約定條款</u></Link>。
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-primary text-white fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12" to="/Payment">前往付款</Link>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Checkout;