import './App.css'
import { useState, useEffect } from 'react'
import AnimeMode from './animeMode.tsx'
import CharacterMode from './characterMode.tsx'
import DescriptionMode from './descriptionMode.tsx'
import HabilitiesMode from './habilitiesMode.tsx'

function App() {
  const [route, setRoute] = useState<'main'|'animeMode'|'characterMode'|'descriptionMode'|'habilitiesMode'>('main')
  const [showSettings, setShowSettings] = useState(false)
  const [theme, setTheme] = useState<'light'|'dark'>('light')
  const [audio] = useState(new Audio('/backgroundMusic.ogg'))

  // Handle theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  // Lazy load audio
  useEffect(() => {
    audio.loop = true; // Loop the audio

    return () => {
      audio.pause();
    };
  }, [audio]);

  const handlePlayAudio = () => {
    audio.play().catch(error => {
      console.error("Audio playback failed:", error);
    });
  };

  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light')
  }

  if (route === 'animeMode') return <AnimeMode onBack={() => setRoute('main')} />
  if (route === 'characterMode') return <CharacterMode onBack={() => setRoute('main')} />
  if (route === 'descriptionMode') return <DescriptionMode onBack={() => setRoute('main')} />
  if (route === 'habilitiesMode') return <HabilitiesMode onBack={() => setRoute('main')} />

  return (
    <>
      <div className='background'></div>
      
      <div className="settings-container" aria-hidden={!showSettings}>
        <button
          className="settings-button"
          aria-label="Open settings"
          onClick={() => setShowSettings(s => !s)}
        >
          <img src="/settingsIcon.png" alt="Settings" />
        </button>

        <div className={`settings-card ${showSettings ? 'open' : ''}`} role="dialog" aria-modal="false">
          <h3>Settings</h3>
          <div className="settings-option">
            <label>Theme</label>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
          <button className="settings-close" onClick={() => setShowSettings(false)}>Close</button>
        </div>
      </div>
      
      <div className="music-container">
        <button className="music-button" onClick={handlePlayAudio}>
          Start Game Music
        </button>
      </div>
      
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
