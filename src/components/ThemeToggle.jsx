import { useEffect, useState } from 'react';
import '../styles/ThemeToggle.css';


function ThemeToggle() {
  const [modoOscuro, setModoOscuro] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (modoOscuro) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [modoOscuro]);

  const toggleTheme = () => {
  setModoOscuro(prev => {
    const nuevoModo = !prev;
    // Esperamos a que React aplique el cambio y recargamos
    setTimeout(() => {
      window.location.reload();
    }, 20); // leve retraso para que localStorage y context se actualicen
    return nuevoModo;
  });
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
