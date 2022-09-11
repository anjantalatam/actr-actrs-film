import React, { useState } from "react";
import Keyboard from "./components/Keyboard";
import { get } from "lodash";

function App() {
  const [actor, setActor] = useState("");
  // const [actress, setActress] = useState("");
  // const [movie, setMovie] = useState("");

  const validateHero = (actor: string) => {
    if (actor === "hero") {
      console.log("True");
    } else {
      console.log("False");
    }
  };

  const handleKeyClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const key = get(e, ["target", "dataset", "key"]);

    if (key === "clear") {
      setActor(actor.slice(0, actor.length - 1));
    } else if (key === "enter") {
      validateHero(actor);
    } else {
      setActor((prevActor) => prevActor + key);
    }
  };

  return (
    <div className="bg-[#121213] h-screen pt-20">
      <div className="flex flex-col items-center gap-4 mb-6">
        <input
          type="text"
          // placeholder="Hero"
          className=" p-2 border border-gray-600 rounded-md bg-gray-50 uppercase focus:outline-none"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Heroine"
          className="p-2 border border-gray-600 bg-gray-50"
          value={actress}
          onChange={(e) => setActress(e.target.value)}
        />

        <input
          name="actor"
          type="text"
          id="first_name"
          placeholder="Movie"
          className="p-2 border border-gray-600 bg-gray-50"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        /> */}
      </div>
      <Keyboard handleKeyClick={handleKeyClick} />
    </div>
  );
}

export default App;
