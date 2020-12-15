import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"; //make sure your css is below, so that your bespoke css's specificity is more powerful
import "./App.css";


import NavBar from "./Components/NavBar";
import MyJumbotron from "./Components/Jumbotron";
import Footer from "./Components/Footer";
import SpecialReleases from "./Components/SpecialReleases"
import CommentArea from './Components/CommentArea';


class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <MyJumbotron />
      <SpecialReleases />
      <CommentArea />
      <Footer />

      </>
    );
}
}


export default App;
