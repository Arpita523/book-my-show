import { useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
    const [movie, changeMovie] = useState('');
    const [time, changeTime] = useState('');
    const [noOfSeats, changeNoOfSeats] = useState({
        A1: "",
        A2: "",
        A3: "",
        B1: "",
        B2: "",
        B3: "" ,
        C1: "",
        C2: "",
        C3: "",
        D1: "",
        D2: "",
        D3: "",      
    });

    const [lastBookingDetails, changeLastBookingDetails] = useState(null)

  return (
    <BsContext.Provider value={{movie, changeMovie, time, changeTime, noOfSeats, changeNoOfSeats, lastBookingDetails,changeLastBookingDetails }}>{props.children}</BsContext.Provider>
  )
}

export default BsState
