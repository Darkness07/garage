import React from 'react'
import './CasesByRarity.scss'
import CasesByRarityCard from './CasesByRarityCard/CasesByRarityCard'
export default function CasesByRarity() {
    return (
        <div className='CasesByRarity'>
            <h2>Кейсы по раритетности</h2>
            <nav className='mainWidht'>
                <a href="#">Навигация </a>
                <a href="#">Навигация </a>
                <a href="#">Навигация </a>
                <a href="#">Навигация </a>
            </nav>
            <div className="CasesByRarityCardMain mainWidht">
                <CasesByRarityCard />
                <CasesByRarityCard />
                <CasesByRarityCard />
                <CasesByRarityCard />
                <CasesByRarityCard />
                <CasesByRarityCard />
                <CasesByRarityCard />
                <CasesByRarityCard />
                <CasesByRarityCard />
                <CasesByRarityCard />
            </div>
        </div>
    )
}
