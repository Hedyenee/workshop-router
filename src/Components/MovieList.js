import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

import MovieCard from './MovieCard';


function MovieList({ movies }) {

    return (
      <ListGroup>
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            Rate={movie.rating}
          />
        ))}
        
      </ListGroup>
    );
  }
  export default MovieList;
