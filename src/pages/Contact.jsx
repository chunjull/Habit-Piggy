import { Link } from 'react-router-dom';

const Contact = () => {
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
      <aside className="sidebar bg-light py-10 px-5 d-none d-lg-block" style={{width: '306px',}}>
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
      <div className="container pt-4 pb-10 pt-lg-10">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="fs-lg-10 fw-bold pb-5 pb-lg-7 mb-5 mb-lg-7 border-bottom border-darkgray">問題排解</h3>
              <form>
                <div className="mb-3 mb-lg-5 row">
                  <label for="userName" className="col-sm-3 col-form-label fs-6 fs-lg-5">使用者名稱</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control border-0 bg-lightgray text-darkgray fs-6 py-3" id="userName" placeholder="Piggy" disabled></input>
                  </div>
                </div>
                <div className="mb-3 mb-lg-5 row">
                  <div className="col-sm-3 fs-6 fs-lg-5">問題類別</div>
                  <div className="col-sm-9">
                    <select className="form-select fs-6 bg-white border-lightgray" aria-label="Default select">
                      <option selected>請選擇問題類別</option>
                      <option value="1">修正問題</option>
                      <option value="2">管理帳戶與設定</option>
                      <option value="3">其他</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 mb-lg-5 row">
                  <div className="col-sm-3 fs-6 fs-lg-5">發生日期</div>
                  <div className="col-sm-9">
                    <button type="button" className="btn btn-lightgray fs-6 border border-lightgray bg-white w-100 text-end">
                      DD/MM/YYYY
                    </button>
                  </div>
                </div>
                <div className="row mb-11">
                  <label for="contact" className="col-sm-3 col-form-label fs-6 fs-lg-5">問題描述</label>
                  <div className="col-sm-12">
                  <div className="form-floating">
                    <textarea className="form-control bg-white" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '160px',}}></textarea>
                    <label for="floatingTextarea">請描述您遇到的問題⋯⋯</label>
                  </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-outline-primary bg-white text-primary fs-6 py-3 px-9">取消</button>
                  <button type="button" className="btn btn-primary text-white fs-6 py-3 px-9 ms-7">送出</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Contact;