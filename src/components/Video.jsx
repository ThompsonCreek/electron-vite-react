import { useState } from "react";
import VideoModal from "./VideoModal";

export default function Video({ video }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative">
      <div className="group aspect-video block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img
          src={`file://${video.thumbnail?.path}`}
          alt=""
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
        <button
          type="button"
          className="absolute inset-0 focus:outline-none"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">play video {video.videoName}</span>
        </button>
        <VideoModal video={video} open={open} setOpen={setOpen} />
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {video.videoName}
      </p>
    </li>
  );
}
