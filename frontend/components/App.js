import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const api_key = "DEMO_KEY";
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

function App() {
  const [apod, setApod] = useState();

  useEffect(() => {
    function fetchPhoto() {
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data);
          setApod(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
      // fetchPhoto();
    }
    setApod({
      date: "2023-07-29",
      explanation:
        "Bright sunlight glints as long dark shadows mark this image of the surface of the Moon. It was taken fifty-four years ago, July 20, 1969, by Apollo 11 astronaut Neil Armstrong, the first to walk on the lunar surface. Pictured is the mission's lunar module, the Eagle, and spacesuited lunar module pilot Buzz Aldrin. Aldrin is unfurling a long sheet of foil also known as the Solar Wind Composition Experiment. Exposed facing the Sun, the foil trapped particles streaming outward in the solar wind, catching a sample of material from the Sun itself. Along with moon rocks and lunar soil samples, the solar wind collector was returned for analysis in earthbound laboratories.",
      hdurl: "https://apod.nasa.gov/apod/image/2307/AS11-40-5872HR.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Apollo 11: Catching Some Sun",
      url: "https://apod.nasa.gov/apod/image/2307/AS11-40-5872HR1024.jpg",
    });
  }, []);

  if (!apod) return "Fetching Photo of the Day...";
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  );
}

export default App;
