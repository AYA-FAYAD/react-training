import "./ImageShow.css";
function ImageShow({ image }: any) {
  return (
    <div className="image_show">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
