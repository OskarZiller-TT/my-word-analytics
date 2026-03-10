import { useState } from "react";
import Warning from "./Warning";

// export default function Textarea({ setStats }) {
export default function Textarea({ text, onTextChange }) {
  // const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarning("You can't use <script> in your text.");
      newText = newText.replace("<script>", "");
    } else {
      setWarning("");
    }

    // setText(text);
    //
    // setStats({
    //   numberOfWords: text.split(" ")[0] === "" ? 0 : text.split(" ").length,
    //   numberOfCharacters: text.length,
    //   instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    //   facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    // });

    onTextChange(newText);
  };

  return (
    <section className="textarea">
      <textarea
        spellCheck="false"
        placeholder="Enter your text"
        onChange={handleChange}
        value={text}
      ></textarea>

      <Warning warningText={warning} />
    </section>
  );
}
