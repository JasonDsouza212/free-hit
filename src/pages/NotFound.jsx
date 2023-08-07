import "../styles/NotFound.css";
import errorimg from "../assets/error.webp";

const NotFound = () => {
  return (
    <>
      <div className="notfound">
        <h1 className="err-code">
          404<img src={errorimg} alt="Error" />
        </h1>
        <p className="err-head">PAGE NOT FOUND</p>
        <p className="err-message">The page you're looking for could not be found</p>
        <p className="err-message">Please check the URL or Try again later</p>
        <a className="home-link" href="/">Go to Homepage</a>
      </div>
    </>
  );
};

export default NotFound;
