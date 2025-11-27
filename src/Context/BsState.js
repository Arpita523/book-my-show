import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  const [errorPopup, setErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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

    const [lastBookingDetails, setLastBookingDetails] = useState(null)

    const handlePostBooking = async () => {
      const response = await fetch(`http://localhost:5000/api/bookings`, {
        method: 'POST',
        headers: {  
          "content-type": "application/json",
        },
        body: JSON.stringify({
          movie : movie,
          slot : time,
          seats : noOfSeats
        })
      })
      const data = await response.json()
      setErrorPopup(true);
      setErrorMessage(data.message)

      if(response.status === 200){
        changeTime("")
        changeMovie("")
        setLastBookingDetails(data.data)

        localStorage.clear();
      }
    }
    const handleGetBooking = async () => {
      const response = await fetch(`http://localhost:5000/api/bookings`, {
        method: 'GET',
      })
      const data = await response.json()
      setLastBookingDetails(data.data)
    }
    useEffect(() => {
      const movie = localStorage.getItem("movie")
      const slot = localStorage.getItem("slot")
      const seats = JSON.parse(localStorage.getItem("seats"))

      if(movie){
        changeMovie(movie)
      }
      if(slot){
        changeTime(slot)
      }
      if(seats){
        changeNoOfSeats(seats)
      }
    }, [])

  return (
    <BsContext.Provider value={{movie, changeMovie, time, changeTime, noOfSeats, changeNoOfSeats, lastBookingDetails,setLastBookingDetails, handleGetBooking, handlePostBooking, errorMessage, errorPopup, setErrorMessage, setErrorPopup }}>{props.children}</BsContext.Provider>
  )
}

export default BsState;
