import React from "react";
import style from "./style.module.scss";
export const SpeakerBlock = ({ photo_url, name, description }) => {
  return (
    <div className={style.card}>
      <img
        src={photo_url}
        alt="speaker_photo"
        className={style.speaker_photo}
      />

      <div>
        <h3 className={style.speaker_name}>{name}</h3>

        <div className={style.line}></div>

        <p className={style.description}>{description}</p>

        <button className={style.button}>Подробнее</button>
      </div>
    </div>
  );
};
