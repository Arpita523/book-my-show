import { useContext } from "react";
import LastBookingDetails from "../Components/LastBookingDetails";
import SelectMovie from "../Components/SelectMovie";
import SelectSeats from "../Components/SelectSeats";
import TimeSchdule from "../Components/TimeSchdule";
import BsContext from "../Context/BsContext";
import "../CSS/Home.css";

const Home = () => {

  // ✅ FIX: useContext must be at top level, not inside handleBookNow
  const { 
    movie, 
    time, 
    noOfSeats, 
    handlePostBooking, 
    setErrorMessage, 
    setErrorPopup 
  } = useContext(BsContext);

  const handleBookNow = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select a movie");
    } else {
      handlePostBooking();
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="select_movie_container">
          <SelectMovie />
        </div>
        <div className="last_booking_deatils_container">
          <LastBookingDetails />
        </div>
      </div>

      <div className="time_seats_container">
        <TimeSchdule />
        <SelectSeats />
        <button className="BN-btn" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;
