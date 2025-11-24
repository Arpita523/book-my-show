import "../CSS/LastBookingDetails.css"
import { seatsList } from "../data"

const LastBookingDetails = () => {
  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking : -</h2>
      <div className="seats_conatiner">
        <p className="seats_header">Seats : -</p>
        <ul className="seats">
          {seatsList.map((seat, index) => (
            <li className="seats_values" key={index}>
              seat : 0
            </li>
          ))}
        </ul>
      </div>
      <p className="slots" style={{textAlign: "left"}}> Slot : 00.00 AM <span></span></p>
      <p className="movie">Movie: <span>Avatar</span></p>
    </div>
  )
}

export default LastBookingDetails
