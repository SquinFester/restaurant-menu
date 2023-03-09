import { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import Meal from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;
