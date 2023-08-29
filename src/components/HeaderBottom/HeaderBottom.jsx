import React from 'react'
import HeaderBottomCard from './HeaderBottomCards'
import link_img from '../../img/link_img'
import './Headerbottom.scss'

export default function HeaderBottom() {
  return (
    <div className='HeaderBottom'>
        <div className="HeaderBottomMain">
            <HeaderBottomCard img={link_img.gun} color={'9830b3'}/>
            <HeaderBottomCard img={link_img.gun} color={'9830b3'}/>
            <HeaderBottomCard img={link_img.gun} color={'3092bb'}/>
            <HeaderBottomCard img={link_img.gun} color={'c9405d'}/>
            <HeaderBottomCard img={link_img.gun} color={'1dd87e'}/>
            <HeaderBottomCard img={link_img.gun} color={'de7422'}/>
            <HeaderBottomCard img={link_img.gun} color={'c9405d'}/>
            <HeaderBottomCard img={link_img.gun} color={'1dd87e'}/>
            <HeaderBottomCard img={link_img.gun} color={'de7422'}/>
        </div>
    </div>
  )
}
