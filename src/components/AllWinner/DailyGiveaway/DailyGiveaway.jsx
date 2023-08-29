import React from 'react'
import link_img from '../../../img/link_img'
export default function DailyGiveaway() {
    return (
        <div className='DailyGiveaway'>
            <div className="DailyGiveawayLeft">
                <div className="title">Еженедельная раздача</div>
                <div className="time">
                    <div className="blockTime">
                        <span>00</span>
                        <div className="timeTitle">Дней</div>
                    </div>
                    <div className="blockTime">
                        <span>11</span>
                        <div className="timeTitle">Час</div>
                    </div>
                    <div className="blockTime">
                        <span>08</span>
                        <div className="timeTitle">Мин</div>
                    </div>
                    <div className="blockTime">
                        <span>36</span>
                        <div className="timeTitle">Сек</div>
                    </div>
                </div>
            </div>
            <div className="DailyGiveawayCenter">
                <div className="price"><span>143532.23</span> ₽</div>
                <p className="title">
                    <span className='gunTitle'>AK-47</span>
                    <span className='skinTitle'>Hydroponic</span>
                </p>
                <div className="members">
                    Участников: <span>16</span>
                </div>
            </div>
            <div className="DailyGiveawayRight">
                <img className='gun' src={link_img.gun} alt="" />
                <img className='imgBg' src={link_img.smoke} alt="" />
                <div className="radial"></div>
            </div>

        </div>
    )
}
