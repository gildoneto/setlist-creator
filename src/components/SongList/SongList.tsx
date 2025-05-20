import { SongCard } from '../SongCard/SongCard'
import songsData from '../../../songs.json'

export function SongList() {
  return (
    <div>
      {songsData.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  )
}