import { useContext } from "react"
import BsContext from "../Context/BsContext"
import "../CSS/TimeSchdule.css"
import { timeSlots } from "../data"
import RadioComponents from "./RadioComponents"

const TimeSchdule = () => {
  const {time, changeTime} = useContext(BsContext)
  const handleChangeTime = (val) => {
    changeTime(val)
    localStorage.setItem("slots", val)
  }
  return (
    <>
    <div className="slot_container">
        <h1 className="TS_heading">Select a Schedule : -</h1>
        <div className="TS_main_container">{timeSlots.map((el, index) => {
            return (
                <RadioComponents text={el} key={index} data={time} changeSelection={handleChangeTime}/>
            )
        })}</div>
    </div>
    </>
  )
}

export default TimeSchdule
