import { useAreaValueContext } from "../../context/AreaValueContext";

const TextArea = () => {
  const { value, handleChange } = useAreaValueContext();

  return (
    <div className="w-full md:w-1/2 min-h-screen  p-8">
      <textarea
        value={value}
        className="prose resize-none w-full h-full focus:outline-none"
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
