import { Routes, Route, Link } from "react-router-dom";

const NotFound = () => {
  return (
  <>
  <div className="container fit-container py-11 py-lg-16 d-flex flex-column justify-content-center align-items-center">
    <h1 className="lobster-two fs-12 text-primary fw-bold mb-5">404</h1>
    <h1 className="text-primary mb-5">Page not Found.</h1>
    <h5 className="text-primary mb-5">Oops! There is nothing.</h5>
    <Link to="/" className="btn btn-primary text-white fs-6 fs-lg-5 fw-bold py-3 px-8 px-lg-12">GO BACK TO OUR HOMEPAGE</Link>
  </div>
  </>
  );
};

export default NotFound;