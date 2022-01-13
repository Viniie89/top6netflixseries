import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Card';
import Sdata from './Sdata';
import './index.css';

function ncard(val){
   return(
    <Cards
    sname={val.sname}
    imgsrc ={val.imgscr}
    title = {val.title}
    link =   {val.links}
  />
   );
}

ReactDOM.render(
  <>
  
    <h1>Top 6 best netflix series to watch</h1>
     {Sdata.map(ncard)}
   
  </>,
  document.getElementById("root")
);