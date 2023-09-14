import { Parallax } from 'react-parallax';
import Work from '../../assets/images/article-4.jpg';

const imageOne = () => {
  return (
    <>
    <Parallax className='image' blur={0} bgImage={Work} strength={800} bgImageStyle={{minHeight:"100vh"}}>
      <div className='content'>
        <span className="img-txt">a trip to Space</span>
      </div>
    </Parallax>
    </>
  );
};

export default imageOne;