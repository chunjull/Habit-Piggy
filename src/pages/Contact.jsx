import SideBar from "../components/sideBar";
import React, { useState } from "react";
import ContactDate from "../components/datepicker";

const Contact = () => {
  return (
  <>
    <div className="d-flex flex-column flex-lg-row fit-container">
      <SideBar />
      <div className="container pt-4 pb-10 pt-lg-10">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="fs-lg-10 fw-bold pb-5 pb-lg-7 mb-5 mb-lg-7 border-bottom border-darkgray">問題排解</h3>
              <form>
                <div className="mb-3 mb-lg-7 row">
                  <label htmlFor="userName" className="col-sm-3 col-form-label fs-6 fs-lg-5">使用者名稱</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control border-0 bg-lightgray text-darkgray fs-6 py-3" id="userName" placeholder="Piggy" disabled></input>
                  </div>
                </div>
                <div className="mb-3 mb-lg-7 row">
                  <label htmlFor="problemSelect" className="col-sm-3 col-form-label fs-6 fs-lg-5">問題類別</label>
                  <div className="col-sm-9">
                    <select className="form-select fs-6 bg-white border-lightgray text-darkgray" aria-label="Default select" id="problemSelect">
                      <option >請選擇問題類別</option>
                      <option value="1">修正問題</option>
                      <option value="2">管理帳戶與設定</option>
                      <option value="3">其他</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 mb-lg-7 row">
                  <label htmlFor="contactDate" className="col-sm-3  col-form-label fs-6 fs-lg-5">發生日期</label>
                  <div className="col-sm-9">
                    <ContactDate></ContactDate>
                  </div>
                </div>
                <div className="row mb-11">
                  <label htmlFor="contactText" className="col-sm-3 col-form-label fs-6 fs-lg-5">問題描述</label>
                  <div className="col-sm-12">
                  <div className="form-floating">
                    <textarea className="form-control bg-white" placeholder="Leave a comment here" id="contactText" style={{height: '80px',}}></textarea>
                    <label htmlFor="floatingTextarea">請描述您遇到的問題⋯⋯</label>
                  </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-primary text-white fs-6 py-3 px-9 ms-7" data-bs-toggle="modal" data-bs-target="#deliverySuccess">送出</button>
                </div>
              </form>

              <div class="modal fade" id="deliverySuccess" tabindex="-1" aria-labelledby="deliverySuccessLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content bg-white">
                    <div class="modal-header border-0 px-7 pb-0">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center px-7 pt-0">
                      <i class="bi bi-check-circle fs-1 text-primary"></i>
                      <p className="fs-5 mb-0 pt-5">已送出您的問題</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Contact;