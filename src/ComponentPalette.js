import DraggableButton from "./DraggableButton";

const ComponentPalette = () => {
  const components = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"];

  return (
    <div className="p-4 border rounded shadow-lg bg-white">
      <h3 className="font-bold mb-2">Drag & Drop Components</h3>
      <div className="grid grid-cols-4 gap-2">
        {components.map((label) => (
          <DraggableButton key={label} label={label} />
        ))}
      </div>
    </div>
  );
};

export default ComponentPalette;
