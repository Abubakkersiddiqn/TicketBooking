import React from "react";

import './Home.scss';

import NavBar from "../../components/navbar/NavBar";
import SliderSlick from "../../components/Slider/SliderSlick";
import MovieList from "../../components/Movie/MovieList";

// a slide object contains the image link, title and function/click event for when a user clicks on a card


const Home = ({movie}) => {

  
 
  return (
   <div className="home">
   <NavBar/>
     <SliderSlick/>
     <MovieList movie={movie} />
    <div className="homecontainer">
    
    
    </div>
    
    

   </div>
  
  
  )
};

export default Home;
