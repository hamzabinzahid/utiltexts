import { useState } from "react";
import "./App.css";
import { About } from "./Components/About";
import { Alert } from "./Components/Alert";
import { Navbar } from "./Components/Navbar";
import { TextForm } from "./Components/TextForm";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  // Setting the color themes
  const [dark, setdark] = useState("white");

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark Mode has been enabled", "success");
    }
  };

  const darkMode = () => {
    if (dark === "white") {
      setdark("black");
      document.body.style.backgroundColor = "grey";
    } else {
      setdark("white");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <Router>
      <>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          dark={mode}
        />

        <Alert alert={alert}></Alert>

        {/* <TextForm
        heading="Enter Your Text Here to Analyze"
        className="mb-3"
        mode={mode}
        alert={showalert}
      /> */}

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter Your Text Here to Analyze"
                className="mb-3"
                mode={mode}
                alert={showalert}
              />
            }
          />

          <Route exact path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
