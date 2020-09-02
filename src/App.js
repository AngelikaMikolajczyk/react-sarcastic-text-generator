import React from "react";
import "./styles.css";

const funkyLetters = {
  "-": "₋",
  "!": "ᵎ",
  "?": "ˀ",
  "(": "⁽",
  ")": "₎",
  "+": "⁺",
  "=": "₌",
  "0": "⁰",
  "1": "₁",
  "2": "²",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  a: "ᵃ",
  A: "ᴬ",
  B: "ᴮ",
  b: "ᵦ",
  C: "𝒸",
  d: "ᵈ",
  D: "ᴰ",
  e: "ₑ",
  E: "ᴱ",
  f: "𝒻",
  F: "ᶠ",
  g: "ᵍ",
  G: "ᴳ",
  h: "ʰ",
  H: "ₕ",
  I: "ᵢ",
  i: "ᵢ",
  j: "ʲ",
  J: "ᴶ",
  K: "ₖ",
  k: "ₖ",
  l: "ˡ",
  L: "ᴸ",
  m: "ᵐ",
  M: "ₘ",
  n: "ₙ",
  N: "ᴺ",
  o: "ᵒ",
  O: "ᴼ",
  p: "ᵖ",
  P: "ᴾ",
  Q: "ᵠ",
  q: "ᑫ",
  r: "ʳ",
  R: "ᵣ",
  S: "ˢ",
  s: "ˢ",
  t: "ᵗ",
  T: "ₜ",
  u: "ᵘ",
  U: "ᵤ",
  v: "ᵛ",
  V: "ᵥ",
  w: "𝓌",
  W: "ʷ",
  x: "ˣ",
  X: "ˣ",
  y: "y",
  Y: "Y",
  z: "𝓏",
  Z: "ᶻ"
};

function sarcastic(letter, index) {
  if (index % 2) {
    return letter.toUpperCase();
  }
  return letter.toLowerCase();
}

function funky(letter) {
  let funkyLetter = funkyLetters[letter];
  if (funkyLetter) {
    return funkyLetter;
  }
  funkyLetter = funkyLetters[letter.toLowerCase()];
  if (funkyLetter) {
    return funkyLetter;
  }
  return letter;
}

function unable(letter) {
  const random = Math.floor(Math.random() * 3);
  if (letter === " " && random === 2) {
    return "...";
  }
  return letter;
}

function Input(props) {
  return (
    <label>
      <input
        type="radio"
        name="filter"
        value={props.value}
        onClick={event => props.onInputClick(event.target.value)}
        checked={props.checked}
      />
      {props.label}
    </label>
  );
}

function Result(props) {
  return <p>{props.result}</p>;
}

export default function App() {
  const [text, setText] = React.useState(
    "so I was thinking about going to the store."
  );

  const [selectedTextFormat, setSelectedTextFormat] = React.useState(
    "sarcastic"
  );

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleInputClick(value) {
    setSelectedTextFormat(value);
  }

  const result = Array.from(text)
    .map(
      selectedTextFormat === "sarcastic"
        ? sarcastic
        : selectedTextFormat === "funky"
        ? funky
        : unable
    )
    .join("");

  return (
    <div className="App">
      <Input
        value="sarcastic"
        label="Sarcastic"
        checked={selectedTextFormat === "sarcastic"}
        onInputClick={handleInputClick}
      />
      <Input
        value="funky"
        label="Funky"
        checked={selectedTextFormat === "funky"}
        onInputClick={handleInputClick}
      />
      <Input
        value="unable"
        label="Unable to Structure a Sentence"
        checked={selectedTextFormat === "unable"}
        onInputClick={handleInputClick}
      />
      <textarea
        className="App_textarea"
        name="text"
        value={text}
        onChange={handleTextChange}
      />
      <Result result={result} />
    </div>
  );
}
