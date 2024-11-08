/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const colors = require("../design-system/tokens/colors.json");

const join = (path, key) => {
  if (!path) return key;
  // ignore __default property and use parent key instead
  // e.g. blue: { default: "blue", light: "lightblue" } => --blue: blue; --blue-light: lightblue;
  if (key === "__default") return path;
  return `${path}-${key}`;
};

const generateVariables = (path, object) => {
  let styles = "";
  Object.entries(object).forEach(([key, value]) => {
    if (typeof value === "object") {
      styles += generateVariables(`${join(path, key)}`, value);
    } else {
      styles += `--${join(path, key)}: ${value};`;
    }
  });
  return styles;
};

const cssVarsFromJson = (variables) => {
  const variablesObject =
    typeof variables === "string" ? JSON.parse(variables) : variables;
  return generateVariables("", variablesObject);
};

// const cssVars = `:root { ${cssVarsFromJson(colors)} } :root,[data-theme="light"] {${cssVarsFromJson(lightTheme)}} [data-theme="dark"] {${cssVarsFromJson(darkTheme)}}`;
const cssVars = `:root { ${cssVarsFromJson(colors)}}`;
fs.writeFile("src/styles/cssVars.css", cssVars, (err) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log("File successfully written to disk");
});
