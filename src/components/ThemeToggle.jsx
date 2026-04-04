import { useTheme } from '../pages/ThemeContext';
import '../styles/ThemeToggle.css';

function ThemeToggle() {
  const { modoOscuro, setModoOscuro } = useTheme();

  const toggleTheme = () => {
    setModoOscuro(prev => !prev);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <img
        src={modoOscuro ? '/sun.svg' : '/Moon.svg'}
        alt={modoOscuro ? 'Sol' : 'Luna'}
        className="theme-icon"
      />
    </button>
  );
}

export default ThemeToggle;