function Buttons({ children, onclick }: any) {
  return <button onClick={onclick}>{children}</button>;
}

export default Buttons;
