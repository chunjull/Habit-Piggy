import SideBar from "../components/sideBar";
import { Link } from "react-router-dom";

const Account = () => {
  return (
  <>
    <div className="d-flex flex-column flex-lg-row">
      <SideBar />
      <div className="container pt-4 pb-10 pt-lg-10">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="fs-lg-10 fw-bold pb-5 pb-lg-7 mb-5 mb-lg-7 border-bottom border-darkgray">帳號設定</h3>
              <form>
                <div className="mb-3 mb-md-7 row">
                  <label htmlFor="userName" className="col-sm-3 col-form-label fs-6 fs-lg-5">使用者名稱</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control border-0 bg-lightgray text-darkgray fs-6 py-3" id="userName" placeholder="Piggy" disabled></input>
                  </div>
                </div>
                <div className="mb-3 mb-md-7 row">
                  <label htmlFor="accountEmail" className="col-sm-3 col-form-label fs-6 fs-lg-5">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control border-0 bg-lightgray text-darkgray fs-6 py-3" id="accountEmail" placeholder="Piggy@gmail.com" disabled></input>
                  </div>
                </div>
                <div className="mb-3 mb-md-7 row">
                  <label htmlFor="qualification" className="col-sm-3 col-form-label fs-6 fs-lg-5">會員訂閱</label>
                  <div className="col-sm-9">
                    <button type="button" className="btn btn-lightgray w-100 text-start">
                      <p className="fs-6 text-darkgray d-flex justify-content-between mb-0">訂閱會員
                        <Link className="" to="/Membership"><i className="bi bi-three-dots-vertical text-dark"></i></Link>
                      </p>
                    </button>
                  </div>
                </div>
                <div className="mb-3 mb-md-7 row">
                  <label htmlFor="habitLevel" className="col-sm-3 col-form-label fs-6 fs-lg-5">習慣成就等級</label>
                  <div className="col-sm-9">
                    <button className="btn btn-primary d-flex justify-content-between w-100 py-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#habitLevelCollapse" aria-expanded="false" aria-controls="habitLevelCollapse">
                      <p className="fs-6 text-white mb-0">優秀寶寶</p>
                      <i className="bi bi-info-circle fs-6 text-white"></i>
                    </button>
                    <div className="collapse" id="habitLevelCollapse">
                      <div className="card card-body border-0 bg-transparent fs-6">
                        <p className="fs-7 mb-3">你已經培養了至少十個習慣，你真棒！</p>
                        <p className="fs-7 mb-0">習慣成就等級：<br></br>・初生寶寶：培養一個習慣。<br></br>・向上寶寶：培養五個習慣。<br></br>・優秀寶寶：培養十個習慣。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-md-7 row">
                  <label htmlFor="moneyLevel" className="col-sm-3 col-form-label fs-6 fs-lg-5">存錢筒成就等級</label>
                  <div className="col-sm-9">
                    <button className="btn btn-primary d-flex justify-content-between w-100 py-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#moneyLevelCollapse" aria-expanded="false" aria-controls="moneyLevelCollapse">
                      <p className="fs-6 text-white mb-0">銅牌撲滿</p>
                      <i className="bi bi-info-circle fs-6 text-white"></i>
                    </button>
                    <div className="collapse" id="moneyLevelCollapse">
                      <div className="card card-body border-0 bg-transparent fs-6">
                        <p className="fs-7 mb-3">你漏掉了一些習慣，但往好處想，你開始養成「存錢」這個好習慣！</p>
                        <p className="fs-7 mb-0">存錢筒成就等級：<br></br>・銅牌撲滿：累積存錢十次。<br></br>・銀牌撲滿：累積存錢五十次。<br></br>・金牌撲滿：累積存錢一百次。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label htmlFor="contact" className="col-sm-3 col-form-label fs-6 fs-lg-5">問題排解</label>
                  <div className="col-sm-9">
                    <button type="button" className="btn btn-outline-primary bg-white w-100 text-start">
                      <Link className="fs-6 text-dark d-flex justify-content-between" to="/Contact">聯絡客服<i className="bi bi-arrow-right"></i></Link>
                    </button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Account;