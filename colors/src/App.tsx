import "./App.css";
import ColorStateProvider from "./contexts/ColorStateContext/ColorStateProvider";
import ColorList from "./sections/ColorList";

export default function App() {
  return (
    <div className="color-app">
      <ColorStateProvider>
        <ColorList />
      </ColorStateProvider>
    </div>
  );
}
