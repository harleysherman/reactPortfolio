import Nav from "./pages/Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <section className="nameTitle p-3">
        <h1 className="d-flex justify-content-end m-3">Harley Sherman</h1>
      </section>

      <main className="m-3">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
