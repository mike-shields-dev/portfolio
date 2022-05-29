import css from './App.module.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={css.App}>
      <NavBar />
      <main className={css.Main}>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
