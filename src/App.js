import React from 'react';
import Axios from 'axios';
import Movies from './Movies';
import Loader from './Loader';
import './App.css'

class App extends React.Component {
  state = {
    isLoading : true,
    movie : []
  };

  getMovies = async () => {
    const {
      data: {
        data : {
          movies
        }
      }
    } = await Axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    console.log(movies);
    
    this.setState({
      movies,
      isLoading : false
    });
    
  }
  componentDidMount() {
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="app">
        <h1 className="title-top">movies list</h1>
        <div className="movie-wrap">
          { isLoading ? 
              <Loader/>
            : movies.map(data => {
              return (
                <Movies
                  key={data.id}
                  title={data.title}
                  id={data.id}
                  year={data.year}
                  title_long={data.title_long}
                  summary={data.summary}
                  poster={data.medium_cover_image}
                  genres={data.genres}
                  rating={data.rating}
                />
              );
            })
          }
        </div>
      </section>
    );
  }
}

export default App;
