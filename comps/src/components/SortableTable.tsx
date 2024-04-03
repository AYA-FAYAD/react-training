import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";
function SortableTable(props: any) {
  const [sortBy, setSorBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const { config, data } = props;

  const handlelick = (label: any) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSorBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSorBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSorBy(label);
    }
  };

  const updatedCongig = config.map((column: any) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handlelick(column.label)}
        >
          <div className="flex item-center">
            {getIcon(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column: any) => column.label === sortBy);

    sortedData = [...data].sort((a, b): any => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder == "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <div>
      {sortBy} -{sortOrder}
      <Table {...props} data={sortedData} config={updatedCongig} />
    </div>
  );
}

function getIcon(label: any, sortBy: any, sortOrder: any) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}
export default SortableTable;
