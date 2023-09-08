import { Link } from 'react-router-dom';

const Account = () => {
  return (
  <>
    <div className="d-flex flex-column flex-lg-row">
      <div className="d-block d-lg-none container pt-4 ps-4">
        <button className="btn btn-secondary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebarNav" aria-controls="offcanvasSidebarNav">
          <i className="bi bi-list"></i>
        </button>

        <div className="offcanvas offcanvas-top bg-light vh-100" tabindex="-1" id="offcanvasSidebarNav" aria-labelledby="offcanvasSidebarNavLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body px-11">
            <div className="mb-5">
              <Link to="/Today" className="sidebar-item">
                <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 mb-0 border-0 fs-6">
                  <i className="bi bi-house fs-6 me-4"></i>主頁
                </button>
              </Link>
            </div>
            <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 mb-5 border-0" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <div className="d-flex justify-content-between fs-6 text-black">
                <div className="d-flex">
                  <i className="bi bi-check-circle fs-6 me-4"></i>
                  <p className="fs-6 mb-0">習慣列表</p>
                </div>
                <i className="bi bi-caret-down fs-6"></i>
              </div>
            </button>
            <div className="collapse" id="collapseExample">
              <div className="mb-5">
                <Link to="#" className="sidebar-item">
                  <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6">
                    <i className="bi bi-bullseye fs-6 me-4"></i>目標習慣
                  </button>
                </Link>
              </div>
              <div className="mb-5">
                <Link to="#" className="sidebar-item">
                  <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6">
                    <i className="bi bi-clock-history fs-6 me-4"></i>歷史習慣
                  </button>
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <Link to="#" className="sidebar-item">
                <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6">
                  <i className="bi bi-coin fs-6 me-4"></i>存錢筒
                </button>
              </Link>
            </div>
            <Link to="/Account" className="sidebar-item">
              <button type="button" className="sidebar-nav active btn text-start w-100 py-3 px-5 border-0 fs-6">
                <i className="bi bi-gear fs-6 me-4"></i>帳號設定
              </button>
            </Link>
          </div>
        </div>
      </div>
      <aside className="bg-light vh-100 py-10 px-5 d-none d-lg-block" style={{width: '306px',}}>
        <div className="mb-5">
          <Link to="/Today" className="sidebar-item">
            <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 mb-0 border-0 fs-6">
              <i className="bi bi-house fs-6 me-4"></i>主頁
            </button>
          </Link>
        </div>
        <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 mb-5 border-0" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <div className="d-flex justify-content-between fs-6 text-black">
            <div className="d-flex">
              <i className="bi bi-check-circle fs-6 me-4"></i>
              <p className="fs-6 mb-0">習慣列表</p>
            </div>
            <i className="bi bi-caret-down fs-6"></i>
          </div>
        </button>
        <div className="collapse" id="collapseExample">
          <div className="mb-5">
            <Link to="#" className="sidebar-item">
              <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6">
                <i className="bi bi-bullseye fs-6 me-4"></i>目標習慣
              </button>
            </Link>
          </div>
          <div className="mb-5">
            <Link to="#" className="sidebar-item">
              <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6">
                <i className="bi bi-clock-history fs-6 me-4"></i>歷史習慣
              </button>
            </Link>
          </div>
        </div>
        <div className="mb-5">
          <Link to="#" className="sidebar-item">
            <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6">
              <i className="bi bi-coin fs-6 me-4"></i>存錢筒
            </button>
          </Link>
        </div>
        <Link to="/Account" className="sidebar-item">
          <button type="button" className="sidebar-nav active btn text-start w-100 py-3 px-5 border-0 fs-6">
            <i className="bi bi-gear fs-6 me-4"></i>帳號設定
          </button>
        </Link>
      </aside>
      <div className="container py-10">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="fs-lg-10 fw-bold pb-5 pb-lg-7 mb-5 mb-lg-7 border-bottom border-darkgray">帳號設定</h3>
              <form>
                <div className="mb-3 mb-lg-5 row">
                  <label for="userName" className="col-sm-3 col-form-label fs-6 fs-lg-5">使用者名稱</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control border-0 bg-lightgray text-darkgray fs-6 py-3" id="userName" placeholder="Piggy" disabled></input>
                  </div>
                </div>
                <div className="mb-3 mb-lg-5 row">
                  <label for="accountEmail" className="col-sm-3 col-form-label fs-6 fs-lg-5">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control border-0 bg-lightgray text-darkgray fs-6 py-3" id="accountEmail" placeholder="Piggy@gmail.com" disabled></input>
                  </div>
                </div>
                <div className="mb-3 mb-lg-5 row">
                  <label for="qualification" className="col-sm-3 col-form-label fs-6 fs-lg-5">會員訂閱</label>
                  <div className="col-sm-9">
                    <button type="button" className="btn btn-lightgray w-100 text-start">
                      <p className="fs-6 text-darkgray d-flex justify-content-between mb-0">訂閱會員
                        <Link className="" to="/Membership"><i class="bi bi-three-dots-vertical text-dark"></i></Link>
                      </p>
                    </button>
                  </div>
                </div>
                <div className="mb-3 mb-lg-5 row">
                  <label for="habitLevel" className="col-sm-3 col-form-label fs-6 fs-lg-5">習慣成就等級</label>
                  <div className="col-sm-9">
                    <button class="btn btn-primary d-flex justify-content-between w-100 py-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#habitLevelCollapse" aria-expanded="false" aria-controls="habitLevelCollapse">
                      <p className="fs-6 text-white mb-0">優秀寶寶</p>
                      <i class="bi bi-info-circle fs-6 text-white"></i>
                    </button>
                    <div class="collapse" id="habitLevelCollapse">
                      <div class="card card-body border-0 bg-transparent fs-6">
                        <p className="mb-3">你已經培養了至少十個習慣，你真棒！</p>
                        <p className="mb-0">習慣成就等級：<br></br>・初生寶寶：培養一個習慣。<br></br>・向上寶寶：培養五個習慣。<br></br>・優秀寶寶：培養十個習慣。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3 mb-lg-5 row">
                  <label for="moneyLevel" className="col-sm-3 col-form-label fs-6 fs-lg-5">存錢筒成就等級</label>
                  <div className="col-sm-9">
                    <button class="btn btn-primary d-flex justify-content-between w-100 py-3 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#moneyLevelCollapse" aria-expanded="false" aria-controls="moneyLevelCollapse">
                      <p className="fs-6 text-white mb-0">銅牌撲滿</p>
                      <i class="bi bi-info-circle fs-6 text-white"></i>
                    </button>
                    <div class="collapse" id="moneyLevelCollapse">
                      <div class="card card-body border-0 bg-transparent fs-6">
                        <p className="mb-3">你漏掉了一些習慣，但往好處想，你開始養成「存錢」這個好習慣！</p>
                        <p className="mb-0">存錢筒成就等級：<br></br>・銅牌撲滿：累積存錢十次。<br></br>・銀牌撲滿：累積存錢五十次。<br></br>・金牌撲滿：累積存錢一百次。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label for="contact" className="col-sm-3 col-form-label fs-6 fs-lg-5">問題排解</label>
                  <div className="col-sm-9">
                    <button type="button" className="btn btn-outline-primary bg-white w-100 text-start">
                      <Link className="fs-6 text-dark fw-bold d-flex justify-content-between" to="/Contact">聯絡客服<i class="bi bi-arrow-right"></i></Link>
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