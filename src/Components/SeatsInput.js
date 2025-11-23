
import "../CSS/SeatsInput.css"

const SeatsInput = ({key, text}) => {
  return (
    <div className='form-ceck-label'>
      <span className='text'>{text}</span>
      <input type="number" className="seats-input" placeholder="0" max="30" min="0"/>
    </div>
  )
}

export default SeatsInput
