import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";

function AlbumsListItem({ album }: any) {
  const [removeAlbum, result] = useRemoveAlbumMutation();
  const handleRemovAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        className="mr-2"
        loading={result.isLoading}
        onClick={handleRemovAlbum}
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
