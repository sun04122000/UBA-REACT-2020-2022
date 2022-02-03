import React from 'react'
import '../Css/Events_InitCard.css';



export const Events_InitCard = (props) => {
  return (
    <>
      <div id="f_card">
        <div id="card_img">
          <img src={props.image} />
        </div>
        <div id="card_cont">
          <div id="card_head">
            {props.date}<br/><br/>
            <h4>{props.event}</h4>
          </div>
          <div id="card_main">
            {props.desc}
          </div>
          <button id="know_card">Know More</button>
        </div>
      </div>
    </>
  )
}