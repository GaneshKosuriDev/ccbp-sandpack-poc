import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <li className="tracks-list-item">
      <div className="song-details-container">
        <img className="song-image" src={imageUrl} alt="track" />
        <div className="song-name-and-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="song-duration-and-delete-button-container">
        <p className="duration">{duration}</p>
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTrack}
          testid="delete"
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
