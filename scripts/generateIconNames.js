const { readFileSync, writeFileSync } = require("fs");
const { parse } = require("svg-parser");
const prettier = require("prettier");

function generateIconNames() {
  const icons = readFileSync("packages/icons/a2k-icons.svg", {
    encoding: "utf-8",
  });

  const iconObject = parse(icons);

  const names = new Set();

  const elements = iconObject.children[0].children;

  elements.forEach((el) => {
    if (el.tagName === "symbol") {
      names.add(el.properties.id);
    }
  });

  const namesArr = JSON.stringify([...names]);

  const file = prettier.format(`export default ${namesArr}`);

  writeFileSync("packages/icons/src/iconNames.ts", file);
}

module.exports = generateIconNames;
