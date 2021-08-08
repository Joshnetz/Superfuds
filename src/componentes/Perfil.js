import React, { useState, useEffect } from 'react';


function Perfil(props) {
  console.log(props);
  return (
    <div id="perfil">
      <div id="perfil_info">{props.nombre}<br/><span>Mi Perfil <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg"><path d="M5.97059 6.5C5.804 6.49985 5.6443 6.43463 5.52658 6.31868L0.5 1.37363L1.38803 0.5L5.97059 5.00824L10.5532 0.5L11.4412 1.37363L6.4146 6.31868C6.35656 6.37641 6.28739 6.42219 6.21116 6.45332C6.13492 6.48445 6.05313 6.50032 5.97059 6.5Z" fill="black"></path></svg></span></div>
      <div><img src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png" /></div>
    </div>
  );
}

export default Perfil;