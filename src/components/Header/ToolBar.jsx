import React from 'react';
import { FaBold, FaItalic, FaHeading, FaStrikethrough, FaListUl, FaListOl, FaQuoteLeft, FaCode, FaTable } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { useAreaValueContext } from '../../context/AreaValueContext';



const ToolBar = () => {
    const {handleReset, handleChange} = useAreaValueContext();

    const insertText = (text) => {
        const textarea = document.querySelector('textarea');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const textAreaValue = textarea.value;
        const before = textAreaValue.substring(0, start);
        const after = textAreaValue.substring(end, textAreaValue.length);
        const newValue = before + text + after + '\n';
        handleChange({target: {value: newValue}});
        textarea.focus();
        textarea.selectionStart = start + text.length;
        textarea.selectionEnd = start + text.length;
    }

    return (
        <div className="w-1/2 flex justify-evenly p-5 flex-wrap">
            <button className='hover:bg-blue-gray-600  p-2 transition-all rounded-sm' onClick={() => insertText("**Bold**")}>
                <FaBold color='white' />
            </button>
            <button className='hover:bg-blue-gray-600 p-2 transition-all rounded-sm' onClick={() => insertText("*Italic*")}>
                <FaItalic color='white'  />
            </button>
            <button className='hover:bg-blue-gray-600 p-2 transition-all rounded-sm' onClick={() => insertText("# Title")}>
                <FaHeading color='white'  />
            </button>
            <button className='hover:bg-blue-gray-600 p-2 transition-all rounded-sm' onClick={() => insertText("~~Strikethrough~~")}>
                <FaStrikethrough color='white'  />
            </button>
            <button className='hover:bg-blue-gray-600 p-2 transition-all rounded-sm' onClick={() => insertText("- List")}>
                <FaListUl color='white'  />
            </button>
            <button className='hover:bg-blue-gray-600 p-2 transition-all rounded-sm' onClick={() => insertText("1. Ordored List")}>
                <FaListOl color='white'  />
            </button>
            <button className='hover:bg-blue-gray-600 p-2 transition-all rounded-sm' onClick={() => insertText("- [ ] Task")}>
                <MdChecklist color='white'  />
            </button>
            <button className='hover:bg-blue-gray-600 p-2 transition-all rounded-sm' onClick={() => insertText("> Quote")}>
                <FaQuoteLeft color='white'  />
            </button>
            <button className='hover:bg-blue-gray-600 p-2 transition-all rounded-sm' onClick={() => insertText("`Code`")}>
                <FaCode color='white'  />
            </button>
            <button className='hover:bg-blue-gray-600 p-2 transition-all rounded-sm' onClick={handleReset}>
                <GrPowerReset size={20} color='white'  />
            </button>
        </div>
    );
    }

export default ToolBar;