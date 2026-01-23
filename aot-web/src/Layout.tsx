import NavBar from "./components/Navbar";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      {/* <Header title="AOT Website" /> */}
      
      <main style={{ minHeight: "70vh" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
