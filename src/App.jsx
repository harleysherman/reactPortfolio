import Nav from "./pages/Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <h1 className="d-flex justify-content-end m-3">Harley Sherman</h1>
      <main className="m-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
