import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    icon: "bi-pencil-square",
    text: "設定習慣養成目標"
  },
  {
    icon: "bi-clock",
    text: "更改習慣追蹤頻率"
  },
  {
    icon: "bi-envelope",
    text: "目標達成時的提醒"
  },
  {
    icon: "bi-calendar4-week",
    text: "輕鬆追蹤自己的進度"
  },
  {
    icon: "bi-bar-chart-line",
    text: "查看習慣的歷史記錄"
  },
  {
    icon: "bi-filter",
    text: "分析你的改變趨勢"
  }
];

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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
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
        {items.map((item, i) => (
          <div key={`${i}${item.text}`} className="">
            <div className="d-flex flex-column align-items-center mx-7 mb-6 mb-md-12 py-10 py-md-15 border border-4 border-primary rounded-2">
              <p className="slick-icon fs-10 fs-md-12 text-primary">
                <i className={`bi ${item.icon}`}></i>
              </p>
              <p className="fs-7 fs-md-4 mt-md-7 mb-0">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItems;
