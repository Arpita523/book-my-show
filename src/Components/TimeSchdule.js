import "../CSS/TimeSchdule.css"
import { timeSlots } from "../data"
import RadioComponents from "./RadioComponents"

const TimeSchdule = () => {
  return (
    <>
    <div className="slot_container">
        <h1 className="TS_heading">Select a Schedule : -</h1>
        <div className="TS_main_container">{timeSlots.map((el, index) => {
            return (
                <RadioComponents text={el} key={index}/>
            )
        })}</div>
    </div>
    </>
  )
}

export default TimeSchdule
