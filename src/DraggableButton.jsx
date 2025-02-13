import { useDrag } from "react-dnd";

const DraggableButton = ({ label, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BUTTON",
    item: { label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className={`p-2 m-1 bg-gray-200 rounded hover:bg-gray-300 ${isDragging ? "opacity-50" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default DraggableButton;
