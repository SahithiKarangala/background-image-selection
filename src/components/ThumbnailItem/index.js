import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onSelectThumbNail, isSelected} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const selectThisThumbNail = () => {
    onSelectThumbNail(id)
  }

  const selectedStyle = isSelected ? '' : 'not-selected'

  return (
    <li className="thumb-nail-img-list">
      <button
        type="button"
        onClick={selectThisThumbNail}
        className="button-ele"
      >
        <img
          src={thumbnailUrl}
          className={`thumb-nail-img ${selectedStyle}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
