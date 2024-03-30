import Link from "./Link";

function Sidebar() {
  const links = [
    { lable: "Dropdown", path: "/" },
    { lable: "Accordion", path: "/accordion" },
    { lable: "Buttons", path: "/buttons" },
    { lable: "Modal", path: "/modal" },
    { lable: "Table", path: "/table" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.lable}
        to={link.path}
        className="mb-3"
        activeClassName="font-blod border-l-4 border-blue-500 pl-2"
      >
        {link.lable}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
