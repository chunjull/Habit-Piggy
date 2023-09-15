import HabitTag from "./HabitTag";

const HabitCard = ({ habit, disable }) => {
  return (
    <div
      className="p-7 border border-darkgray border-1 rounded-1"
      key={habit["習慣標題"]}
    >
      <div className="mb-3 mb-md-5">
        <h3 className="fs-6 fs-lg-5 fw-bold">{habit["習慣標題"]}</h3>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6">習慣頻率:</span>
        <HabitTag text={ habit["習慣頻率"] } />
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6">習慣罰款:</span>
        <span className="d-block fs-7 fs-lg-6">{habit["習慣罰款"]}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6">習慣類型:</span>
        <HabitTag text={ habit["習慣類型"] } />
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6">習慣期限:</span>
        <span className="d-block fs-7 fs-lg-6">{habit["習慣期限起日"]}~{habit["習慣期限迄日"]}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6">累積罰款:</span>
        <span className="d-block fs-7 fs-lg-6">{habit["累積罰款"]}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6">最佳連續紀錄:</span>
        <span className="d-block fs-7 fs-lg-6">{habit["最佳連續紀錄"]}</span>
      </div>
      <div className="d-flex justify-content-between mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6 habit-card-title">備註:</span>
        <span className="d-block fs-8 fs-lg-7 text-end" style={{width: '280px'}}>{habit["備註"]}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6">習慣狀態:</span>
        <span className="d-block fs-7 fs-lg-6">{habit["習慣狀態"]}</span>
      </div>
      <div className="mt-11 text-end">
        <button
          type="button"
          className={`btn py-2 px-4 border-0 text-white rounded-1 ${disable ? 'btn-gray' : 'btn-danger' }`}
          data-bs-toggle="modal"
          data-bs-target="#habitDelete"
        >
          <span className="fs-7 fs-lg-6">刪除習慣</span>
        </button>
      </div>
      <div className="modal fade" id="habitDelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-white">
            <div className="modal-header border-0 px-7">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center px-7">
              <p className="fs-5 mb-5">您是否確認刪除此習慣？</p>
              <p className="mb-0">提醒您，該習慣的所有資料及記錄皆會被刪除，且無法復原。</p>
            </div>
            <div className="modal-footer justify-content-center border-0 px-7 pt-0 pb-7">
              <button type="button" className="btn btn-outline-warning py-3 px-8" data-bs-toggle="modal" data-bs-target="#confirm">確認</button>
              <button type="button" className="btn btn-warning py-3 px-8" data-bs-dismiss="modal">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
