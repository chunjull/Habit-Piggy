import SideBar from "../components/sideBar";

const Today = () => {
  return (
  <>
    <div className="d-flex flex-column flex-lg-row">
      <SideBar />
      <main className="container pt-4 pb-10 pt-lg-10">
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