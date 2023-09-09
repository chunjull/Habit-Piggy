import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultipleItems = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="">
          <div className="d-flex flex-column align-items-center mx-7 mb-6 mb-md-12 py-10 py-md-15 border border-4 border-primary">
            <p className="slick-icon fs-10 fs-md-12  text-primary">
              <i class="bi bi-pencil-square"></i>
            </p>
            <p className="fs-7 fs-md-4 mt-md-7 mb-0">設定習慣養成目標</p>
          </div>
        </div>
        <div className="">
          <div className="d-flex flex-column align-items-center mx-7 mb-6 mb-md-12 py-10 py-md-15 border border-4 border-primary">
            <p className="slick-icon fs-10 fs-md-12  text-primary">
              <i class="bi bi-clock"></i>
            </p>
            <p className="fs-7 fs-md-4 mt-md-7 mb-0">更改習慣追蹤頻率</p>
          </div>
        </div>
        <div className="">
          <div className="d-flex flex-column align-items-center mx-7 mb-6 mb-md-12 py-10 py-md-15 border border-4 border-primary">
            <p className="slick-icon fs-10 fs-md-12  text-primary">
              <i class="bi bi-envelope"></i>
            </p>
            <p className="fs-7 fs-md-4 mt-md-7 mb-0">目標達成時的提醒</p>
          </div>
        </div>
        <div className="">
          <div className="d-flex flex-column align-items-center mx-7 mb-6 mb-md-12 py-10 py-md-15 border border-4 border-primary">
            <p className="slick-icon fs-10 fs-md-12  text-primary">
              <i class="bi bi-calendar4-week"></i>
            </p>
            <p className="fs-7 fs-md-4 mt-md-7 mb-0">輕鬆追蹤自己的進度</p>
          </div>
        </div>
        <div className="">
          <div className="d-flex flex-column align-items-center mx-7 mb-6 mb-md-12 py-10 py-md-15 border border-4 border-primary">
            <p className="slick-icon fs-10 fs-md-12  text-primary">
              <i class="bi bi-bar-chart-line"></i>
            </p>
            <p className="fs-7 fs-md-4 mt-md-7 mb-0">查看習慣的歷史記錄</p>
          </div>
        </div>
        <div className="">
          <div className="d-flex flex-column align-items-center mx-7 mb-6 mb-md-12 py-10 py-md-15 border border-4 border-primary">
            <p className="slick-icon fs-10 fs-md-12  text-primary">
              <i class="bi bi-filter"></i>
            </p>
            <p className="fs-7 fs-md-4 mt-md-7 mb-0">分析你的改變趨勢</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MultipleItems;
