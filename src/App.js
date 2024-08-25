import "./App.css";
import { DataCounter } from "./Data_Counter";
import { DataCounterV2 } from "./Data_Counter_V2";

export default function App() {
  return (
    <div className="App">
      <DataCounter />
      <DataCounterV2 />
    </div>
  );
}
