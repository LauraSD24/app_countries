import Container from "./components/container/Container.jsx";
import Nav from "./components/nav/Nav.jsx";
import { ContextCountries } from "./context/ContextCountries.jsx";

function App() {
  
  return (
    <div className="App">
      <Nav />
      <ContextCountries>
       <Container/>
      </ContextCountries>
    </div>
  );
}

export default App;
