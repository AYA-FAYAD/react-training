import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children }: any) {
  const { navigate }: any = useNavigation();
  const classses = classNames("text-blue-500");

  const handleClick = (event: any) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classses} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
