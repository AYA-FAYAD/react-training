import { Gi3DGlasses, GiAbstract014, GiCrescentStaff } from "react-icons/gi";
import Button from "../components/Button";

function ButtonPage() {
  const handlClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button success outline className="mb-5">
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

export default ButtonPage;
