import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Jumbotron />
        <div className="container d-flex gap-2">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer className="mt-auto bg-dark text-center" />
    </div>

  )
};

export default Home;
