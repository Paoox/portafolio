import '../styles/Button.css';
import { useNavigate } from 'react-router-dom';

function Button({ text, redirectTo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectTo);
  };

  return (
    <section className="portfolio-experiment" onClick={handleClick}>
      <a>
        <span className="text">{text}</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>
    </section>
  );
}

export default Button;

