import HabitTag from "./HabitTag";

const getHabitTagClass = (habitTag) => {
  switch (habitTag) {
    case "每日":
      return "dailyHabit";
    case "每週":
      return "weeklyHabit";
    case "養成":
      return "addHabit";
    case "戒除":
      return "minusHabit";
    default:
      return "";
  }
};

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
        <HabitTag 
          text={ habit["習慣頻率"] }
          customStyle={ getHabitTagClass(habit["習慣頻率"]) }
        />
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6">習慣罰款:</span>
        <span className="d-block fs-7 fs-lg-6">{habit["習慣罰款"]}</span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-5">
        <span className="d-block fs-7 fs-lg-6">習慣類型:</span>
        <HabitTag 
          text={ habit["習慣類型"] }
          customStyle={ getHabitTagClass(habit["習慣類型"]) }
        />
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
        >
          <span className="fs-7 fs-lg-6">刪除習慣</span>
        </button>
      </div>
    </div>
  );
};

export default HabitCard;
