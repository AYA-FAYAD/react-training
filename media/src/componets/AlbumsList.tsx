import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }: any) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);

  // console.log(data, error, isLoading);
  // console.log(result);
  const [addAlbum, result] = useAddAlbumMutation();
  const handleClick = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" time={3} />;
  } else if (error) {
    content = <div> Erorr in loading album</div>;
  } else {
    content = data.map((album: any) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold"> Albums for {user.name}</h3>

        <Button loading={result.isLoading} onClick={handleClick}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
