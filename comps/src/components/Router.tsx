import useNavigation from "../hooks/use-navigation";

function Route({ path, children }: any) {
  const { currentPath }: any = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
