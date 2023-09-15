import { Parallax } from 'react-parallax';
import Hiking from '../../assets/images/about-img-2.jpg';

const ImageTwo = () => (
  <Parallax className="image position-relative" blur={10} bgImage={Hiking} strength={800} bgImageStyle={{minHeight:"100vh"}}>
    <div className="content position-absolute d-flex flex-column justify-content-center align-items-center">
      <h4 className="lobster-two text-white bg-primary fs-1 img-txt p-5 mb-5 mb-lg-7">02</h4>
      <p className="text-white text-center fs-6 fs-lg-4">
        接下來，<br />每當你完成目標習慣，<br />離夢想更進一步就是最好的獎勵。</p>
    </div>
  </Parallax>
);

export default ImageTwo;