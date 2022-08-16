import React, { useState, useEffect } from "react";

export const About = () => {
  useEffect(() => {
    document.title = "TextUtils - About";
  }, []);

  // State For Button
  const [btnState, setBtnState] = useState("Enable Dark Mode");

  // State For Activating the Dark Mode
  const [style, SetStyle] = useState({
    color: "black",
    backgroundColor: "lightGrey",
  });

  const toggleClick = () => {
    if (style.color === "black") {
      SetStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnState("Enable Light Mode");
    } else {
      SetStyle({
        color: "black",
        backgroundColor: "lightGrey",
      });
      setBtnState("Enable Dark Mode");
    }
  };
  return (
    <>
      <div className="container mt-5" style={style}>
        <div class="jumbotron" style={style}>
          <h1 class="display-4">About Us</h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr class="my-4"></hr>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p class="lead">
            <a
              class="btn btn-success"
              href="#"
              role="button"
              onClick={toggleClick}
            >
              {btnState}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
