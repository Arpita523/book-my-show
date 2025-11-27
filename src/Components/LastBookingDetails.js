import { useContext, useEffect } from "react"
import BsContext from "../Context/BsContext"
import "../CSS/LastBookingDetails.css"
import { seatsList } from "../data"

const LastBookingDetails = () => {
  const context = useContext(BsContext)
  const { lastBookingDetails, handleGetBooking } = context
  useEffect(() => {
    handleGetBooking()
  }, [])

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking : -</h2>
      {
        lastBookingDetails ? (
          <>
          <div className="seats_conatiner">
            <p className="seats_header">Seats : -</p>
            <ul className="seats">
              {seatsList.map((seat, index) => (
                <li className="seats_values" key={index}>
                  seat : {Number(lastBookingDetails.seats[seat])}
                </li>
              ))}
            </ul>
          </div>
          <p className="slots" style={{textAlign: "left"}}> Slot : 00.00 AM <span>{lastBookingDetails.slot}</span></p>
          <p className="movie">Movie: <span>{lastBookingDetails.movie}</span></p>
          </>
        ) : (
          <p className="no_previous" >No Previous Booking</p>
        )
      }
    </div> 
  )
}

export default LastBookingDetails
