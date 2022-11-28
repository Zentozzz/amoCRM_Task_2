import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

import { Background } from "./background/background";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div>
          <Main />
          <Background />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
