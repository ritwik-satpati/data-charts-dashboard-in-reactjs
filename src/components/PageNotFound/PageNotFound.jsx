import { Player } from "@lottiefiles/react-lottie-player";
// Asset - Animation
import animationData from "../../assets/animations/Animation - 1714663732665 - Page Not Found.json";

const PageNotFound = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <Player
          autoplay={true}
          loop={true}
          src={animationData}
          // style={{ height: '200px', width: '200px' }}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          className="h-full w-full overflow-x-clip"
        ></Player>
      </div>
    </>
  );
};

export default PageNotFound;
