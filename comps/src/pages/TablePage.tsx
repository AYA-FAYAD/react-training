import Table from "../components/Table";
const fruits = [
  { name: "Apple", color: "bg-red-500", score: 5 },
  { name: "Orange", color: "bg-orange-500", score: 4 },
  { name: "banna", color: "bg-yellow-500", score: 3 },
  { name: "Lime", color: "bg-green-500", score: 2 },
];
function TablePage() {
  return <Table data={fruits} />;
}

export default TablePage;
