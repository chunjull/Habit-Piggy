import SibeBar from "../components/sideBar";
import HabitCard from "../components/habit/HabitCard";

const HabitTarget = () => {

  const habitList = [
    {
      '習慣標題': '閱讀 CNN News',
      '習慣頻率': '每日',
      '習慣罰款': '$10',
      '習慣類型': '養成',
      '習慣期限': '2023/08/30~2023/09/20',
      '累積罰款': '$20',
      '最佳連續紀錄': '14天',
      '備註': '無',
      '習慣狀態': '進行中',
    },
    {
      '習慣標題': '不喝含糖飲料',
      '習慣頻率': '每日',
      '習慣罰款': '$50',
      '習慣類型': '戒除',
      '習慣期限': '2023/09/04~2023/10/26',
      '累積罰款': '$150',
      '最佳連續紀錄': '8天',
      '備註': '千萬不要再喝含糖飲料了！設定了高額的罰款，希望我不要再喝含糖飲料了，嗚嗚',
      '習慣狀態': '進行中',
    },
    {
      '習慣標題': '有氧運動',
      '習慣頻率': '每週',
      '習慣罰款': '$10',
      '習慣類型': '養成',
      '習慣期限': '2023/09/05~2023/11/30',
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
      '習慣期限': '2023/09/11~2023/10/02',
      '累積罰款': '$0',
      '最佳連續紀錄': '6天',
      '備註': '紀錄每一天',
      '習慣狀態': '進行中',
    }
  ]
       
  return(
    <div className="d-flex flex-column flex-lg-row">
      <SibeBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mt-4 mt-md-12 mb-5 mb-md-7 ">
              <h2 className="fs-10 fw-bold">目標習慣</h2>
              <button type="button" className="fs-10 text-primary bg-transparent border-0"><i className="bi bi-plus-circle"></i></button>
            </div>

            <hr />

            <div className="row">
              <div className="col-12 col-lg-6">
                {habitList.map((habit, index) => (
                  <HabitCard habit={habit} key={`${index}${habit.習慣標題}`} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  )
  }

export default HabitTarget;

  