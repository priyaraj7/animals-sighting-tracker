import Form from "./components/form/Form";
import SpeciesList from "./components/species/SpeciesList";
import IndividualList from "./components/individual/Individual";

function App() {
  return (
    <div className="App">
      <SpeciesList />
      <Form />
      <IndividualList />
    </div>
  );
}

export default App;
