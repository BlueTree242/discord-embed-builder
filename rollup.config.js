import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: "inline",
      },
    ],
    external: ["styled-components", "react", "react-dom", "twin.macro"],
    plugins: [
      resolve(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({ babelHelpers: "bundled" }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "esm",
        sourcemap: "inline",
      },
    ],
    plugins: [dts()],
  },
];

export default config;
