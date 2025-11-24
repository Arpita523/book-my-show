import { useContext } from "react"
import BsContext from "../Context/BsContext"
import "../CSS/SelectSeats.css"
import { seatsList } from "../data"
import SeatsInput from "./SeatsInput"

const SelectSeats = () => {
    const {noOfSeats, changeNoOfSeats} = useContext(BsContext)

  return (
    <div className='SS_wrapper'>
        <h2 className="SS_heading"> Select Seats : -</h2>
        <div className="SS_main_container">
            {seatsList.map((el, index) => {
                return(
                    <SeatsInput text={el} key={index} noOfSeats={noOfSeats} changeNoOfSeats={changeNoOfSeats}/>
                )
            })}
        </div>
    </div>
  )
}

export default SelectSeats
