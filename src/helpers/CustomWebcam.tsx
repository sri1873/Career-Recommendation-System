import Webcam from "react-webcam";

const CustomWebcam = () => {
    return (
        <div className="container">
            <Webcam style={{position:'fixed'}}  mirrored={true} height={100}  />
        </div>
    );
};

export default CustomWebcam;