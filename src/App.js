import React, {useState, useEffect} from "react";
import "./App.css";
import "./Components/APOD-Timetraveler"
import Axios from "axios"
import APODTimetraveler from "./Components/APOD-Timetraveler";

function App() {
  const baseURL = "https://api.nasa.gov/planetary/apod?api_key=YYeoudU7Z4ywtKjpRS3TAb6ZCiSkFJk5jzusGtqT"
  const toGetDate = "&date="
  const [cDate, setCDate] = useState(0)
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [explanation, setExplanation] = useState("")
  const [video, setVideo] = useState("")

 
    useEffect(() => {
      const fetchData = () => {
        Axios.get(`${baseURL}${toGetDate}${date()}`)
        .then((res) => {
          console.log(res)
          setExplanation(res.data.explanation)
          setImage(res.data.hdurl)
          setVideo(res.data.media_type === "video" ? res.data.url : undefined )
          setTitle(res.data.title)
        })
        .catch((err) => {
          console.log(err)
        })
      }
      fetchData();
    }, [cDate])
  
    

  const date = () => {
    const theDate = new Date();
    theDate.setDate(theDate.getDate() - cDate);
    return theDate.toISOString().slice(0,10);
  }

  const forward = () =>{
    return cDate === 0 ? null : (setCDate(cDate - 1));
  }

  const backward = () =>{
    return (setCDate(cDate + 1));
  }

  const reset = () =>{
    return (setCDate(0));
  }


  return (
    <div className="App">
      <APODTimetraveler cDate={date()} image={image} video={video} title={title} explanation={explanation} forward={forward} backward={backward} reset={reset} />
    </div>
  );
}

export default App;
