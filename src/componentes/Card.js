import React, { useState, useEffect } from 'react';
import './Card.css';
import wNumb from "wnumb";

var Format = wNumb({
          decimals: 0,
          thousand: '.',
          prefix: '$'
      });

function Card(props) {

  const [compra,setBtnCompra] =useState(false);
  


  var onMouseEnter  = (e) => {

    setBtnCompra(true);

  };

  var onMouseLeave  = (e) => {

    setBtnCompra(false);

  };



  
  return (
    <div onMouseEnter={ onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="card" >        
        <center><img src={props.thumbnail} /></center>
        <hr/>
        <div className="suppler">
          <div className="textsuppler">{props.supplier}</div>
          <div className="textnet_content">{props.net_content}</div>
        </div>
        <div className="titulo">{props.title}</div>
        <div className="precio">{Format.to( parseFloat(props.price_real))} </div>
        <div className="unidad"> x {props.units_sf} unds</div>
      </div>
      { compra && <div className="btn_carrito"><div className="text_btn_carrito" onClick={() => { props.datajsoncomprar(props.id,{"titulo": props.title, "precio": props.price_real});}}>Agregar al carrito</div></div>}
      
    </div>
  );
}

export default Card;