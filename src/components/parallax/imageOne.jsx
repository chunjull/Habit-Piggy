import { Parallax } from 'react-parallax';
import Work from '../../assets/images/about-img-1.jpg';

const ImageOne = () => (
  <Parallax className="image position-relative" blur={10} bgImage={Work} strength={800} bgImageStyle={{minHeight:"100vh"}}>
    <div className="content position-absolute d-flex flex-column justify-content-center align-items-center">
      <h4 className="lobster-two text-white bg-primary fs-1 img-txt p-5 mb-5 mb-lg-7">01</h4>
      <p className="text-white text-center fs-6 fs-lg-4">
      首先，<br />設定你想養成的目標習慣，<br />無論是每天運動、每天讀書，<br />還是其他任何你希望改變或增加的習慣。</p>
    </div>
  </Parallax>
);

export default ImageOne;