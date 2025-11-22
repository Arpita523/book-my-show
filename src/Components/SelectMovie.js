import "../CSS/SelectMovie.css"
import { moviesList } from "../data"
import RadioComponents from "./RadioComponents"

const SelectMovie = () => {
  return (
    <>
        <h1 className="SM_heading">Select A Movie : -</h1>
        <div className="SM_main_container">
            {moviesList.map((el, index) => (
                <RadioComponents  text={el}  key={index}/>
                ))}
        </div>
    </>
  )
}

export default SelectMovie
