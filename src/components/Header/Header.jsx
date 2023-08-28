import React, { useState } from 'react'
import './Header.scss'
import link_img from '../../img/link_img'

export default function Header() {
  const [follower,setFollower] = useState(16900)
  return (
    <div className='Header'>
        <nav>
          <div className="massager">
            <div className="block vk">
              <div className="ico">
                <img src={link_img.vk} alt="" />
              </div>
                <p>
                  <span className="title">ВКонтакте</span>
                  <span className="follower"><img src={link_img.user} alt="" />{follower}</span>
                </p>
            </div>
            <div className="block inst">
              <div className="ico">
                <img src={link_img.instagram} alt="" />
              </div>
                <p>
                  <span className="title">instagram</span>
                  <span className="follower"><img src={link_img.user} alt="" />{follower}</span>
                </p>

            </div>
            <div className="block telegram">
              <div className="ico">
                <img src={link_img.telegram} alt="" />
              </div>
                <p>
                  <span className="title">telegram</span>
                  <span className="follower"><img src={link_img.user} alt="" />{follower}</span>
                </p>

            </div>
          </div>
          <img src={link_img.logo} alt="" />
          <div className="navRight">
            <div className="block wallet">
              <div className="ico">
                <img src={link_img.wallet} alt="" />
              </div>
                <p>
                  <span className="title">ВКонтакте</span>
                  <span className="follower"><img src={link_img.user} alt="" />{follower}</span>
                </p>
            </div>
            <div className="block user">
              <div className="ico">
                <img src={link_img.user2} alt="" />
              </div>
                <p>
                  <span className="title">instagram</span>
                  <span className="follower"><img src={link_img.user} alt="" />{follower}</span>
                </p>
            </div>
            <div className="language">
              Ru
            </div>
          </div>
        </nav>
    </div>
  )
}
