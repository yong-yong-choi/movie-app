import React from 'react';
import PropTypes from 'prop-types';
import './Movies.scss';
import { Link } from 'react-router-dom';

function Movies({ id, year, title, title_long, summary, poster, big_poster, synopsis, genres, rating, description_full }) {
    return (
        <Link
            className="movie-article"
            to={{
                pathname: `/movie/${id}`,
                state: {
                    id,
                    year,
                    title,
                    title_long,
                    summary,
                    poster,
                    genres,
                    rating,
                    big_poster,
                    synopsis,
                    description_full
                }
            }}
            
        >
            <h2 className="movie-title">{title} <small className="small">rating: {rating}</small></h2>
            <figure className="image">
                <img src={poster} alt={title} />
                <figcaption className="caption">{title_long}</figcaption>
            </figure>
            <p className="movie-para">{summary.slice(0, 140)}...</p>
            <ul className="genres">
                {
                    genres.map( (genre, index) => <li className="item" key={index}>{genre}</li>)
                }
            </ul>
        </Link>
    );
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    title_long: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    big_poster: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    description_full: PropTypes.string.isRequired,
};

export default Movies;