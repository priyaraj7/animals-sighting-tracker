import Form from "./components/form/Form";
import SpeciesList from "./components/detail/DetailPage";
import IndividualList from "./components/individual/Individual";

function App() {
  return (
    <div className="App">
      {/* <SpeciesList /> */}
      <IndividualList />
      <Form />
    </div>
  );
}

export default App;
