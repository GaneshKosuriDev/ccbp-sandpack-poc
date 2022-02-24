const fs = require("fs-extra");
const path = require("path");

let updatedData = {};

// TODO: This section is in Progress State

const sourceDirectoryPath = "./content";

const parsedPath = (path) => {};

const FormatContentRecursivelyForLoading = async (src) => {
  let exists = fs.existsSync(src);
  let stats = exists && fs.statSync(src);
  let isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.readdirSync(src).forEach(function (childItemName) {
      FormatContentRecursivelyForLoading(path.join(src, childItemName));
    });
  } else {
    console.log(src);
    await fs
      .readFile(src, "utf8")
      .then((filecontents) => {
        return filecontents;
      })
      .then((filecontents) => {
        updatedData[src] = filecontents;
        fs.writeFile(
          "./data.json",
          JSON.stringify(updatedData, null, 2),
          "utf8"
        );
      });
  }
};

FormatContentRecursivelyForLoading("./content");
