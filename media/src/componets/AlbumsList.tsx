import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({ user }: any) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  // console.log(data, error, isLoading);
  // console.log(result);
  const [addAlbum, result] = useAddAlbumMutation();
  const handleClick = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton time={3} />;
  } else if (error) {
    content = <div> Erorr in loading album</div>;
  } else {
    content = data.map((album: any) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List Of Photo Album
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div>
        Albums for {user.name}
        <Button onClick={handleClick}>+ Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
