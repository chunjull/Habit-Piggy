import { Link } from 'react-router-dom';

const Today = () => {
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
                <button type="button" className="sidebar-nav active btn text-start w-100 py-3 px-5 mb-0 border-0 fs-6">
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
              <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6">
                <i className="bi bi-gear fs-6 me-4"></i>帳號設定
              </button>
            </Link>
          </div>
        </div>
      </div>
      <aside className="bg-light vh-100 py-10 px-5 d-none d-lg-block" style={{width: '306px',}}>
        <div className="mb-5">
          <Link to="/Today" className="sidebar-item">
            <button type="button" className="sidebar-nav active btn text-start w-100 py-3 px-5 mb-0 border-0 fs-6">
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
          <button type="button" className="sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6">
            <i className="bi bi-gear fs-6 me-4"></i>帳號設定
          </button>
        </Link>
      </aside>
      <main className="container pt-4 py-10">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex justify-content-between align-items-center pb-4 pb-lg-5 border-bottom border-darkgray">
              <h5 className="fs-5 fs-lg-3 text-darkgray">2023 年 09 月 17 日</h5>
              <h5 className="fs-5 fs-lg-3 text-dark fw-bold">10:22:49</h5>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between py-4 border-bottom border-darkgray">
              <div className="form-check ms-5 mb-3 mb-lg-0">
                <input type="checkbox" name="readCNN" id="readCNN" className="form-check-input fs-6" />
                <label htmlFor="readCNN" className="form-check-label fs-6">閱讀 CNN News</label>
              </div>
              <div className="ms-11 ms-lg-0">
                <span className="habitTag dailyHabit me-4">每日</span>
                <span className="habitTag addHabit me-4">養成</span>
                <span className="text-warning fw-bold">罰款：$10</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between py-4 border-bottom border-darkgray">
              <div className="form-check ms-5 mb-3 mb-lg-0">
                <input type="checkbox" name="sugarFree" id="sugarFree" className="form-check-input fs-6" />
                <label htmlFor="sugarFree" className="form-check-label fs-6">不喝含糖飲料</label>
              </div>
              <div className="ms-11 ms-lg-0">
                <span className="habitTag dailyHabit me-4">每日</span>
                <span className="habitTag minusHabit me-4">戒除</span>
                <span className="text-warning fw-bold">罰款：$50</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between py-4 border-bottom border-darkgray">
              <div className="form-check ms-5 mb-3 mb-lg-0">
                <input type="checkbox" name="doExercise" id="doExercise" className="form-check-input fs-6" />
                <label htmlFor="doExercise" className="form-check-label fs-6">有氧運動</label>
              </div>
              <div className="ms-11 ms-lg-0">
                <span className="habitTag weeklyHabit me-4">每週</span>
                <span className="habitTag addHabit me-4">養成</span>
                <span className="text-warning fw-bold">罰款：$25</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between py-4 border-bottom border-darkgray">
              <div className="form-check ms-5 mb-3 mb-lg-0">
                <input type="checkbox" name="writeNote" id="writeNote" className="form-check-input fs-6" />
                <label htmlFor="writeNote" className="form-check-label fs-6">寫筆記</label>
              </div>
              <div className="ms-11 ms-lg-0">
                <span className="habitTag dailyHabit me-4">每日</span>
                <span className="habitTag addHabit me-4">養成</span>
                <span className="text-warning fw-bold">罰款：$10</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
  );
};

export default Today;