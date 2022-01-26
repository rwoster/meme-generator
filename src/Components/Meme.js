import React, { useState, useEffect } from "react";
// import memesData from "../memesData";

export default function Meme() {
  // create state for memes array
  const [allMemes, setAllMemes] = useState([]);

  // fetch data to fill memes array
  // fetch with .then
  /*
    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((api_memes) => setAllMemes(api_memes.data.memes));
    }, []);
  */
  // fetch with async promises
  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const api_memes = await res.json();
      setAllMemes(api_memes.data.memes);
    }
    getMemes();
  }, []);

  // create state for individual meme
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    name: "hird World Skeptical Kid",
    randomImageUrl: "https://i.imgflip.com/265k.jpg",
  });
  // get a random meme from meme array and set as current meme
  function getMemeImage() {
    // random number generator
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    const randomMeme = allMemes[randomNumber];
    const url = randomMeme.url;
    const name = randomMeme.name;
    // set meme state [url, name]
    setMeme((prevMeme) => ({
      ...prevMeme,
      name: name,
      randomImageUrl: url,
    }));
    console.log(randomMeme);
  }

  function handleChange(event) {
    // destructure for simplicity
    const { name, value } = event.target;
    // set new meme state with topText & bottomText
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  // destructure meme for simplicity
  const { topText, bottomText, randomImageUrl, name } = meme;

  return (
    <main>
      <div className="meme--container">
        <input
          className="meme--input"
          type="text"
          placeholder="Top text"
          value={topText}
          name="topText"
          onChange={handleChange}
        ></input>
        <input
          className="meme--input"
          type="text"
          placeholder="Bottom text"
          value={bottomText}
          name="bottomText"
          onChange={handleChange}
        ></input>
        <button className="meme--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div>
        <p className="meme--caption">{name}</p>
      </div>
      <div className="meme">
        <img
          className="meme--image"
          src={randomImageUrl}
          alt="meme"
        />
        <h2 className="meme--text top">{topText}</h2>
        <h2 className="meme--text bottom">{bottomText}</h2>
        <br />
      </div>
    </main>
  );
}
