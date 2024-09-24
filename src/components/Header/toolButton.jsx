const ToolButton = ({ icon, onClick }) => {
  return (
    <button
      className="hover:bg-blue-gray-600  p-2 transition-all rounded-sm text-white"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default ToolButton;
