import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex rounded-xl flex-wrap px-4 py-2 inset-x-0 bottom-10 justify-center">
        <div className="flex flex-wrap justify-center gap-4 shadow-2xl bg-slate-400 rounded-3xl px-3 py-2">
          <button
            className="outline-none rounded-full px-4 py-1 shadow-lg text-yellow-50"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none rounded-full px-4 py-1 shadow-lg text-yellow-50"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none rounded-full px-4 py-1 shadow-lg text-yellow-50"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;