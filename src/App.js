import "./styles.css";
import { useState, useRef, useEffect } from "react";
// sounds
import morning from "./sounds/morning.mp3";
import night from "./sounds/night.mp3";
import switch_sound from "./sounds/switch.mp3";

export default function App() {
  const [light, setLight] = useState(false);

  const bgSound = useRef();
  const switcher = useRef();
  const switch_btn = useRef();

  const activateSwitchAfter = (time) => {
    switch_btn.current.style.pointerEvents = "none";
    setTimeout(() => {
      switch_btn.current.style.pointerEvents = "auto";
    }, time);
  };

  const switchLight = () => {
    setLight(!light);

    switcher.current.currentTime = 0;
    switcher.current.play();
  };

  useEffect(() => {
    activateSwitchAfter(6000);
  }, []);

  return (
    <div className={`App ${light ? "light" : ""}`}>
      <audio
        id="sounds"
        ref={bgSound}
        src={light ? morning : night}
        loop
        autoPlay
      />
      <audio id="switcher" ref={switcher} src={switch_sound} />

      <div id="notify">Turn the light on</div>
      <div className="switch" ref={switch_btn}>
        <div className="button" onClick={switchLight}></div>
      </div>
      <div className="lamp">
        <div className="base"></div>
        <div className="bulb">
          <div className="bulbText">60W</div>
        </div>
      </div>
    </div>
  );
}
