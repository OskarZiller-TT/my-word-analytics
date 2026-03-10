import { useState } from "react";

import Stats from "./Stats";
import Textarea from "./Textarea";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

function App() {
  // const [stats, setStats] = useState({
  //   numberOfWords: 0,
  //   numberOfCharacters: 0,
  //   instagramCharactersLeft: 280,
  //   facebookCharactersLeft: 2200,
  // });

  const [text, setText] = useState("");

  const numberOfWords = text.split(" ")[0] === "" ? 0 : text.split(" ").length;
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - numberOfCharacters;
  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - numberOfCharacters;

  return (
    <>
      <Header />

      <Main>
        <Textarea text={text} onTextChange={setText} />
        <Stats
          stats={{
            numberOfWords,
            numberOfCharacters,
            instagramCharactersLeft,
            facebookCharactersLeft,
          }}
        />
      </Main>

      <Footer />
    </>
  );
}

export default App;
