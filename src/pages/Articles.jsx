import { Link } from 'react-router-dom';

const Articles = () => {
  return (
  <>
    <div className="container py-11 py-lg-16">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h2 className="fs-5 fs-lg-10 fw-bold text-center pb-7 pb-lg-13 border-bottom border-black border-2">推薦文章</h2>
          <div className="border-bottom border-black">
            <Link to="/Article" className="card mt-7 mb-5 my-lg-11 border-0 bg-transparent">
              <div className="row">
                <div className="col-lg-1 d-none d-lg-block">
                  <p className="fs-6 text-darkgray mb-1">AUG</p>
                  <div className="border-bottom border-darkgray" style={{width: '24px'}}></div>
                  <p className="fs-1 text-darkgray fw-bold mb-0">28</p>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <img src="https://images.unsplash.com/photo-1466193341027-56e68017ee2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" className="w-100" alt="article picture" />
                </div>
                <div className="col-lg-7">
                    <div className="card-body p-0 px-lg-5">                      <h5 className="card-title fs-6 fs-lg-3 fw-bold mb-0 mb-lg-7">《原子習慣》幫你打造更好版本的自己</h5>
                    <p className="card-text d-none d-lg-block fs-6 mb-7">每個人都有自己的目標與願望，但要達成這些目標並不總是容易的事情。我們往往會在改變的路上遇到困難，可能會失去動力，甚至回到過去的舊習慣中。然而，《原子習慣》的作者詹姆斯・克⋯⋯</p>
                    <div className="d-none d-lg-block border-bottom border-darkgray"></div>
                    <div className="d-none d-lg-flex justify-content-end mt-5">
                    <Link to="/Article" className="card-link link-black fs-6 fw-bold">觀看文章<i className="bi bi-arrow-right text-primary ps-1"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="border-bottom border-black">
            <Link to="/Article">
              <div className="card mt-7 mb-5 my-lg-11 border-0 bg-transparent">
                <div className="row">
                  <div className="col-lg-1 d-none d-lg-block">
                    <p className="fs-6 text-darkgray mb-1">JUL</p>
                    <div className="border-bottom border-darkgray" style={{width: '24px'}}></div>
                    <p className="fs-1 text-darkgray fw-bold mb-0">07</p>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <img src="https://images.unsplash.com/photo-1683009427513-28e163402d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" className="w-100" alt="article picture" />
                  </div>
                  <div className="col-lg-7">
                    <div className="card-body p-0 px-lg-5">
                      <h5 className="card-title fs-6 fs-lg-3 fw-bold mb-0 mb-lg-7">培養新習慣前，先用５個步驟破除心魔</h5>
                      <p className="card-text d-none d-lg-block fs-6 mb-7">近年專門研究習慣和生產力的學者指出，專注養成習慣的過程，遠比訂立計畫重要。Habit Piggy 編輯團隊為你整理出 5 個步驟，幫助你破除心魔、建立好習慣，並且讓你可以獲得更好的自己。⋯⋯</p>
                      <div className="d-none d-lg-block border-bottom border-darkgray"></div>
                      <div className="d-none d-lg-flex justify-content-end mt-5">
                        <Link to="/Article" className="card-link link-black fs-6 fw-bold">觀看文章<i className="bi bi-arrow-right text-primary ps-1"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="border-bottom border-black">
            <Link to="/Article">
              <div className="card mt-7 mb-5 my-lg-11 border-0 bg-transparent">
                <div className="row">
                  <div className="col-lg-1 d-none d-lg-block">
                    <p className="fs-6 text-darkgray mb-1">JUN</p>
                    <div className="border-bottom border-darkgray" style={{width: '24px'}}></div>
                    <p className="fs-1 text-darkgray fw-bold mb-0">23</p>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" className="w-100" alt="article picture" />
                  </div>
                  <div className="col-lg-7">
                    <div className="card-body p-0 px-lg-5">
                      <h5 className="card-title fs-6 fs-lg-3 fw-bold mb-0 mb-lg-7">三週養成習慣是迷思！做對這件事更重要</h5>
                      <p className="card-text d-none d-lg-block fs-6 mb-7">過去，常聽研究指出「養成習慣需要 21 天」一說，只要三週時間就能夠培養出全新的好習慣。不過近年來的心理學研究指出，其實養成一個人真實的習慣平均要花 66 天，並因習慣的困難程度⋯⋯</p>
                      <div className="d-none d-lg-block border-bottom border-darkgray"></div>
                      <div className="d-none d-lg-flex justify-content-end mt-5">
                      <Link to="/Article" className="card-link link-black fs-6 fw-bold">觀看文章<i className="bi bi-arrow-right text-primary ps-1"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="border-bottom border-black">
            <Link to="/Article">
              <div className="card mt-7 mb-5 my-lg-11 border-0 bg-transparent">
                <div className="row">
                  <div className="col-lg-1 d-none d-lg-block">
                    <p className="fs-6 text-darkgray mb-1">JUN</p>
                    <div className="border-bottom border-darkgray" style={{width: '24px'}}></div>
                    <p className="fs-1 text-darkgray fw-bold mb-0">12</p>
                  </div>
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <img src="https://images.unsplash.com/photo-1515847049296-a281d6401047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" className="w-100" alt="article picture" />
                  </div>
                  <div className="col-lg-7">
                    <div className="card-body p-0 px-lg-5">
                      <h5 className="card-title fs-6 fs-lg-3 fw-bold mb-0 mb-lg-7">養成習慣前，如何建立能夠做到的目標？</h5>
                      <p className="card-text d-none d-lg-block fs-6 mb-7">你能否養成新習慣、改變壞習慣的關鍵，取決於你自己是否真的「有決心」每天重複去做到新的目標。如果自己無法下定決心培養習慣，再多的工具和養成方式都是徒勞，本文將帶你一起探討⋯⋯</p>
                      <div className="d-none d-lg-block border-bottom border-darkgray"></div>
                      <div className="d-none d-lg-flex justify-content-end mt-5">
                      <Link to="/Article" className="card-link link-black fs-6 fw-bold">觀看文章<i className="bi bi-arrow-right text-primary ps-1"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-9 pt-lg-13">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item"><a className="page-link fs-lg-5 active" href="#">1</a></li>
            <li className="page-item"><a className="page-link fs-lg-5 ms-4" href="#">2</a></li>
            <li className="page-item"><a className="page-link fs-lg-5 ms-4" href="#">3</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </>
  );
};

export default Articles;