import './App.css'
// import About from './pages/About';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';
// import Error from './pages/Error';
import Resume from './pages/Resume';
// import Nav from './pages/Nav';

// import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';

function App() {
  return (
    <>
    {/* add HEADER */}
      {/* <Nav /> */}
      <main className="mx-3">
        {/* <Outlet /> */}
        <Resume />
      </main>
      {/* add FOOTER */}
    </>
  );
}

export default App;

