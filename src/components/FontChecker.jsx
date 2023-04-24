import React, { useEffect, useState } from "react";

export default function FontSizeChecker() {
  const [fontSize, setFontSize] = useState("");

  useEffect(() => {
    const element = document.querySelector(".bg-text");
    const computedFontSize = window
      .getComputedStyle(element)
      .getPropertyValue("font-size");
    setFontSize(computedFontSize);
  }, [fontSize]);

  return (
    <div>
      <p className="my-class">This is a paragraph</p>
      <p>The font size is: {fontSize}</p>
    </div>
  );
}
