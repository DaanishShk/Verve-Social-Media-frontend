import "./css/YoutubePlaceholder.css";

function YoutubePlaceholder({ videoUrl, handleLoad }) {
  console.log(videoUrl);
  return (
    <div className="youtubePlaceholder">
      <img
        className="youtubePlaceholder__image postCard__image"
        src={`https://img.youtube.com/vi/${
          videoUrl.match(/embed\/(.*)/)?.[1]
        }/hqdefault.jpg`}
        alt=""
        onLoad={handleLoad}
        onError={handleLoad}
      />
      <span className="youtubePlaceholder__span">▶</span>
    </div>
  );
  {
  }
}

export default YoutubePlaceholder;
