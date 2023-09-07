import { Link } from 'react-router-dom';

const paid_membership = () => {
  return (
  <>
    <div className="container py-11 py-lg-16">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="mb-7 mb-lg-11">
            <h3 className="fs-5 fs-lg-4 mb-5">您的訂閱</h3>
            <div className="text-center bg-light border border-primary border-3 rounded-2 py-5 px-8 py-lg-7 px-lg-10">
              <p className="fs-6 fs-lg-5 mb-3">每月 NT$109</p>
              <p className="fs-7 fs-lg-6 mb-0">你的方案將在 2023/10/17 自動續約，屆時您將被收取 NT$ 109</p>
            </div>
          </div>
          <div>
            <h3 className="fs-5 fs-lg-4 mb-5">管理訂閱</h3>
            <div className="bg-white rounded-1 py-5 px-7 py-lg-7 px-lg-9">
              <p className="fs-7 fs-lg-6 fw-bold mb-3">Habit Piggy 免費版</p>
              <p className="fs-7 fs-lg-6 mb-3">只能同時培養最多三個習慣、無法自訂習慣頻率，也無法享受圖表分析服務。</p>
              <p className="fs-8 fs-lg-7 mb-0 text-darkgray">變更為免費版將會取消您的訂閱項目。</p>
              <div className="d-flex justify-content-center justify-content-lg-end mt-9 mt-lg-11">
                <button type="button" className="btn btn-outline-warning fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12" data-bs-toggle="modal" data-bs-target="#unsubscribe">取消訂閱</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="unsubscribe" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-white">
          <div className="modal-header border-0 px-7">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center px-7">
            <p className="fs-5 mb-0">您是否確認取消訂閱？</p>
          </div>
          <div className="modal-footer justify-content-center border-0 px-7 pt-0 pb-7">
            <button type="button" className="btn btn-outline-warning py-3 px-8" data-bs-toggle="modal" data-bs-target="#confirm">是</button>
            <button type="button" className="btn btn-warning py-3 px-8">否</button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="confirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-white">
          <div className="modal-header border-0 px-7 pb-0">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center px-7 pt-0">
            <i class="bi bi-x-circle fs-1 text-primary"></i>
            <p className="fs-5 mb-0 pt-5">您已取消訂閱</p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default paid_membership;