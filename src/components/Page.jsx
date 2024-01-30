import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MovieLIst from "./cine/MovieLIst";
import { ThemeContext } from "../context";
import { useContext } from "react";


const Page = () => {
  const {darkMode} = useContext(ThemeContext)

    return (
        <div className={`h-full w-full ${darkMode ? "dark" :""}`}>
            <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieLIst />
          </div>
        </main>
        <Footer />
        </div>
    );
};

export default Page;