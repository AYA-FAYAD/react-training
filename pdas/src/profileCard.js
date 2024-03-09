function ProfileCard({ title, handel, image, description }) {
  // const title = props.title;
  // const handel = props.handel;

  // const { title, handel } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handel}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
