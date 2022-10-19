import "./App.css";
import Dictionary from "./Dictionary";
import { Book } from "lucide-react";

function App() {
  return (
    <div className="App">
      <span>
        <Book color="#AC7D88" size={40} className="icon" />
        <h1>Dictionary</h1>
        <Book color="#AC7D88" size={40} className="icon" />
      </span>
      <div className="container">
        <Dictionary defaultKeyword="record" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/lysandrawj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lysandra Webba Jorge
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/OnyxQueen0128/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
