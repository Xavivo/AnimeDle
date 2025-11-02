import './App.css'
import { useState } from 'react'
import AnimeMode from './animeMode.tsx'
import CharacterMode from './characterMode.tsx'
import DescriptionMode from './descriptionMode.tsx'
import HabilitiesMode from './habilitiesMode.tsx'

function App() {
  const [route, setRoute] = useState<'main'|'animeMode'|'characterMode'|'descriptionMode'|'habilitiesMode'>('main')
  if (route === 'animeMode') return <AnimeMode onBack={() => setRoute('main')} />
  if (route === 'characterMode') return <CharacterMode onBack={() => setRoute('main')} />
  if (route === 'descriptionMode') return <DescriptionMode onBack={() => setRoute('main')} />
  if (route === 'habilitiesMode') return <HabilitiesMode onBack={() => setRoute('main')} />
  return (
    
    <>
      <div className='background'></div>
      
      <div className='header'>
        <h1 className='mainTitle'>AnimeDle</h1>
        <p className='subtitle'><strong>¡Welcome to <span style={{ color: '#004dff'}}>AnimeDle</span>, a fun twist on the classic word-guessing game!</strong></p>

        <div className="mode-grid" role="navigation" aria-label="Game modes">
          <button className="buttonMain" onClick={() => setRoute('animeMode')} role="button">Anime Mode</button>
          <button className="buttonMain" onClick={() => setRoute('characterMode')} role="button">Character Mode</button>
          <button className="buttonMain" onClick={() => setRoute('descriptionMode')} role="button">Description Mode</button>
          <button className="buttonMain" onClick={() => setRoute('habilitiesMode')} role="button">Habilities Mode</button>
        </div>
      </div> 
    </>
  )
}

export default App
