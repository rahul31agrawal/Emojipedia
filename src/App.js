import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😒": "Unamused Face",
  "😘": "Face Blowing a Kiss",
  "🤗": "Hugging Face",
  "😎": "Smiling Face with Sunglasses",
  "😟": "Worried Face",
  "😢": "Crying Face",
  "❤️": "Love Heart",
  "🔥": "Fire",
  "🥺": "Pleading Face"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState();
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry We don't have this emoji in our database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emojipedia 🔎</h1>
      <input
        placeholder="Search your emoji here"
        onChange={emojiInputHandler}
      />
      <h2> {meaning} </h2>
      <h3> Emoji's we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
