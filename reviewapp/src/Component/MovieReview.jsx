import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function MovieReview() {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);
  const [userReview, setUserReview] = useState({
    name: "",
    review: "",
    rating: "",
  });
  const [allReviews, setAllReviews] = useState([]);

  // Load movie data
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/movie.json")
      .then((res) => res.json())
      .then((data) => {
        const foundMovie = data.find((m) => m.title === title);
        setMovie(foundMovie);
      })
      .catch((err) => console.error("Error fetching movie:", err));
  }, [title]);

  // Load reviews from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`review_${title}`);
    if (stored) {
      setAllReviews(JSON.parse(stored));
    }
  }, [title]);

  const handleChange = (e) => {
    setUserReview({ ...userReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReviews = [...allReviews, userReview];
    setAllReviews(updatedReviews);
    localStorage.setItem(`review_${title}`, JSON.stringify(updatedReviews));
    setUserReview({ name: "", review: "", rating: "" }); // clear form
    toast.info("Review add successfully!");
  };

  const handleDelete = (index) => {
    const updated = [...allReviews];
    updated.splice(index, 1);
    setAllReviews(updated);
    localStorage.setItem(`review_${title}`, JSON.stringify(updated));
    toast.success("Review deleted successfully!");
  };

  // If movie not found or Loading
  if (!movie) {
    return (
      <Container className="mt-5">
        <h3 className="text-center text-danger">
          Movie not found or loading...
        </h3>
      </Container>
    );
  }

  return (
    <>
      <Container style={{ maxWidth: "1600px" }}>
        <Row className="mt-5">
          <Col lg={3} md={5} sm={6} className="mb-5">
            <div className="card shadow-lg bg-dark text-white">
              <img
                src={process.env.PUBLIC_URL + movie.image}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "450px", objectFit: "fill" }}
              />
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p className="card-text">{movie.review}</p>
                <span className="badge bg-warning text-dark">
                  {movie.rating}
                </span>
              </div>
            </div>
          </Col>

          <Col lg={6} md={7}>
            <h4 className="mb-3">Add Your Review</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={userReview.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formReview">
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="review"
                  value={userReview.review}
                  onChange={handleChange}
                  required
                  placeholder="Write your thoughts"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formRating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  name="rating"
                  value={userReview.rating}
                  onChange={handleChange}
                  required
                  placeholder="e.g. ⭐ 4.5/5"
                />
              </Form.Group>

              <Button variant="warning" type="submit">
                Submit Review
              </Button>
            </Form>

            {allReviews.length > 0 && (
              <div className="mt-5">
                <h5>All User Reviews</h5>
                {allReviews.map((r, i) => (
                  <div
                    key={i}
                    className="p-3 mb-3 border bg-light text-black rounded shadow-sm"
                  >
                    <strong>{r.name}</strong>
                    <p>{r.review}</p>
                    <span className="badge bg-success">{r.rating}</span>
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <ToastContainer position="bottom-center" autoClose={1000} />
    </>
  );
}

export default MovieReview;
