import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir automáticamente después de 3 segundos
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          The page you are looking for does not exist.
        </p>
        <p className="not-found-redirect">
          Redirecting to home in 3 seconds...
        </p>
        <Link to="/" className="not-found-button">
          Go to Home Now
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
