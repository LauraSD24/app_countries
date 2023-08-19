import Nav from "./components/nav/Nav.jsx";
import Search from "./components/search/Search.jsx";
import { ContextCountries } from "./context/ContextCountries.jsx";

function App() {
  return (
    <div className="App">
     <Nav/>
     <ContextCountries>
      <Search/>
     </ContextCountries>
    </div>
  );
}

export default App;
