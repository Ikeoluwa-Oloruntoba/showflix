








import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./PopupComponents";
import './movie.css'
import Batman from "./batman.jfif";
import Logo from './Logo.svg'
import { useSelector, useDispatch } from "react-redux";
import { ImPlay3, ImClock, ImStarEmpty, ImHeart } from "react-icons/im";
import {
  setLoading,
  fetchMovie,
  fetchMovies,
} from "../../store/actions/actions";
import { useParams } from "react-router";



const Container = styled.div `

display: flex;
position:relative;
justify-content: center;
align-items: center;

flex-wrap:wrap;
width: 100%;
margin-top: 10px ;

h2{
    position:absolute;
    padding-top:25px;
  font-family: 'Poppins', sans-serif;
  width:100%
 
  
 
}


`;

const Card = styled.div `

@media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 1){

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

position: relative;
width: 330px;
height: 400px;
box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(255, 255, 255, 0.1),
  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
border-radius: 15px;
margin:25px;
transition: 0.5s;

.image{
  position: relative;
  width: 330px;
  height: 400px;
border-radius: 15px;
}

.but{
  position: relative;
  bottom:80px;
  color: black;
  font-family: 'Poppins', sans-serif;
  border-radius:25px;
}

}

@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {


  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  left:50px;
  position: relative;
  width: 220px;
  height: 300px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 10px;
  transition: 0.5s;
  
  .image{
    position: relative;
    width: 220px;
  height: 300px;
  border-radius: 15px;
  }
  
  .but{
    position: relative;
    bottom:80px;
    color: black;
    font-family: 'Poppins', sans-serif;
    border-radius:25px;
  }

}
`

function Movie() {
  const id = useParams();
  const movieDispatch = useDispatch();
  const dataMovi = useSelector((state) => state.movie);
  const dataMovie = useSelector((state) => state.movies);

  useEffect(() => {
    console.log(id.id);
    let val = id.id;
    movieDispatch(fetchMovie(val));
    let move = dataMovi.Title;
    movieDispatch(fetchMovies(move));
    setLoading();
    // console.log(dataMovi);
  }, []);

  return (
      <main className="main">
      <div className="Logo">
            <img src={Logo} alt="" />
        </div>

          <Card >
          <img src={dataMovi.Poster} alt="" className="image" />
         
          </Card>
          <div className="info">
          <h2 className="title" style={{fontSize:"1.8rem"}} >{dataMovi.Title}</h2>
          <p>{dataMovi.Plot}</p>
        <ul className="un">
        
          <li className="list">
            <ImClock /> {dataMovi.Released}
          </li>
          <li className="list">
            <ImStarEmpty /> {dataMovi.imdbRating}
          </li>

          <li className="list">
            <ImPlay3 /> {dataMovi.Runtime}
          </li>
        </ul>

        <button className="butt">Watch Now</button><ImHeart style={{  background:" #D9DBE9",
        height: "15px",
        width: "15px",
        paddingTop: "10px",
        paddingRight: "10px",
        paddingLeft: "10px",
        paddingBottom: "10px",
        borderRadius: "10px",
        marginRight: "10px",
        marginTop: "30px"}} />
        </div>
    <Container>
      
      
        {dataMovie?.Search?.length === 0 || dataMovie.Search == null ? (
          <img src={""} alt="" className="image" />
        ) : (
          dataMovie?.Search?.map((item) => {
            return (
              <Card  >
                <img src={item?.Poster} alt="" className="image" />
                <Button className="but">View</Button>
              </Card>
            );
          })
        )}
    </Container>

    </main>
  );
}

export default Movie;


