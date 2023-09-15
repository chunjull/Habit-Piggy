import { Parallax } from 'react-parallax';
import Saving from '../../assets/images/about-img-3.jpg';

const ImageThree = () => (
  <Parallax className="image position-relative" blur={10} bgImage={Saving} strength={800} bgImageStyle={{minHeight:"100vh"}}>
    <div className="content position-absolute d-flex flex-column justify-content-center align-items-center">
      <h4 className="lobster-two text-white bg-primary fs-1 img-txt p-5 mb-5 mb-lg-7">03</h4>
      <p className="text-white text-center fs-6 fs-lg-4">
      但如果你在某天沒有完成目標怎麼辦？<br />別擔心！<br />我們相信失敗也是學習的機會。<br />當你未能達成目標時，<br />Habit Piggy 會扣除一小筆罰款，<br />以提醒你保持自律。
      </p>
    </div>
  </Parallax>
);

export default ImageThree