import classnames from "classnames";
import React from "react";
import style from "./style.module.scss";

export const Row = ({
  alignItems,
  children,
  className,
  direction = "row",
  fullWidth,
  justifyContent,
  wrap,
  sx = {},
}) => {
  const directionClass = direction && style["direction-" + direction];
  const alignItemsClass = alignItems && style["align-items-" + alignItems];
  const justifyContentClass =
    justifyContent && style["justify-content-" + justifyContent];
  const wrapClass = wrap && style.wrap;

  const classNames = classnames(
    style.container,
    wrapClass,
    directionClass,
    alignItemsClass,
    justifyContentClass,
    fullWidth && style.fullWidth,
    className
  );

  return (
    <div className={classNames} style={sx}>
      {children}
    </div>
  );
};
