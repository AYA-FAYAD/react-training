import Sidebar from "./components/Sidebar";
import Route from "./components/Router";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4 ">
      <Sidebar></Sidebar>
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage></AccordionPage>
        </Route>

        <Route path="/">
          <DropDownPage></DropDownPage>
        </Route>
        <Route path="/buttons">
          <ButtonPage></ButtonPage>
        </Route>

        <Route path="/modal">
          <ModalPage></ModalPage>
        </Route>

        <Route path="/table">
          <TablePage></TablePage>
        </Route>

        <Route path="/counter">
          <CounterPage></CounterPage>
        </Route>
      </div>
    </div>
  );
}

export default App;
