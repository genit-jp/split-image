const sharp = require("sharp");
const filename = process.argv[2];
const splitnum = process.argv[3] || 4;
// console.log(filename);
const image = sharp(filename);

image.metadata().then((info) => {
  let newwidth = info.width / splitnum;
  for (i = 0; i < splitnum; i++) {
    sharp(filename)
      .extract({
        left: newwidth * i,
        top: 0,
        width: newwidth,
        height: info.height,
      })
      .toFile(`dst/${filename}-${i}.jpg`, function (err) {
        // Extract a region of the input image, saving in the same format.
      });
  }
  //   console.log(newwidth);
});
//   .catch((error) => {
//     console.log(error);
//   });
