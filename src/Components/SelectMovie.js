import { useContext } from "react"
import BsContext from "../Context/BsContext"
import "../CSS/SelectMovie.css"
import { moviesList } from "../data"
import RadioComponents from "./RadioComponents"

const SelectMovie = () => {
  const { movie, changeMovie } = useContext(BsContext)

  const handleChangeMovie = (val) => {
    changeMovie(val)
    localStorage.setItem("movie", val)
  }

  return (
    <>
      <h1 className="SM_heading">Select A Movie : -</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => (
          <RadioComponents
            text={el}
            key={index}
            data={movie}
            changeSelection={handleChangeMovie}
          />
        ))}
      </div>
    </>
  )
}

export default SelectMovie
