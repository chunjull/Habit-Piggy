import SideBar from "../components/sideBar";
import HabitMasonry from "../components/habit/HabitMasonry";

const HabitHistory = () => {
  const habitHistoryList = [
    {
      習慣標題: "吃至少 3 份蔬菜",
      習慣頻率: "每日",
      習慣罰款: "$25",
      習慣類型: "養成",
      習慣期限起日: "2023/04/08",
      習慣期限迄日: "2023/06/20",
      累積罰款: "$75",
      最佳連續紀錄: "22天",
      備註: "每天最好能吃到 5 份以上！但吃到 3 份的你也很棒！",
      習慣狀態: "已結束",
    },
    {
      習慣標題: "記帳",
      習慣頻率: "每日",
      習慣罰款: "$10",
      習慣類型: "養成",
      習慣期限起日: "2023/04/08",
      習慣期限迄日: "2023/07/31",
      累積罰款: "$60",
      最佳連續紀錄: "12天",
      備註: "錢錢都變成了我喜歡的樣子 QQ",
      習慣狀態: "已結束",
    },
    {
      習慣標題: "理性飲酒",
      習慣頻率: "每週",
      習慣罰款: "$25",
      習慣類型: "戒除",
      習慣期限起日: "2023/05/01",
      習慣期限迄日: "2023/07/31",
      累積罰款: "$75",
      最佳連續紀錄: "7天",
      備註: "喝酒不好",
      習慣狀態: "已結束",
    },
    {
      習慣標題: "寫技術筆記",
      習慣頻率: "每週",
      習慣罰款: "$10",
      習慣類型: "養成",
      習慣期限起日: "2023/07/22",
      習慣期限迄日: "2023/09/09",
      累積罰款: "$0",
      最佳連續紀錄: "56天",
      備註: "你今天寫筆記了嗎？",
      習慣狀態: "已結束",
    },
    {
      習慣標題: "不賴床",
      習慣頻率: "每日",
      習慣罰款: "$10",
      習慣類型: "戒除",
      習慣期限起日: "2023/08/15",
      習慣期限迄日: "2023/09/05",
      累積罰款: "$40",
      最佳連續紀錄: "9天",
      備註: "好想每天都躺在床上！",
      習慣狀態: "已結束",
    },
    {
      習慣標題: "走 5000 步",
      習慣頻率: "每日",
      習慣罰款: "$10",
      習慣類型: "養成",
      習慣期限起日: "2023/08/15",
      習慣期限迄日: "2023/09/16",
      累積罰款: "$20",
      最佳連續紀錄: "19天",
      備註: "走走走",
      習慣狀態: "已結束",
    },
  ];

  return (
    <div className="d-flex flex-column flex-lg-row">
      <SideBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mt-4 mt-md-12 mb-5 mb-md-7 ">
              <h2 className="fs-3 fs-md-10 fw-bold">歷史習慣</h2>
              <button
                type="button"
                className="fs-7 fs-md-5 border border-1 rounded-1 bg-white px-5 py-1 d-flex align-items-center"
              >
                <span className="me-1">排序方式</span>
                <span className="d-none d-md-inline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 3H22L14 12.46V21L10 19V12.46L2 3Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="d-md-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M1.33398 2H14.6673L9.33398 8.30667V14L6.66732 12.6667V8.30667L1.33398 2Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <hr />
            <div className="mt-5 mt-md-10 mb-11 mb-md-12">
              <HabitMasonry habitList={habitHistoryList} disable={true} />
            </div>
            <div className="d-md-none">
              <nav
                aria-label="Page navigation"
                className="d-flex justify-content-center"
              >
                <ul className="pagination text-center mb-11">
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link ms-2" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link ms-2" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link ms-2" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link ms-2" href="#">
                      5
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitHistory;
