import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const handleDemoLink = () => {
    toast("Just a demo !", {
      icon: "👻",
    });
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-between bg-gray-800 text-white py-4">
        <div className="mx-auto px-4 w-full">
          <div className="flex justify-between items-center">
            <Link
              to={"/data/user-data"}
              className="flex items-center justify-start space-x-2 cursor-pointer"
            >
              <div>
                <img src="/image.png" alt="logo" className="h-[25px] mb-1" />
              </div>
              <div className="text-xl font-bold font-Poppins">
                Dashboard Charts
              </div>
            </Link>
            <div className="flex-grow"></div>
            <div className="hidden md:flex ">
              <div
                className="mr-4 font-Poppins hover:text-gray-400 cursor-pointer"
                onClick={handleDemoLink}
              >
                Home
              </div>
              <div
                className="mr-4 font-Poppins hover:text-gray-400 cursor-pointer"
                onClick={handleDemoLink}
              >
                About
              </div>
              <div
                className="mr-4 font-Poppins hover:text-gray-400 cursor-pointer"
                onClick={handleDemoLink}
              >
                Services
              </div>
              <div
                className="font-Poppins hover:text-gray-400 cursor-pointer"
                onClick={handleDemoLink}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
