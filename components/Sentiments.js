import { useState, useEffect } from "react";
import Sentiment from "sentiment";
import ViewSplitter from "../components/ViewSplitter";
import SentimentItem from "../components/SentimentItem";
import { transcription } from "../data/transcription";

import styles from "./Sentiments.module.css";

const sentiment = new Sentiment();
const analysis = sentiment.analyze(transcription.transcript);

const Sentiments = () => {
  const [emotion, setEmotion] = useState("");
  const [sentimentList, setSentimentList] = useState([]);
  console.log(analysis);

  return (
    <ViewSplitter>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            color: "limegreen",
          }}
          onClick={() => {
            setEmotion("positive");
          }}
        >
          <h1>Positive</h1>
          {analysis.positive ? (
            <p>Words: {analysis.positive.length}</p>
          ) : (
            <p>No words found</p>
          )}
        </div>
        <div
          style={{
            color: "tomato",
          }}
          onClick={() => {
            setEmotion("negative");
            setSentimentList([]);
            analysis.calculation.forEach((el, index) => {
              if (el[Object.keys(el)] < 0) {
                setSentimentList((sentimentList) => [...sentimentList, el]);
              }
            });
          }}
        >
          <h1>Negative</h1>
          {analysis.negative ? (
            <p>Words: {analysis.negative.length}</p>
          ) : (
            <p>No words found</p>
          )}
        </div>
      </div>
      <div>
        {emotion ? (
          <>
            <div className={styles.listHead}>
              <h1>
                Sentiment:{" "}
                <span
                  style={{
                    color: `${emotion == "positive" ? "limegreen" : "tomato"}`,
                  }}
                >
                  {emotion}
                </span>
              </h1>
              <h3 style={{ color: "grey" }}>
                Occurred {analysis.negative.length} times
              </h3>
            </div>
            <div style={{ maxHeight: "260px", overflowY: "scroll" }}>
              {/* <h1>The list goes here</h1> */}
              {sentimentList.map((el, index) => {
                return (
                  <SentimentItem
                    score={el[Object.keys(el)]}
                    word={Object.keys(el)}
                    key={index}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <h1>Select sentiment to get cues</h1>
        )}
      </div>
    </ViewSplitter>
  );
};

export default Sentiments;
