import React, { useState } from "react";

export default function Sidemenu(props) {
  return (
    <div
      className={`control ${
        props.dataId === props.activeControl ? "active-btn" : ""
      }`}
      data-id={props.dataId}
      onClick={props.handleClick}
    >
      <i className={props.controlIcon} aria-label={props.arialLabel}></i>
    </div>
  );
}
