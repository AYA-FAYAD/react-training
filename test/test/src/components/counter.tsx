import { useState } from "react";

type Count = { count: number };

function Counter({ count }: Count) {
  return (
    <div>
      <div style={{ fontSize: "3rem" }}>{count}</div>
    </div>
  );
}

export default Counter;
