import React from 'react'
import './FreeСase.scss'
import FreeCaseCard from './FreeCaseCard/FreeCaseCard'

export default function FreeСase() {
  return (
    <div className='FreeСase'>
        <h2>Бесплатные кейсы</h2>
        <nav className='mainWidht'>
            <a href="#">Навигация </a>
            <a href="#">Навигация </a>
            <a href="#">Навигация </a>
            <a href="#">Навигация </a>
        </nav>
        <div className="FreeCaseMain mainWidht">
          <FreeCaseCard/>
          <FreeCaseCard/>
          <FreeCaseCard/>
          <FreeCaseCard/>
          <FreeCaseCard/>
        </div>
    </div>
  )
}
