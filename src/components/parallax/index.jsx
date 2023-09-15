import React from 'react';
import ImageOne from './imageOne';
import ImageTwo from './imageTwo';
import ImageThree from './imageThree';
import Box from './Box';

const MyParallax = () => {
  return (
    <div>
      <ImageOne />
      <Box />
      <ImageTwo />
      <Box />
      <ImageThree />
    </div>
  );
};

export default MyParallax;