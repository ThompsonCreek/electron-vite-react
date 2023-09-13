import path from "path";
import Video from "./Video";

export default function VideoGrid({ videoFiles }) {
  const videos = [];
  videoFiles.forEach((file) => {
    const ext = path.extname(file.name);
    if ([".mp4", ".mov"].includes(ext)) {
      const videoName = file.name;
      const videoPath = file.path;
      const thumbnail = videoFiles.find(
        (e) =>
          path.parse(e.name).name == path.parse(videoName).name &&
          [".png", ".jpeg", ".jpg", ".webp"].includes(path.extname(e.name))
      );
      videos.push({ videoName, videoPath, thumbnail });
    }
  });
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
    >
      {videos.map((video) => (
        <Video video={video} key={video.videoName} />
      ))}
    </ul>
  );
}
