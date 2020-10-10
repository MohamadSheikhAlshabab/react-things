import React from 'react';
import './App.css';

import Header from './components/Header';
import Movies from './components/Movies';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovies: [
        {
          id: 1,
          name: 'Gladiator',
          Director: 'Ridley Scott',
          Writers: ['David Franzoni (story)', 'David Franzoni (screenplay)'],
          Stars: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
          genre: ['Action', 'Adventure', 'Drama'],
          Rate: '8.5'

        },

      ]
    }
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  addNewMovie(movie) {
    let allMoviesAdded = this.state.allMovies
    allMoviesAdded.push({
      id: allMoviesAdded.length + 1,
      name: movie.newName,
      Director: movie.newDirector,
      Writers: movie.newWriters,
      Stars: movie.newStars,
      genre: movie.newgenre,
      Rate: movie.newRate
    })
    this.setState({
      allMovies: allMoviesAdded
    });
  }

  render() {
    return (
      <>
        <Header count={this.state.allMovies} />
        <Movies list={this.state.allMovies} toAddNewMovie={(data) => this.addNewMovie(data)} />
        <Footer />
      </>
    )
  }
}
export default App;
