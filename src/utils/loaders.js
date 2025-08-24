// loaders.js 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const loadGLTF = (url) => {
  const loader = new GLTFLoader();
  return new Promise((resolve, reject) => {
    loader.load(url, resolve, undefined, reject);
  });
};
