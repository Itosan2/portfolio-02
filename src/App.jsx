import React, { useState } from "react";
import Home from "./components/Home";
import Sidemenu from "./components/Sidemenu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Port from "./components/Port";

const controls = [
  { id: "Home", icon: "fas fa-home", label: "Home" },
  // { id: "Portfolio", icon: "fas fa-briefcase", label: "Portfolio" },
  { id: "Port", icon: "fas fa-user", label: "Port" },
  { id: "About", icon: "far fa-newspaper", label: "About" },
  { id: "Contact", icon: "fas fa-envelope-open", label: "Contact" },
];

function App() {
  const [activeControl, setActiveControl] = useState(controls[0].id);
  const [lightMode, setlightMode] = useState(false);
  const [colorMode, setColorMode] = useState(false);

  const sideEl = controls.map((control) => (
    <Sidemenu
      key={control.id}
      className={`control ${control.id === activeControl ? "active-btn" : ""}`}
      onClick={() => handleControlClick(control.id)}
      dataId={control.id}
      activeControl={activeControl}
      controlIcon={control.icon}
      ariaLlabel={control.label}
      handleClick={() => handleControlClick(control.id)}
    />
  ));

  function handleControlClick(controlId) {
    return setActiveControl(controlId);
  }

  // function handleLightMode() {
  //   return setlightMode((prevState) => !prevState);
  // }

  function handleColorMode() {
    return setlightMode((prevState) => !prevState);
  }

  return (
    <div className={`main-content ${lightMode ? "light-mode" : ""}`}>
      {activeControl === "Home" && (
        <Home handleClick={() => handleControlClick("Port")} />
      )}
      {activeControl === "About" && (
        <About
          class={"active"}
          handleClick={() => handleControlClick("Port")}
        />
      )}
      {activeControl === "Port" && <Port />}
      {activeControl === "Portfolio" && <Portfolio />}
      {activeControl === "Contact" && <Contact />}

      {/* <div className="mode-btn" onClick={handleColorMode}></div> */}
      <div className="controls">
        <div className=" mode-btn" onClick={handleColorMode}></div>
        {sideEl}
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="theme-btn" onClick={handleLightMode}>
<i className="fas fa-adjust"></i>
</div> */
}

// className={`mode-btn ${colorMode ? "light-mode2" : ""}`}
