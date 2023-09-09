import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const habitListRef = useRef(null);
  const [isHabitListShow, setIsHabitListShow] = useState(false);

  const isActiveRoute = (currentPath, pathToCheck) => {
    return currentPath === pathToCheck ? 'active' : '';
  }

  useEffect(() => {
    if (location.pathname === '/HabitTarget') {
      setIsHabitListShow(true);
    } else {
      setIsHabitListShow(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isHabitListShow) {
      habitListRef.current.classList.add('collapsed');
    } else {
      habitListRef.current.classList.remove('collapsed');
    }
  }, [isHabitListShow]);

  return (
    <>
      <div className="d-block d-lg-none container pt-4 ps-4">
        <button
          className="btn btn-secondary rounded-pill"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebarNav"
          aria-controls="offcanvasSidebarNav"
        >
          <i className="bi bi-list"></i>
        </button>

        <div
          className="offcanvas offcanvas-top bg-light mvh-100"
          tabIndex="-1"
          id="offcanvasSidebarNav"
          aria-labelledby="offcanvasSidebarNavLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body px-11">
            <div className="mb-5">
              <Link to="/Today" className="sidebar-item">
                <button
                  type="button"
                  className={`sidebar-nav btn text-start w-100 py-3 px-5 mb-0 border-0 fs-6 ${isActiveRoute(location.pathname, '/Today')}`}
                >
                  <i className="bi bi-house fs-6 me-4"></i>主頁
                </button>
              </Link>
            </div>
            <button
              ref={habitListRef}
              type="button"
              className="sidebar-nav btn text-start w-100 py-3 px-5 mb-5 border-0"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded={isHabitListShow}
              aria-controls="collapseExample"
            >
              <div className="d-flex justify-content-between fs-6 text-black">
                <div className="d-flex">
                  <i className="bi bi-check-circle fs-6 me-4"></i>
                  <p className="fs-6 mb-0">習慣列表</p>
                </div>
                <i className="bi bi-caret-down fs-6"></i>
              </div>
            </button>
            <div className={`collapse ${isHabitListShow? 'show' : ''}`} id="collapseExample">
              <div className="mb-5">
                <Link to="/HabitTarget" className="sidebar-item">
                  <button
                    type="button"
                    className={`sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6 ${isActiveRoute(location.pathname, '/HabitTarget')}`}
                  >
                    <i className="bi bi-bullseye fs-6 me-4"></i>目標習慣
                  </button>
                </Link>
              </div>
              <div className="mb-5">
                <Link to="/Home" className="sidebar-item">
                  <button
                    type="button"
                    className={`sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6 ${isActiveRoute(location.pathname, '/')}`}
                  >
                    <i className="bi bi-clock-history fs-6 me-4"></i>歷史習慣
                  </button>
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <Link to="#" className="sidebar-item">
                <button
                  type="button"
                  className={`sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6 ${isActiveRoute(location.pathname, '/')}`}
                >
                  <i className="bi bi-coin fs-6 me-4"></i>存錢筒
                </button>
              </Link>
            </div>
            <Link to="/Account" className="sidebar-item">
              <button
                type="button"
                className={`sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6 ${isActiveRoute(location.pathname, '/Account')}`}
              >
                <i className="bi bi-gear fs-6 me-4"></i>帳號設定
              </button>
            </Link>
          </div>
        </div>
      </div>
      <aside
        className="bg-light mvh-100 py-10 px-5 d-none d-lg-block"
        style={{ width: "306px" }}
      >
        <div className="mb-5">
          <Link to="/Today" className="sidebar-item">
            <button
              type="button"
              className={`sidebar-nav btn text-start w-100 py-3 px-5 mb-0 border-0 fs-6 ${isActiveRoute(location.pathname, '/Today')}`}
            >
              <i className="bi bi-house fs-6 me-4"></i>主頁
            </button>
          </Link>
        </div>
        <button
          ref={habitListRef}
          type="button"
          className="sidebar-nav btn text-start w-100 py-3 px-5 mb-5 border-0 collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded={isHabitListShow}
          aria-controls="collapseExample"
        >
          <div className="d-flex justify-content-between fs-6 text-black">
            <div className="d-flex">
              <i className="bi bi-check-circle fs-6 me-4"></i>
              <p className="fs-6 mb-0">習慣列表</p>
            </div>
            <i className="bi bi-caret-down fs-6"></i>
          </div>
        </button>
        <div className={`collapse ${isHabitListShow? 'show' : ''}`} id="collapseExample">
          <div className="mb-5">
            <Link to="/HabitTarget" className="sidebar-item">
              <button
                type="button"
                className={`sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6 ${isActiveRoute(location.pathname, '/HabitTarget')}`}
              >
                <i className="bi bi-bullseye fs-6 me-4"></i>目標習慣
              </button>
            </Link>
          </div>
          <div className="mb-5">
            <Link to="#" className="sidebar-item">
              <button
                type="button"
                className={`sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6 ${isActiveRoute(location.pathname, '/')}`}
              >
                <i className="bi bi-clock-history fs-6 me-4"></i>歷史習慣
              </button>
            </Link>
          </div>
        </div>
        <div className="mb-5">
          <Link to="#" className="sidebar-item">
            <button
              type="button"
              className={`sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6 ${isActiveRoute(location.pathname, '/')}`}
            >
              <i className="bi bi-coin fs-6 me-4"></i>存錢筒
            </button>
          </Link>
        </div>
        <Link to="/Account" className="sidebar-item">
          <button
            type="button"
            className={`sidebar-nav btn text-start w-100 py-3 px-5 border-0 fs-6 ${isActiveRoute(location.pathname, '/Account')}`}
          >
            <i className="bi bi-gear fs-6 me-4"></i>帳號設定
          </button>
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
