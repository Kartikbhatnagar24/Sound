import { useState, useEffect } from "react";
import PlayButton from "./PlayButton";
import toHHMMSS from "../helpers/getMinuteFormat";

import styles from "./MainPlayer.module.css";

const MainPlayer = ({ globalWaveForm, audio }) => {
  const [audioLength, setAudioLength] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");

  // globalWaveForm.current = {};
  useEffect(() => {
    if (globalWaveForm) {
      console.log(audio);
      console.log(globalWaveForm.current.getDuration());
      globalWaveForm.current.on("ready", function () {
        setAudioLength(toHHMMSS(globalWaveForm.current.getDuration()));
      });
      globalWaveForm.current.on("audioprocess", function () {
        setCurrentTime(toHHMMSS(globalWaveForm.current.getCurrentTime()));
      });
    }
  }, [audio]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.time}>
        {currentTime}/{audioLength}
      </h1>
      <h3 className={styles.title}>
        {audio ? audio.name : "Sample audio track.mp3"}
      </h3>
      <div className={styles.player}>
        <img
          className={styles.ffStop}
          src="icons/fast-backward-start.png"
          alt="ff-stop-icon"
        />
        <img
          className={styles.ff}
          src="icons/fast-backward.png"
          alt="ff-icon"
        />
        <PlayButton globalWaveForm={globalWaveForm} />
        <img className={styles.ff} src="icons/fast-forward.png" alt="ff-icon" />
        <img
          className={styles.ffStop}
          src="icons/fast-forward-end.png"
          alt="ff-stop-icon"
        />
      </div>
    </div>
  );
};

export default MainPlayer;
