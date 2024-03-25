import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options, onChange, value }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const devEl: any = useRef();

  useEffect(() => {
    const handler = (event: any) => {
      if (!devEl.current) {
        return;
      }
      if (!devEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    // console.log("should close");

    setIsOpen(false);

    onChange(option);
  };
  const renderedOPtion = options.map((option: any) => {
    // console.log(option.label);

    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //   let content = "Select...";
  //   if (selection) {
  //     content = selection.label;
  //   }

  return (
    <div ref={devEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handelClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown />
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{renderedOPtion}</Panel>}
    </div>
  );
}
export default Dropdown;
