import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import './index.css';
import Sdata from './sdata';
console.log();
ReactDOM.render(
  <>
  <h1 className='heading_style'>List of top 10 netflix movies of all time</h1>
  <Card
  imgsrc={Sdata[0].imgscr} alt="myPic" className="card_img"
  title={Sdata[0].title}
  sname = {Sdata[0].sname}
  link ={Sdata[0].links}/>
  <Card
  imgsrc={Sdata[1].imgscr} alt="myPic" className="card_img"
  title={Sdata[1].title}
  sname = {Sdata[1].sname}
  link ={Sdata[1].links}/>
  <Card
  imgsrc={Sdata[2].imgscr} alt="myPic" className="card_img"
  title={Sdata[2].title}
  sname = {Sdata[2].sname}
  link ={Sdata[2].links}/>
  <Card
  imgsrc={Sdata[3].imgscr} alt="myPic" className="card_img"
  title={Sdata[3].title}
  sname = {Sdata[3].sname}
  link ={Sdata[3].links}/>
  <Card
  imgsrc={Sdata[4].imgscr} alt="myPic" className="card_img"
  title={Sdata[4].title}
  sname = {Sdata[4].sname}
  link ={Sdata[4].links}/>
  <Card
  imgsrc={Sdata[5].imgscr} alt="myPic" className="card_img"
  title={Sdata[5].title}
  sname = {Sdata[5].sname}
  link ={Sdata[5].links}/>
  <Card
  imgsrc={Sdata[6].imgscr} alt="myPic" className="card_img"
  title={Sdata[6].title}
  sname = {Sdata[6].sname}
  link ={Sdata[6].links}/>
  <Card
  imgsrc={Sdata[7].imgscr} alt="myPic" className="card_img"
  title={Sdata[7].title}
  sname = {Sdata[7].sname}
  link ={Sdata[7].links}/>
  <Card
  imgsrc={Sdata[8].imgscr} alt="myPic" className="card_img"
  title={Sdata[8].title}
  sname = {Sdata[8].sname}
  link ={Sdata[8].links}/>
  <Card
  imgsrc={Sdata[9].imgscr} alt="myPic" className="card_img"
  title={Sdata[9].title}
  sname = {Sdata[9].sname}
  link ={Sdata[9].links}/>
  <Card
  imgsrc={Sdata[10].imgscr} alt="myPic" className="card_img"
  title={Sdata[10].title}
  sname = {Sdata[10].sname}
  link ={Sdata[10].links}/>
  </>,
  document.getElementById('root')
);
