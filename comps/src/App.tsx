import Link from "./components/Link";
import Route from "./components/Router";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
function App() {
  return (
    <div>
      <Link to="aya"> Go to aya</Link>
      <Link to="hope"> Go to hope</Link>

      <div>
        <Route path="/accordion">
          <AccordionPage></AccordionPage>
        </Route>

        <Route path="/dropdowm">
          <DropDownPage></DropDownPage>
        </Route>
      </div>
    </div>
  );
}

export default App;
