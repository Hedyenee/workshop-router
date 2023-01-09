import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [trailerURL, setTrailerURL] = useState('');
  const [rating, setRating] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, posterURL, trailerURL, rating });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Poster URL</Form.Label>
        <Form.Control
          type="text"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Trailer URL</Form.Label>
        <Form.Control
          type="text"
          value={trailerURL}
          onChange={(e) => setTrailerURL(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control type="submit" value="Add Movie" />
      </Form.Group>
    </Form>
  );
}

export default AddMovieForm;

