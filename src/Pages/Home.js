import LastBookingDetails from "../Components/LastBookingDetails";
import SelectMovie from "../Components/SelectMovie";
import SelectSeats from "../Components/SelectSeats";
import TimeSchdule from "../Components/TimeSchdule";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="select_movie_container">
             <SelectMovie/>
        </div>  
        <div className="last_booking_deatils_container"><LastBookingDetails/></div>   
        </div> 
        <div className="time_seats_container">
          <TimeSchdule/>
          <SelectSeats/>
          <button className="BN-btn">Book Now</button>
        </div>
    </div>
  );
};

export default Home;
