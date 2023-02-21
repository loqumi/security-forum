import style from "./style.module.scss";
import classnames from "classnames";

export const NavLink = ({ title, href, icon }) => (
  <a href={href} className={classnames(style.link, icon && style.icon)}>
    {icon ? (
      <img
        className={style.icon}
        src={icon}
        alt={title}
        width="36"
        height="36"
      />
    ) : (
      title
    )}
  </a>
);
