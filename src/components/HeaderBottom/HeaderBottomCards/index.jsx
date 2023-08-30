import React from 'react'
import link_img from '../../../img/link_img'
export default function HeaderBottomCard({ img, color }) {
  return (
    <div className={
      `HeaderBottomCard ${
        color == '9830b3' ? 'c1' :
        color == '3092bb' ? 'c2' :
        color == 'c9405d' ? 'c3' :
        color == '1dd87e' ? 'c4' :
        color == 'de7422' ? 'c5' :
         ''}
      `} style={{ background: `linear-gradient(-45deg, #${color} 0%, rgb(40 20 82) 35%,  rgb(40 20 82) 65%,  #${color} 100%)`, border: `solid 0px #${color}` }}>
      <div className="HeaderBottomBlockRing" style={{ border: `2px solid #${color}` }}>
        <img src={img} alt="" />
      </div>
      <div className="CardMenu">
        <div className="CardMenuTop">
          <img src={link_img.Layer_777} alt="" />
          <p>Desert Eagle | Corinth...</p>
        </div>
        <div className="CardMenuBottom">
          <img src={link_img.userAvatar} alt="" />
          <p>WhiteFoxxxx</p>
          
        </div>
      </div>
    </div>
  )
}
