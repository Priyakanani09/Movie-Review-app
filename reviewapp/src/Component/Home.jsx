import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
  fetch(process.env.PUBLIC_URL + "/movie.json")
    .then((res) => res.json())
    .then((data) => setMovie(data))
    .catch((err) => console.error("Error loading movies:", err));
}, []);


  return (
    <>
      <Header />
      <Container style={{ maxWidth: "1600px" }}>
        <Row style={{marginTop: "7%"}}>
          {movie.map((item, index) => (
            <Col lg={2} md={3} sm={6} className="mb-5" key={index}>
              <Link
                to={`/movie/${item.title}`}
                className="text-decoration-none"
              >
                <div className="card shadow-sm bg-dark text-white h-100 movie-card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "300px", objectFit: "fill" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.review}</p>
                    <span className="badge bg-warning text-dark">
                      {item.rating}
                    </span>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
