import React from "react";
import style from "./style.module.scss";
import photo from "../../images/photo.svg";
import ellipse_tl from "../../images/ellipse_tl.svg";
import ellipse_tr from "../../images/ellipse_tr.svg";
import ellipse_body from "../../images/ellipse_body.svg";
import ellipse_footer from "../../images/ellipse_footer.svg";
import gradient_body_r from "../../images/gradient_body_r.svg";
export const Background = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <img src={photo} alt="background_photo" className={style.photo} />
        <img
          src={ellipse_body}
          alt="ellipse_tr"
          className={style.ellipse_body}
        />
        <img
          src={ellipse_tl}
          alt="ellipse_tl"
          className={style.ellipse_header}
        />
        <img src={ellipse_tr} alt="ellipse_tr" className={style.ellipse_top} />
        <img
          src={gradient_body_r}
          alt="gradient"
          className={style.gradient_body_r}
        />
        <img
          src={ellipse_footer}
          alt="ellipse_tr"
          className={style.ellipse_footer}
        />
      </div>
    </div>
  );
};
