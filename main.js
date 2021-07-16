const sharp = require("sharp");
const filename = process.argv[2];
// console.log(filename);
const image = sharp(filename);

image.metadata().then((info) => {
  let newwidth = info.width / 4;
  for (i = 0; i < 4; i++) {
    sharp(filename)
      .extract({
        left: newwidth * i,
        top: 0,
        width: newwidth,
        height: info.height,
      })
      .toFile(`${filename}-${i}.png`, function (err) {
        // Extract a region of the input image, saving in the same format.
      });
  }
  //   console.log(newwidth);
});
//   .catch((error) => {
//     console.log(error);
//   });
