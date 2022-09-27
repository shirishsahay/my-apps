import React, { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

const CameraScreen = () => {
  const [imageSrc, setImageSrc] = useState();
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    setImageSrc(webcamRef.current.getScreenshot());
  }, [webcamRef]);
  return (
    <>
      <Webcam
        audio={false}
        height={600}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>

      {imageSrc ? <img src={imageSrc} alt="" /> : null}
    </>
  );
};

// const CameraScreen = () => (
//   <Webcam
//     audio={false}
//     height={400}
//     screenshotFormat="image/jpeg"
//     width={600}
//     videoConstraints={videoConstraints}
//   >
//     {({ getScreenshot }) => (
//       <button
//         onClick={capturePhoto}
//       >
//         Capture photo
//       </button>
//     )}
//     </Webcam>
// );

export default CameraScreen;
