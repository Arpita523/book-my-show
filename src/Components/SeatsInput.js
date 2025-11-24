
import "../CSS/SeatsInput.css"

const SeatsInput = ({ text, noOfSeats, changeNoOfSeats }) => {

  const change_seats = (e) => {
    changeNoOfSeats({...noOfSeats,[e.target.name]: Number(e.target.value) })

    localStorage.setItem("seats", JSON.stringify({...noOfSeats,[e.target.name]: Number(e.target.value) }) )
  }

  return (
    <div className='form-ceck-label'>
      <span className='text'>{text}</span>
      <input type="number" className="seats-input" placeholder="0" max="30" min="0" name={text} onChange={change_seats} value={noOfSeats[text]}/>
    </div>
  )
}

export default SeatsInput
