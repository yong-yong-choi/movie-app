import React from 'react';
import Axios from 'axios';
import Movies from '../components/Movies';
import Loader from '../components/Loader';
import Header from '../components/Header';
import './Home.scss'

class Home extends React.Component {
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
      <section className="container">
        <Header title="Movies List" />
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
                  big_poster={data.large_cover_image}
                  synopsis={data.synopsis}
                  genres={data.genres}
                  rating={data.rating}
                  description_full={data.description_full}
                />
              );
            })
          }
        </div>
      </section>
    )
  }
}

export default Home;
