import { useState, useEffect } from "react";
import directoryTree from "directory-tree";

const getVideoFiles = (dir) => {
  const directory = directoryTree(dir);
  return directory.children;
};

export function useVideoFiles(videoDirPath) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (videoDirPath) {
      const videoPaths = getVideoFiles(videoDirPath);
      setVideos(videoPaths);
    }
  }, [videoDirPath]);

  return videos.filter((e) => e.name !== ".DS_Store");
}
