import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searching from "./components/Searching";
import ScrolableTab from "./components/ScrolableTab";
import Main from "./components/Main";
import ShowMore from "./components/ShowMore";
import Store from "./Store/Store";
import Footer from "./components/Footer";
import Supports from "./components/Supports";
import SocialLinks from "./components/SocialLinks";
import HomeModal from "./components/Modals/HomeModal";

function App() {
  const [ShowMoadal, setShowMoadal] = useState(false);
  return (
    <Store className="App" data-theme="light">
      <header>
        <Navbar />
        <Searching />
        <HomeModal ShowMoadal={ShowMoadal} setShowMoadal={setShowMoadal} />
        <hr />
        <ScrolableTab />
      </header>
      <main>
        <Main />
        <ShowMore />
      </main>
      <footer>
        <Footer />
        <hr />
        <Supports />
        <hr />
        <SocialLinks />
      </footer>
    </Store>
  );
}

export default App;
