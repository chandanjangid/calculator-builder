import { useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { create } from "zustand";
import { HTML5Backend } from "react-dnd-html5-backend";
import { evaluate } from "mathjs";  
import DraggableButton from "./DraggableButton";
import ComponentPalette from "./ComponentPalette";
import "./index.css";

const useCalculatorStore = create((set) => ({
  components: [],
  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
  removeComponent: (index) =>
    set((state) => ({
      components: state.components.filter((_, i) => i !== index),
    })),
}));

const Calculator = () => {
  const { components, addComponent } = useCalculatorStore();
  const [expression, setExpression] = useState("");

  const [, drop] = useDrop({
    accept: "BUTTON",
    drop: (item) => addComponent(item.label),
  });

  const evaluateExpression = () => {
    try {
      setExpression(evaluate(expression).toString());  
    } catch {
      setExpression("Error");
    }
  };

  return (
    <div className="calculator-container">
      {/* Display Screen */}
      <div className="calculator-display">{expression}</div>

      {/* Drop Area for Buttons */}
      <div ref={drop} className="calculator-buttons">
        {components.map((comp, index) => (
          <DraggableButton
            key={index}
            label={comp}
            className={`calculator-button ${comp === "=" ? "equal" : ""}`}
            onClick={() =>
              comp === "=" ? evaluateExpression() : setExpression(expression + comp)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-4 p-6 justify-center items-center min-h-screen bg-gray-100">
        <ComponentPalette />
        <Calculator />
      </div>
    </DndProvider>
  );
}
