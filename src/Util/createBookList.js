createBookListJson(`../../public/posts/`).forEach(function (file) {
  console.log(file);
});

function createBookListJson(path) {
  const fs = require("fs");
  const files = fs.readdirSync(path);
  let allFiles = [];
  let id = 0;
  files.forEach(function (file) {
    const name = path + file;

    if (fs.statSync(name).isDirectory()) {
      allFiles = allFiles.concat(createBookListJson(name));
    } else {
      allFiles.push({id :id++, fileName: file});
    }
  });

  const bookJson = JSON.stringify(allFiles);
  fs.writeFileSync(`../../public/bookList.json`, bookJson);
  return allFiles;
}
