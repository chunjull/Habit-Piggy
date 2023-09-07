import { Link } from 'react-router-dom';

const Contact = () => {
  return (
  <>
    <div className="container py-11 py-lg-16">
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
  </>
  );
};

export default Contact;