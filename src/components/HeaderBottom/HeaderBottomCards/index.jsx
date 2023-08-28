import React from 'react'
import link_img from '../../../img/link_img'
export default function HeaderBottomCard({img, color}) {
  return (
    <div className='HeaderBottomCard' style={{background: `linear-gradient(-45deg, #${color} 0%, rgb(40 20 82) 35%,  rgb(40 20 82) 65%,  #${color} 100%)`, border:`solid 2px #${color}`}}>
        <div className="HeaderBottomBlockRing" style={{border:`2px solid #${color}`}}>
            <img src={img} alt="" />
        </div>
    </div>
  )
}
