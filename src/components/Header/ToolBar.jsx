import {
  FaBold,
  FaItalic,
  FaHeading,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaCode,
} from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { useAreaValueContext } from "../../context/AreaValueContext";
import ToolButton from "./toolButton";

const ToolBar = () => {
  const { handleReset, handleChange } = useAreaValueContext();

  const formatSelectedText = (prefix, suffix = "") => {
    const textarea = document.querySelector("textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const textAreaValue = textarea.value;

    const selectedText = textAreaValue.substring(start, end);
    const before = textAreaValue.substring(0, start);
    const after = textAreaValue.substring(end, textAreaValue.length);

    const newValue = before + prefix + selectedText + suffix + after;
    handleChange({ target: { value: newValue } });

    textarea.focus();
    textarea.selectionStart = start + prefix.length;
    textarea.selectionEnd = end + prefix.length;
  };

  return (
    <div className="w-1/2 flex justify-evenly p-5 flex-wrap">
      <ToolButton
        icon={<FaBold />}
        onClick={() => formatSelectedText("**", "**")}
      />

      <ToolButton
        icon={<FaItalic />}
        onClick={() => formatSelectedText("_", "_")}
      />

      <ToolButton
        icon={<FaHeading />}
        onClick={() => formatSelectedText("# ")}
      />

      <ToolButton
        icon={<FaStrikethrough />}
        onClick={() => formatSelectedText("~~", "~~")}
      />

      <ToolButton
        icon={<FaListUl />}
        onClick={() => formatSelectedText("- ")}
      />

      <ToolButton
        icon={<FaListOl />}
        onClick={() => formatSelectedText("1. ")}
      />

      <ToolButton
        icon={<MdChecklist />}
        onClick={() => formatSelectedText("- [ ] ")}
      />

      <ToolButton
        icon={<FaQuoteLeft />}
        onClick={() => formatSelectedText("> ")}
      />

      <ToolButton
        icon={<FaCode />}
        onClick={() => formatSelectedText("```", "```")}
      />

      <ToolButton icon={<GrPowerReset />} onClick={handleReset} />
    </div>
  );
};

export default ToolBar;
