import "./search.css";
import { Button } from "./PopupComponents";
import { Modal } from "./Modal";
import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./globalStyles";
import {
  fetchMovies,
  searchMovie,
  setLoading,
} from "../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container } from "./Card";
import Logo from './Logo.svg'
import Batman from "./batman.jfif";

function Search() {


  const [search, setSearch] = useState("mortal");
  const [selectedData, setselectedData] =  useState({});

  const movieDispatch = useDispatch();
  const dataMovie = useSelector((state) => state.movies);

  useEffect(() => {
    movieDispatch(fetchMovies(search));
    console.log(dataMovie);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const openModal = (data) => {
    setselectedData(data);
    setShowModal((prev) => !prev);
  };

  const onInputChange = (e) => {
    let val = e.target.value;
    setSearch(val);
    movieDispatch(fetchMovies(val));
  };

  const fetchMovie = (e) => {
    e.preventDefault();
    let val = e.target.value;
    movieDispatch(fetchMovies(val));
   
  };

  return (
    <main className="main">
        <div className="Logo">
            <img src={Logo} alt="" />
        </div>
      <h2> Explore </h2>{" "}
      <form className="example" onSubmit={fetchMovie}>
        <input
          className="input-field"
          type="text"
          placeholder="Search"
          value={search || ""}
          onInput={onInputChange}
        />{" "}
        <button type="submit" className="Submit">
          {" "}
          Search{" "}
        </button>{" "}
      </form>{" "}
      <Container>
           {
  dataMovie?.Search?.length === 0  ||  dataMovie.Search == null ?  <img src={""} alt="" className="image" />  : 
 dataMovie?.Search?.map((item) => 
 { return (
    <Card>
    <img src={item?.Poster } alt="" className="image" />
    <Button onClick={()=>openModal(item)} className="but">
      View
    </Button>
  </Card>
  )
 }
 )      
}
</Container>
      <Modal  showModal={showModal} setShowModal={setShowModal} modalData ={selectedData} />
    </main>
  );
}

export default Search;
