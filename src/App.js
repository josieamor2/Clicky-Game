import React, { Component } from 'react';
import Footer from "./components/Footer";
import BurgerCard from "./components/BurgerCard";
import Burgers from "./Burgers.json";
import AnimateHeight from 'react-animate-height';
// import logo from './logo.svg';
import './App.css';


function shuffleBurgers(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};




class App extends Component {





  // Set this.state
  state = {
    Burgers,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Wrong!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledBurgers = shuffleBurgers(Burgers);
    this.setState({ Burgers: shuffledBurgers });
  };




  render() {
    const { height } = this.state;
    return (



      <div className="app">
        <div className="row itemRow flex-wrap col-lg-8 col-md-10 col-sm-12 col-12 d-flex justify-content-betsween">

          {this.state.Burgers.map(burger => (

            <div className="col-lg-3 col-md-3 col-sm-4 col-6 col-xs-6 character">
              <BurgerCard
                key={burger.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={burger.id}
                image={burger.image}
              />
            </div>
          ))}
        </div>


        <div className="instructions" >

          <img src="./Images/instructions.png" alt="instructions"/>
          <div className="body">
            <p>Click on an image to earn points, but don't click on any more than once!</p>
          </div>


        </div>



        <Footer
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
      </div>


    );
  }
}
export default App;




