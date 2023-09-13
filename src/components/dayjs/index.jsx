import React, { Component } from 'react';
import dayjs from 'dayjs';

const now = dayjs();
const year = now.format('YYYY');
const month = now.format('MM');
const day = now.format('DD');
const time = now.format('HH:mm:ss');

const TimeDisplay = () => {
  return (
    <>
      <h5 className="fs-5 fs-lg-3 text-darkgray"><p className="mb-0">{year} 年 {month} 月 {day} 日</p></h5>
      <h5 className="fs-5 fs-lg-3 text-dark fw-bold"><p className="mb-0">{time}</p></h5>
    </>
  );
};

export default TimeDisplay;