
import TestComponent from "./components/TestComponent";

function App() {

  return (
    <div className="App">
        <h1>Holla amygos</h1>
        <TestComponent user={{
            name: "Kitoks",
            surame: "Pvadinimas"

        }} />
    </div>
  );
}

export default App;
