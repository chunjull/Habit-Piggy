import SideBar from "../components/sideBar";
import HabitMasonry from "../components/habit/HabitMasonry";

const HabitTarget = () => {

  const habitTargetList = [
    {
      '習慣標題': '閱讀 CNN News',
      '習慣頻率': '每日',
      '習慣罰款': '$10',
      '習慣類型': '養成',
      '習慣期限起日': '2023/08/30',
      '習慣期限迄日': '2023/09/20',
      '累積罰款': '$20',
      '最佳連續紀錄': '14天',
      '備註': '每天一篇',
      '習慣狀態': '進行中',
    },
    {
      '習慣標題': '不喝含糖飲料',
      '習慣頻率': '每日',
      '習慣罰款': '$50',
      '習慣類型': '戒除',
      '習慣期限起日': '2023/09/04',
      '習慣期限迄日': '2023/10/26',
      '累積罰款': '$150',
      '最佳連續紀錄': '8天',
      '備註': '千萬不要再喝含糖飲料了！設定了高額的罰款，希望我不要再變胖了，嗚嗚',
      '習慣狀態': '進行中',
    },
    {
      '習慣標題': '有氧運動',
      '習慣頻率': '每週',
      '習慣罰款': '$10',
      '習慣類型': '養成',
      '習慣期限起日': '2023/09/05',
      '習慣期限迄日': '2023/11/30',
      '累積罰款': '$30',
      '最佳連續紀錄': '14天',
      '備註': '運動 gogogo',
      '習慣狀態': '進行中',
    },
    {
      '習慣標題': '寫感謝筆記',
      '習慣頻率': '每日',
      '習慣罰款': '$10',
      '習慣類型': '養成',
      '習慣期限起日': '2023/09/11',
      '習慣期限迄日': '2023/10/02',
      '累積罰款': '$0',
      '最佳連續紀錄': '6天',
      '備註': '紀錄每一天',
      '習慣狀態': '進行中',
    }
  ]
       
  return(
    <div className="d-flex flex-column flex-lg-row">
      <SideBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mt-4 mt-md-12 mb-5 mb-md-7 ">
              <h2 className="fs-3 fs-md-10 fw-bold">目標習慣</h2>
              <button
                type="button"
                className="fs-9 fs-md-7 bg-fourth text-white border-0 rounded-1 px-5 py-1 d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#habitAdd">
                <span className="me-1 fs-6 fs-lg-5">新增習慣</span>
                <i className="bi bi-plus fs-5 fs-lg-4"></i>
              </button>
              
              <div className="modal fade" id="habitAdd" tabindex="-1" aria-labelledby="habitAddLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content bg-white">
                    <div className="modal-header border-0">
                      <h5 className="modal-title fs-5 fs-lg-2 fw-bold" id="habitAddLabel">新增習慣</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3 mb-lg-5 row">
                          <label for="habitName" className="col-sm-3 col-form-label fs-6 fs-lg-5">習慣名稱</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control bg-white fs-6 py-3" id="habitName" placeholder="請輸入習慣名稱"></input>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-5 row align-items-center">
                          <label for="habitFrequency" className="col-sm-3 col-form-label fs-6 fs-lg-5">習慣頻率</label>
                          <div className="col-sm-9">
                            <div type="text" className="form-control border-0 bg-white fs-6 py-3 px-0" id="habitFrequency">
                              <button type="button" className="btn btn-lightgray defaultTag dailyTag me-5">每日</button>
                              <button type="button" className="btn btn-lightgray defaultTag weeklyTag">每週</button>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-5 row">
                          <label for="habitFee" className="col-sm-3 col-form-label fs-6 fs-lg-5">習慣罰款</label>
                          <div className="col-sm-9">
                            <div type="text" className="form-control border-0 bg-white fs-6 py-3 px-0 d-flex justify-content-between align-items-center" id="habitFee">
                              <button type="button" className="btn btn-lightgray rounded-5 fs-6 feeTag">10</button>
                              <div className="border-bottom border-darkgray" style={{width: '64px'}}></div>
                              <button type="button" className="btn btn-lightgray rounded-5 fs-6 feeTag">25</button>
                              <div className="border-bottom border-darkgray" style={{width: '64px'}}></div>
                              <button type="button" className="btn btn-lightgray rounded-5 fs-6 feeTag">50</button>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-5 row align-items-center">
                          <label for="habitType" className="col-sm-3 col-form-label fs-6 fs-lg-5">習慣類型</label>
                          <div className="col-sm-9">
                            <div type="text" className="form-control border-0 bg-white fs-6 py-3 px-0" id="habitType">
                              <button type="button" className="btn btn-lightgray defaultTag addTag me-5">養成</button>
                              <button type="button" className="btn btn-lightgray defaultTag minusTag">戒除</button>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-5 row">
                          <label for="habitDate" className="col-sm-3 col-form-label fs-6 fs-lg-5">習慣期限</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control bg-white fs-6 py-3" id="habitDate"></input>
                          </div>
                        </div>
                        <div className="mb-3 mb-lg-5 row">
                          <label for="habitRemark" className="col-sm-3 col-form-label fs-6 fs-lg-5">習慣備註</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control bg-white fs-6 py-3" id="habitRemark" placeholder="請輸入習慣備註"></input>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer border-0">
                      <button type="button" className="btn btn-primary text-white w-100 fs-6" data-bs-toggle="modal" data-bs-target="#habitAddSuccess">新增習慣</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="modal fade" id="habitAddSuccess" tabindex="-1" aria-labelledby="habitAddSuccessLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content bg-white">
                    <div class="modal-header border-0 px-7 pb-0">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center px-7 pt-0">
                      <i class="bi bi-check-circle fs-1 text-primary"></i>
                      <p className="fs-5 mb-0 pt-5">已新增目標習慣</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom border-darkgray" />
            <div className="mt-5 mt-md-10 mb-11 mb-md-12">
              <HabitMasonry habitList={habitTargetList}/>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
  }

export default HabitTarget;

  