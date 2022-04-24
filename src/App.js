// import "./App.css";
import { useNavigate } from "react-router-dom";
import Bio from "./components/Bio";
import Footer from "./Footer";

import Header from "./Header";

function App() {
  const navigate = useNavigate();
  return (
    <div className="inset-0 relative bg-gray-800 w-screen h-screen font-OpenSansRegular">
      <Header />
      <div className="flex items-center justify-center py-48 pr-96">
        <Bio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
