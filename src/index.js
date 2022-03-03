import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import './index.css';
import Sdata from './sdata';
function ncard(val){
  console.log(val);
  return(
  <Card
  imgsrc={val.imgscr} alt="myPic" className="card_img"
  title={val.title}
  sname = {val.sname}
  link ={val.links}/>
  );
}
ReactDOM.render(
  <>
  <h1 className='heading_style'>List of top 10 netflix movies of all time</h1>
  {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
);
