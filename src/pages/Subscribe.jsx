import { Link } from 'react-router-dom';

const Subscribe = () => {
  return (
  <>
  <div className="subscribeBanner">
    <div className="container py-11 py-lg-16">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 text-center text-lg-start ps-lg-17">
            <h2 className="fs-5 fs-lg-3 text-white lobster-two mb-3 mb-lg-5">Subscribe</h2>
            <h3 className="fs-4 fs-lg-1 text-white fw-bold mb-5 mb-lg-7">每月只需支付 NT$109 即可暢享訂閱服務</h3>
            <p className="fs-6 fs-lg-4 text-white mb-5 mb-lg-7">習慣數目無限制、多元化頻率設定、圖表分析，以及更多專屬功能。</p>
            <Link  className="btn btn-primary text-white fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12" to="/Checkout">月付最低 NT$109</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div className="container py-11 py-lg-16">
      <h3 className="fs-1 fw-bold text-center mb-7 mb-lg-12">升級訂閱會員有什麼好處？</h3>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <table className="table table-bordered border-primary text-center mb-7 mb-lg-12">
            <thead>
              <tr className="fs-6 fs-lg-3 table-primary border-primary py-4 py-lg-5">
                <th scope="col">使用功能</th>
                <th scope="col">免費會員</th>
                <th scope="col">訂閱會員</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fs-6 fs-lg-3 py-4 py-lg-5">
                <td scope="row">新增習慣數目</td>
                <td>最多三個</td>
                <td className="fw-bold text-primary">無上限</td>
              </tr>
              <tr className="fs-6 fs-lg-3 py-4 py-lg-5">
                <td scope="row">設定罰款</td>
                <td>可</td>
                <td>可</td>
              </tr>
              <tr className="fs-6 fs-lg-3 py-4 py-lg-5">
                <td scope="row">設定執行頻率</td>
                <td>只有每日</td>
                <td className="fw-bold text-primary">自訂</td>
              </tr>
              <tr className="fs-6 fs-lg-3 py-4 py-lg-5">
                <td scope="row">圖表分析</td>
                <td>無</td>
                <td className="fw-bold text-primary">有</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <h3 className="fs-1 fw-bold mb-4 mb-lg-6">心動不如馬上心動！</h3>
            <p className="fs-6 fs-lg-4 mb-7 mb-lg-10">現在訂閱，第一個月內完全免費！</p>
            <Link className="btn btn-primary text-white fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12" to="/Checkout">立即訂閱</Link>
          </div>
        </div>
      </div>
    </div>

  </>
  );
};

export default Subscribe;