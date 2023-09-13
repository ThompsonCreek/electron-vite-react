import { useState, useEffect } from "react";
import { ipcRenderer } from "electron";

export function useVideoDirPath() {
  const [videoDirPath, setVideoDirPath] = useState("");

  useEffect(() => {
    ipcRenderer.on("video-directory-path", (event, path) => {
      setVideoDirPath(path);
    });
  }, []);

  return videoDirPath;
}
