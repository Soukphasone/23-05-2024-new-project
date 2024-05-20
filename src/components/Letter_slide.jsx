import React from "react";
function Letter_slide() {
  const customStyle = {
    "--duration": "20s",
    "--delay": "0s",
    "--direction": "normal",
    "--pauseOnHover": "running",
    "--pauseOnClick": "running",
    "--pauseAnimation": "running",
    "--loops": "infinite",
    "--gradient-color": "rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)",
    "--gradient-length": "200px",
    "--min-width": "100%",
    "--min-height": "auto",
    "--orientation": "scrollX",
  };
  return (
    <div data-v-3c88d514="" className="vue3-marquee horizontal" style={customStyle}>
      <div className="transparent-overlay" aria-hidden="true"></div>
      <div className="marquee">
        <div className="ml-4">
          LUCABET88 เว็บไซต์อันดับ 1 ในเอเชีย ระบบฝาก-ถอนออโต้ รองรับทุกธนาคาร
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="ml-4">
          LUCABET88 เว็บไซต์อันดับ 1 ในเอเชีย ระบบฝาก-ถอนออโต้ รองรับทุกธนาคาร
        </div>
      </div>
    </div>
  );
}

export default Letter_slide;
