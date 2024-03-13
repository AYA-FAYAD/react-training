import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }: any) {
  const renderedImages = images.map((image: any) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image_list">{renderedImages}</div>;
}

export default ImageList;
