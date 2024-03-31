import Table from "../components/Table";
const fruits = [
  { name: "Apple", color: "bg-red-500", score: 5 },
  { name: "Orange", color: "bg-orange-500", score: 4 },
  { name: "banna", color: "bg-yellow-500", score: 3 },
  { name: "Lime", color: "bg-green-500", score: 2 },
];

const config = [
  {
    label: "Name",
    render: (fruit: any) => fruit.name,
  },

  {
    label: "Color",
    render: (fruit: any) => <div className={`p-3 m-2 ${fruit.color}`} />,
  },
  {
    label: "Score",
    render: (fruit: any) => fruit.score,
  },
];

const keyFn = (fruit: any) => {
  return fruit.name;
};
function TablePage() {
  return <Table data={fruits} config={config} keyFn={keyFn} />;
}

export default TablePage;
