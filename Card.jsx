import React from 'react';

function Cards(props){
    console.log(props);
    return (
      
    <>
    
    <div className='cards'>
      <div className='card'>
        <img src={props.imgsrc} alt='mypic' className='card__img'/>
        <div className='card__info'>
          <span className='card__category'>{props.title}</span>
           <h4 className='card__title'>{props.sname}</h4>
           <a href={props.link} target="blank">
             <button>Watch Now</button>
           </a>
        </div>
      </div>
    </div>
    
  </>
  
    )
  }
  export default Cards;