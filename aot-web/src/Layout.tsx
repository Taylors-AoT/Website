import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Header title="AOT Website" />   {/* You can change this OR override per page */}
      
      <main style={{ minHeight: "70vh" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
