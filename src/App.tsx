import Card from "./components/Card";
import CardImage from "./components/CardImage";
import CardContent from "./components/CardContent";

import "./App.css";

function App() {
  return (
    <main className="container">
      <Card>
        <CardImage />
        <CardContent />
      </Card>
    </main>
  );
}

export default App;
