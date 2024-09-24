import TextArea from "../components/LeftContent/TextArea";
import { useState, useEffect } from "react";
import TextAreaOutput from "../components/RightContent/TextAreaOutput";
import ToolBar from "../components/Header/ToolBar";
import PopUp from "../components/PopUp";

const HomePage = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const popUpClosed = localStorage.getItem("popUpClosed");
    setShowPopUp(popUpClosed !== "true");
  }, []);

  const handlePopUpClose = () => {
    setShowPopUp(false);
    localStorage.setItem("popUpClosed", "true");
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      setShowPopUp(false);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-x-hidden ">
      {showPopUp ? (
        <PopUp handlePopUpClose={handlePopUpClose} />
      ) : (
        <>
          <div className="w-screen sticky top-0  bg-blue-gray-800 h-auto flex justify-center items-center">
            <ToolBar />
          </div>
          <div className=" flex w-screen flex-col md:flex-row">
            <TextArea onKeyPress={handleEnterKeyPress} />
            <TextAreaOutput />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
