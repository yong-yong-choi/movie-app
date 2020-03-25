import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movies.css'

function Movies({ id, year, title, title_long, summary, poster, genres, rating }) {
    return (
        <React.Fragment>
            <article className="movie-article">
                <h2 className="movie-title">{title} <small className="small">rating: {rating}</small></h2>
                <figure className="image">
                    <img src={poster} alt={title} />
                    <figcaption className="caption">{title_long}</figcaption>
                </figure>
                <p className="movie-para">{summary.slice(0, 140)}...</p>
                <ul className="genres">
                    {
                        genres.map( (genre, i) => <li className="item" key={i}>{genre}</li>)
                    }
                </ul>
            </article>
        </React.Fragment>
    );
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    title_long: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired
};

export default Movies;