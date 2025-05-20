import { useState } from 'react'
import './App.css'
import { SongList } from './components/SongList/SongList'

function App() {
  const [showSongs, setShowSongs] = useState(false)
  return (
    <div className="home-container">
      <h1 className="main-title">Setlist Creator</h1>
      <div className="button-group">
        <button
          className="main-btn"
          onClick={() => setShowSongs(true)}
        >
          Visualizar Músicas
        </button>
        <button className="main-btn">Criar Setlist</button>
      </div>
      {showSongs && (
        <div style={{ marginTop: '2rem' }}>
          <SongList />
          <button
            className="main-btn"
            style={{ marginTop: '2rem' }}
            onClick={() => setShowSongs(false)}
          >
            Voltar
          </button>
        </div>
      )}
    </div>
  )
}

export default App
