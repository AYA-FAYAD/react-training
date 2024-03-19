import { Gi3DGlasses, GiAbstract014, GiCrescentStaff } from "react-icons/gi";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success outline>
          <Gi3DGlasses />
          CLick me{" "}
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GiAbstract014 />
          Hi there
        </Button>
      </div>
      <div>
        <Button primary outline>
          Good bye
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GiCrescentStaff />
          Fuck{" "}
        </Button>
      </div>
      <div>
        <Button danger outline>
          You
        </Button>
      </div>
    </div>
  );
}

export default App;
