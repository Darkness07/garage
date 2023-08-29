import React from 'react'
import link_img from '../../../img/link_img'

export default function FreeCaseCard() {
  return (
    <div className='FreeCaseCard'>
        <div className="price"><span>0</span> ₽</div>
        <img src={link_img.case_1} alt="" />
        <p className="title">Бесплатный кейс #1</p>
    </div>
  )
}
