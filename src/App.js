import React,{useState,useEffect} from "react";
import axios from 'axios'
import Home from "./pages/home/Home";
import {BrowserRouter, Route,Routes} from "react-router-dom";


import Login from "./pages/login/Login";

import Single from "./pages/Single/Single";

import TicketBooking from "./pages/TicketBooking/TicketBooking";
import AddMovie from "./components/Movie/AddMovie";
import Register from "./components/Register/Register";
import BookingStatus from "./components/Booking/BookingStatus";



// const movie=[
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.thehansindia.com%2Fh-upload%2F2021%2F06%2F29%2F1085111-rrr-movie.jpg&f=1&nofb=1",
//   "rating": 7,
//   "summary": "RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli ",
//   "trailer": "https://www.youtube.com/embed/oO8TTM2FgIA",
//   "price":250 ,
//   "occupied": [20, 21, 30, 1, 2, 8]
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU",
//   "price":250 ,
//   "occupied": [20, 21, 30, 1, 2, 8]
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0",
//   "price":250 ,
//   "occupied": [20, 21, 30, 1, 2, 8]
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA",
//   "price":250 ,
//   "occupied": [20, 21, 30, 1, 2, 8]
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8",
//   "price":250 ,
//   "occupied": [20, 21, 30, 1, 2, 8]
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E",
//   "price":250 ,
//   "occupied": [37, 25, 44, 13, 2, 3]

//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI",
//   "price":250 ,
//   "occupied": [9, 41, 35, 11, 65, 26]
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w",
//   "price":250 ,
//   "occupied": [37, 25, 44, 13, 2, 3]
//   }
//   ]
function App() {
  const [movie,setMovie]=useState([]);
  console.log(movie)

  useEffect(()=>{
      const fetchAllMovies= async()=>{
      try{
        const res = await axios.get("http://localhost:8800/api/movie/getallmovie");
        const result =res.data;
        setMovie(result)
      }catch(err){
        console.log(err)
      }
      }
      fetchAllMovies()
  },[])
  const movieHandler=(currentMovie)=>{
    setMovie((preMovie)=>{
      return [...preMovie,currentMovie];
    })
  }
  console.log(movieHandler)
 return (
    <div className="App">
     <BrowserRouter>

      <Routes>
        <Route path="/" >

          <Route index element={<Home movie={movie}/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
         
          <Route path='movie/:Id' element={<Single movie={movie}/>} ></Route>
          <Route exact path='booking/:Id' element={<TicketBooking />}></Route>
          <Route path="/addmovie" element={<AddMovie/>}> </Route>
          <Route path="bookingstatus/:userId" element={<BookingStatus/>}></Route>
        </Route>
        
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
