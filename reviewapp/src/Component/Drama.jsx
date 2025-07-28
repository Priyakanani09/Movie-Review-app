import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';

function Drama() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch('/movie.json')
      .then((res) => res.json())
      .then((data) => {
        const horrormovies = data.filter(item => item.genre && item.genre.toLowerCase().includes('drama'));
        setMovie(horrormovies);
      })
      .catch((err) => console.error('Error loading movies:', err));
  },[]);

  return (
    <>
      <Header />
      <Container style={{ maxWidth: '1600px' }}>
        <Row className="mt-5">
          {movie.map((item, index) => (
            <Col lg={2} md={3} sm={6} className="mb-5" key={index}>
              <div className="card shadow-sm bg-dark text-white h-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: '300px', objectFit: 'fill' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.review}</p>
                  <span className="badge bg-warning text-dark">{item.rating}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Drama;