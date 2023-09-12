import SideBar from "../components/SideBar";
import BarChart from "../components/barChart";
import HabitTag from "../components/habit/HabitTag";

const PiggyBank = () => {


  // 長條圖資料
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8];
  const expenses = [100, 150, 120, 200, 180, 160, 140, 190];
  const isEvenWeek = [true, false, true, false, true, false, true, false];

  // 歷史紀錄資料

  const bankHistory = [
    {
      id: 1,
      '編號': '01',
      '習慣名稱': '不喝含糖飲料',
      '罰款金額': '$50',
      '習慣類型': '戒除',
      '未完成日期': '2023/09/16',
    },
    {
      id: 2,
      '編號': '02',
      '習慣名稱': '閱讀 CNN News',
      '罰款金額': '$10',
      '習慣類型': '養成',
      '未完成日期': '2023/09/14',
    },
    {
      id: 3,
      '編號': '03',
      '習慣名稱': '閱讀 CNN News',
      '罰款金額': '$10',
      '習慣類型': '養成',
      '未完成日期': '2023/09/13',
    },
    {
      id: 4,
      '編號': '04',
      '習慣名稱': '有氧運動',
      '罰款金額': '$25',
      '習慣類型': '養成',
      '未完成日期': '2023/09/09',
    },
    {
      id: 5,
      '編號': '05',
      '習慣名稱': '不喝含糖飲料',
      '罰款金額': '$50',
      '習慣類型': '戒除',
      '未完成日期': '2023/09/08',
    },
    {
      id: 6,
      '編號': '06',
      '習慣名稱': '不喝含糖飲料',
      '罰款金額': '$50',
      '習慣類型': '戒除',
      '未完成日期': '2023/09/07',
    },
    {
      id: 7,
      '編號': '07',
      '習慣名稱': '閱讀 CNN News',
      '罰款金額': '$10',
      '習慣類型': '養成',
      '未完成日期': '2023/09/07',
    },
    {
      id: 8,
      '編號': '08',
      '習慣名稱': '閱讀 CNN News',
      '罰款金額': '$10',
      '習慣類型': '養成',
      '未完成日期': '2023/09/03',
    },
    { 
      id: 9,
      '編號': '09',
      '習慣名稱': '有氧運動',
      '罰款金額': '$10',
      '習慣類型': '養成',
      '未完成日期': '2023/09/02',
    },
    {
      id: 10,
      '編號': '10',
      '習慣名稱': '閱讀 CNN News',
      '罰款金額': '$10',
      '習慣類型': '養成',
      '未完成日期': '2023/09/01',
    },
  ];

  return (
    <div className="d-flex flex-column flex-lg-row">
      <SideBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="my-4 mt-md-10 mb-md-5 ">
              <h2 className="fs-4 fs-md-1 fw-bold">存錢筒資訊</h2>
            </div>
            <hr />
            <div className="row">
              <div className="col-6 col-lg-3">
                <div className="bg-primary rounded-2 text-white text-end p-5">
                  <span className="d-block fs-5">習慣數目</span>
                  <span className="d-block fs-1">10</span>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="bg-primary rounded-2 text-white text-end p-5">
                  <span className="d-block fs-5">罰款次數</span>
                  <span className="d-block fs-1">26</span>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="bg-light rounded-2 text-end p-5 mt-5 mt-lg-0">
                  <span className="d-block fs-5">累積總罰款</span>
                  <div className="text-dark fw-bold">
                    <span className="fs-5">NT$</span>
                    <span className="fs-1">470</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-7 px-3 py-4 p-md-5 border border-1 rounded-2">
              <BarChart
                weeks={weeks}
                expenses={expenses}
                isEvenWeek={isEvenWeek}
              />
            </div>
            <div className="border border-1 rounded-2 mb-13 mb-lg-10">
              <div className="d-flex justify-content-between align-items-center py-4 px-7 border border-bottom border-1">
                <p className="fs-7 fs-md-6 mb-0">存錢筒歷史紀錄</p>
                <button
                  type="button"
                  className="fs-9 fs-md-7 border border-1 rounded-1 bg-white px-5 py-1 d-flex align-items-center"
                >
                  <span className="me-1">排序方式</span>
                  <i className="bi bi-filter"></i>
                </button>
              </div>
              <table className="table table-hover bg-white">
                <thead className="bg-light">
                  <tr className="">
                    <th scope="col" className="text-start ">
                      編號
                    </th>
                    <th scope="col" className="text-start px-xl-10">
                      習慣名稱
                    </th>
                    <th scope="col" className="text-end px-xl-10">
                      罰款金額
                    </th>
                    <th scope="col" className="text-start px-10 d-none d-xl-table-cell">
                      習慣類型
                    </th>
                    <th scope="col" className="text-end d-none d-xl-table-cell">
                      未完成日期
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {bankHistory.map((item) => (
                    <tr key={item.id}>
                      <th className="text-start ps-4" scope="row">{item['編號']}</th>
                      <td className="text-star ps-xl-10">{item['習慣名稱']}</td>
                      <td className="text-end pe-xl-10">{item['罰款金額']}</td>
                      <td className="text-start ps-10 d-none d-xl-table-cell"><HabitTag text={item['習慣類型']} /></td>
                      <td className="text-center d-none d-xl-table-cell">
                        {item['未完成日期']}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="py-4 pe-7 border border-top border-1">
              <nav
                aria-label="Page navigation"
                className="d-flex justify-content-end"
              >
                <ul className="pagination text-center mb-0">
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
                </ul>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiggyBank;
