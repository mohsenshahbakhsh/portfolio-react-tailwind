// import "./App.css";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import About from "./components/About";
import Bio from "./components/Bio";
import Footer from "./Footer";

import Header from "./Header";

function App() {
  const navigate = useNavigate();
  return (
    <div className="inset-0 bg-gray-800 font-OpenSansRegular">
      <Header />
      <div className="flex flex-col items-center justify-center space-y-96 pt-48">
        <Bio />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
