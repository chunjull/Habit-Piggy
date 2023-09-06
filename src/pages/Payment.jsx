import { Link } from 'react-router-dom';

const Payment = () => {
  return (
  <>
    <div className="container py-11 py-lg-16">
      <div className="row mb-7 mb-lg-11">
        <div className="col-lg-8 mx-auto">
          <ol className="pay-list mt-5 d-flex justify-content-between list-unstyled position-relative">
            <li className="d-flex flex-column align-items-center">
              <p className="number fw-bold fs-5 fs-lg-3 d-flex justify-content-center align-items-center number-active mb-0">1</p>
              <p className="fs-8 text-darkgray mt-1 mb-0">訂單確認</p>
            </li>
            <li className="d-flex flex-column align-items-center">
              <p className="number fw-bold fs-5 fs-lg-3 d-flex justify-content-center align-items-center number-active mb-0">2</p>
              <p className="fs-8 text-darkgray mt-1 mb-0">信用卡付款</p>
            </li>
            <li className="d-flex flex-column align-items-center">
              <p className="number fw-bold fs-5 fs-lg-3 d-flex justify-content-center align-items-center mb-0">3</p>
              <p className="fs-8 text-darkgray mt-1 mb-0">付款成功</p>
            </li>
          </ol>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="mb-7 mb-lg-11">
            <div className="bg-light border border-primary border-3 rounded-1 py-5 px-8 py-lg-7 px-lg-10">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="fs-7 fs-lg-6 mb-0">月費</p>
                  <p className="fs-8 fs-lg-7 text-darkgray mb-0">開始計費日期：2023 年 09 月 17 日</p>
                </div>
                <p className="fs-6 fs-lg-5 mb-0">每月 NT$109</p>
              </div>
              <div className="border border-bottom border-primary my-5">
              </div>
              <div className="d-flex justify-content-between">
                <p className="fs-7 fs-lg-6 mb-0">今日應付金額</p>
                <p className="fs-6 fs-lg-5 mb-0">每月 NT$109</p>
              </div>
            </div>
          </div>
          <div className="mb-7 mb-lg-11">
            <h4 className="fs-6 fs-lg-5 fw-bold text-center mb-5 mb-lg-7">請輸入信用卡資訊進行付款</h4>
            <form>
              <div className="mb-3 mb-lg-5 row">
                <label for="creditCard" className="col-sm-3 col-form-label fs-6 fs-lg-5">信用卡帳號</label>
                <div className="col-sm-9">
                  <input type="tel" className="form-control border-0 bg-white fs-6 py-3" id="creditCard" placeholder="0000 0000 0000 0000" size="18" minlength="19" maxlength="19"></input>
                </div>
              </div>
              <div className="mb-3 mb-lg-5 row">
                <label for="expiryDate" className="col-sm-3 col-form-label fs-6 fs-lg-5">有效日期</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control border-0 bg-white fs-6 py-3" id="expiryDate" placeholder="MM/YY"></input>
                </div>
              </div>
              <div className="mb-3 mb-lg-5 row">
                <label for="cvv" className="col-sm-3 col-form-label fs-6 fs-lg-5">安全碼</label>
                <div className="col-sm-9">
                  <input type="password" className="form-control border-0 bg-white fs-6 py-3" id="cvv" placeholder="***"></input>
                </div>
              </div>
              <div className="mb-3 mb-lg-5 row">
                <label for="userName" className="col-sm-3 col-form-label fs-6 fs-lg-5">持卡人姓名</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control border-0 bg-white fs-6 py-3" id="userName" placeholder="請輸入持卡人姓名"></input>
                </div>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/Receipt"  className="btn btn-primary text-white fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12">確認付款</Link>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Payment;