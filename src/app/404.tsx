import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="title">404</h1>
        <p className="message">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" className="back-link">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
