import { lstat } from "node:fs/promises";
import { cwd } from "node:process";
import { ipcRenderer } from "electron";

ipcRenderer.on("main-process-message", (_event, ...args) => {});

lstat(cwd())
  .then((stats) => {})
  .catch((err) => {
    console.error(err);
  });
