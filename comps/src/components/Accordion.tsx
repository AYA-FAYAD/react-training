import { useState } from "react";
import { ImCircleDown, ImCircleLeft } from "react-icons/im";

function Accordion({ items }: any) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (nextIndex: any) => {
    console.log("Stale version of expanedIndex", expandedIndex);

    setExpandedIndex((currentExpandedIndex) => {
      console.log("UP TO Date", expandedIndex);

      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });

    // if (nextIndex === expandedIndex) {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(nextIndex);
    // }
  };
  const renderItem = items.map((item: any, index: any) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <ImCircleDown /> : <ImCircleLeft />}</span>
    );

    // console.log(isExpanded);

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderItem}</div>;
}

export default Accordion;
