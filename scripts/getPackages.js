const fs = require("fs");
const glob = require("glob");

function getPackages() {
  const promise = new Promise((res) => {
    glob(`${__dirname}/../packages/*/package.json`, function (er, paths) {
      const names = paths.map((pkgJsonPath) => {
        const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath));
        const pkgName = pkgJson.name;
        const name = pkgName.replace("@oui-ui/", "");
        return name;
      });

      return res(names);
    });
  });

  return promise;
}

module.exports = getPackages;
