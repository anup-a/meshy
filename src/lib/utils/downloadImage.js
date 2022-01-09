import { saveAs } from "file-saver";

const downloadImage = (filename) => {
  const canvas = document.getElementById("gradient-canvas");
  //@ts-ignore

  canvas.toBlob(function (blob) {
    console.log(blob);
    saveAs(blob, filename + ".png");
  });
};

export default downloadImage;
