// import "./App.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

import Header from "./Header";

function App() {
  const navigate = useNavigate();
  return (
    <div className="inset-0 relative bg-gray-800 w-screen h-screen font-OpenSansRegular">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
