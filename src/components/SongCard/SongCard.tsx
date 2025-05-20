import './SongCard.css'

type Song = {
  title: string
  artist: string
  album: string
  albumYear: number
  coverUrl: string
  duration: string
  hasGuitarSolo: boolean
  hasWind: boolean
  isMandatory: boolean
  tags: string[]
}

type SongCardProps = {
  song: Song
}

export function SongCard({ song }: SongCardProps) {
  return (
    <div className="song-card">
      <img className="song-cover" src={song.coverUrl} alt={`Capa do álbum ${song.album}`} />
      <div className="song-info">
        <h2>{song.title}</h2>
        <p><strong>Artista:</strong> {song.artist}</p>
        <p><strong>Álbum:</strong> {song.album} ({song.albumYear})</p>
        <p><strong>Duração:</strong> {song.duration}</p>
        <p><strong>Solo de guitarra:</strong> {song.hasGuitarSolo ? 'Sim' : 'Não'}</p>
        <p><strong>Instrumentos de sopro:</strong> {song.hasWind ? 'Sim' : 'Não'}</p>
        <p><strong>Obrigatória:</strong> {song.isMandatory ? 'Sim' : 'Não'}</p>
        <p><strong>Tags:</strong> {song.tags.join(', ')}</p>
      </div>
    </div>
  )
}