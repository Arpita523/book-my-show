import "../CSS/SelectSeats.css"
import { seatsList } from "../data"
import SeatsInput from "./SeatsInput"

const SelectSeats = () => {
  return (
    <div className='SS_wrapper'>
        <h1 className="SS_heading"> Select Seats : -</h1>
        <div className="SS_main_container">
            {seatsList.map((el, index) => {
                return(
                    <SeatsInput text={el} key={index}/>
                )
            })}
        </div>
    </div>
  )
}

export default SelectSeats
