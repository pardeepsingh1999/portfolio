// 404.js
import Link from "next/link";
import "../styles/404.css";

const FourOhFour = () => {
  return (
    <>
      <div className="error-container">
        <div className="error-content">
          <h1 className="heading">404 - Page Not Found</h1>
          <p className="para">The page you are looking for does not exist.</p>
          <Link href="/">Go back to the homepage</Link>
        </div>
      </div>
    </>
  );
};

export default FourOhFour;
