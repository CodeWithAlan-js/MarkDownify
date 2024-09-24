import { Button } from "@material-tailwind/react";

const PopUp = ({ handlePopUpClose }) => {
  const handleClick = () => {
    handlePopUpClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12 w-full max-w-lg m-10">
        <h2 className="text-2xl text-center mb-6">Welcome to Markdownify</h2>
        <p className="text-center mb-6">
          Experience seamless Markdown editing with our intuitive online editor.
          Write, format, and preview Markdown text effortlessly with real-time
          rendering. Simplify your workflow and boost productivity with our
          feature-rich Markdown editor.
        </p>
        <div className="flex justify-center">
          <Button onClick={handleClick} variant="outlined" color="blue">
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
