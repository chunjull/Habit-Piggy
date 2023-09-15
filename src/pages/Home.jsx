import aboutImage from '../assets/images/about.jpg';
import Slick from '../components/slick';
import MyMasonry from '../components/masonry';
import { Link } from 'react-router-dom';
import MyParallax from '../components/parallax';

const Home = () => {
  return (
  <>
    <div className="banner">
      <div className="container text-center w-100 w-sm-75 w-md-50 d-flex flex-column justify-content-center align-items-center h-100">
        <p className="lobster-two display-2 text-white typewriter1">Do and Track,</p>
        <p className="lobster-two display-2 text-white typewriter2">or Feed me!</p>
      </div>
    </div>

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-lg-8">
          <div className="my-11 my-md-16 p-7 px-md-9 border border-4 border-primary rounded-2">
            <h3 className="fw-bold fs-5 fs-md-1 text-primary mb-5 text-center">歡迎來到 Habit Piggy！</h3>
            <p className="fs-md-3 mb-3 mb-md-5">這是一個全新的習慣養成工具，專為那些渴望改變生活方式、建立健康習慣的人們設計。</p>
            <p className="fs-md-3 mb-3 mb-md-5">你是否想擺脫壞習慣，同時建立良好的生活習慣？</p>
            <p className="fs-md-3 mb-0">現在，就讓 Habit Piggy 與你攜手同行，幫助你實現目標。</p>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row justify-content-md-end">
        <div className="col-10 mb-7 mb-md-11">
          <h3 className="fw-bold fs-4 fs-md-10 mb-3 mb-md-5"> <span className="title-underline">ABOUT</span></h3>
            <p className="fs-6 fs-md-3">如何使用「Habit Piggy」？<br />
              非常簡單！</p>
        </div>
      </div>
    </div>
    <MyParallax />

    <div className="bg-light">
      <div className="container">
        <div className="row pt-7 pb-12 py-md-13 justify-content-center">
          <div className="col-12 col-md-10 ">
            <div className="mb-6 mb-md-11">
              <h3 className="fw-bold fs-4 fs-md-10 mb-3 mb-md-5"> <span className="title-underline">FEATURES</span></h3>
              <p className="fs-7 fs-md-3 mb-0">「Habit Piggy」不僅僅是一個養成習慣的工具，它還提供了強大的追蹤和統計功能。</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 col-sm-10 col-md-12">
                <Slick />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row my-11 my-md-16">
        <div className="col-12 col-lg-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="fw-bold fs-4 fs-md-10 mb-3 mb-md-5"> <span className="title-underline">FAQs</span></h3>
              <p className="fs-7 fs-md-3">關於「Habit Piggy」的常見問題，你好奇的、全都在這裡！</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className="accordion accordion-flush" id="accordionExample">
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed fs-7 fs-md-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Habit Piggy 能夠免費使用嗎？
                </button>
              </h4>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex fs-8 fs-md-4">
                  是的，Habit Piggy 提供免費使用的基本版本，讓您開始建立習慣，並享受核心功能。同時，我們也提供付費版，讓訂閱會員享受更多的功能。
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed fs-7 fs-md-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  我可以設定多少個目標習慣？
                </button>
              </h4>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex fs-8 fs-md-4">
                  免費版允許您設定最多三個目標習慣，而訂閱會員則可以無限制地新增目標習慣。
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed fs-7 fs-md-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  未能完成目標的罰款如何計算？
                </button>
              </h4>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex fs-8 fs-md-4">
                  未能完成目標的罰款計算取決於您在目標設定時指定的金額和條件。每次未達成目標時，系統將扣除相應金額。
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed fs-7 fs-md-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  除了習慣養成，還有哪些功能呢？
                </button>
              </h4>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex fs-8 fs-md-4">
                  除了習慣養成，Habit Piggy還提供圖表分析、自定義習慣執行頻率等高級功能，幫助您更全面地管理和改進您的習慣。
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed fs-7 fs-md-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                  該如何養成習慣呢？
                </button>
              </h4>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex fs-8 fs-md-4">
                  要養成習慣，首先在應用程式中設定您的目標習慣。每當您完成一項目標，您將獲得獎勵，但未達成目標時，您將支付罰款。這種積極的激勵機制有助於提高自律性。更多的養成習慣方法可以參閱我們的「推薦文章」。
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingSix">
                <button className="accordion-button fs-7 fs-md-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                  我可以隨時取消訂閱 Habit Piggy 嗎？
                </button>
              </h4>
              <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex fs-8 fs-md-4">
                  是的，你可以隨時取消訂閱Habit Piggy。<br />
                  我們希望你對我們的服務感到滿意，因此沒有任何長期合約或隱藏費用。你可以在任何時間通過設置中的相應選項來取消訂閱。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <div className="row">
            <div className="col-md-9">
              <h3 className="fw-bold fs-4 fs-md-10 mb-3 mb-md-5"> <span className="title-underline">RECOMMEND</span></h3>
              <p className="fs-7 fs-md-3 mb-0">「Habit Piggy」受到全球數十個國家的使用者歡迎，快來看看我們的用戶推薦評價！</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 mt-md-11">
        <MyMasonry />
      </div>
    </div>

    <div className="text-center bg-custom vh-100 d-flex flex-column justify-content-center align-items-center">
      <h3 className="fw-bold fs-4 fs-md-10 mb-7 mb-md-11">
        <span className="title-underline">立即開始建立好習慣！</span>
        </h3>
      <Link to="/Login" className="btn btn-secondary fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12">會員登入</Link>
    </div>
  </>
  );
};

export default Home;
