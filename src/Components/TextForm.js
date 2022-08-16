import React, { useState, useEffect } from "react";

export const TextForm = (props) => {
  useEffect(() => {
    document.title = "TextUtils - Home";
  }, []);

  const textOnChange = (event) => {
    SetText(event.target.value);
  };

  const textUpperCase = () => {
    let newText = text.toUpperCase();
    SetText(newText);
    props.alert("Text Converted to Uppercase", "success");
  };

  const textLowerCase = () => {
    let newText = text.toLowerCase();
    SetText(newText);
    props.alert("Text Converted to Lowercase", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.alert("Text Copied Successfully", "success");
  };

  const [text, SetText] = useState("");
  return (
    <>
      <div
        className={`container text-${
          props.mode === "light" ? "grey" : "white"
        }`}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="textform"
          rows="8"
          value={text}
          onChange={textOnChange}
          placeholder="Start Typing...."
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#343A40",
            color: props.mode === "light" ? "black" : "white",
            boxShadow: "none",
            borderColor: props.mode === "light" ? "grey" : "#343A40",
          }}
        ></textarea>

        <button className="btn btn-warning btn-sm mt-3 mr-2" onClick={speak}>
          <i class="fa-duotone fa-volume"></i>
        </button>

        <button
          className="btn btn-danger btn-sm mt-3 mr-2"
          onClick={textUpperCase}
        >
          Convert to Upper Case
        </button>

        <button
          className="btn btn-success btn-sm mt-3 mr-2"
          onClick={textLowerCase}
        >
          Convert to Lower Case
        </button>

        <button className="btn btn-primary btn-sm mt-3 mr-2" onClick={copyText}>
          Copy Text
        </button>
      </div>

      <div
        className={`container my-3 text-${
          props.mode === "light" ? "grey" : "white"
        }`}
      >
        <h1>Text summary</h1>
        <p>
          {text.split(" ").length} words & {text.length} characters <br />
          {0.008 * text.split(" ").length} Minutes to read the text
        </p>

        <h2>Preview</h2>
        <p> {text.length > 0 ? text : "Enter text to preview here"} </p>
      </div>
    </>
  );
};
