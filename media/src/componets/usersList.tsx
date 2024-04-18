import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./skeleton";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./usersListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state: any) => {
    return state.users;
  });
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleClick = () => {
    doCreateUser();
  };
  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Erorr fetching data ...</div>;
  } else {
    content = data.map((user: any) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex justify-between items-center m-3">
        <h1 className="text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleClick}>
          + Add User
        </Button>

        {creatingUserError && "Error creating user .."}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
