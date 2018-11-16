import babel from "rollup-plugin-babel"
import replace from "rollup-plugin-replace"
import commonjs from "rollup-plugin-commonjs"
import nodeResolve from "rollup-plugin-node-resolve"
import localResolve from 'rollup-plugin-local-resolve'
import { sizeSnapshot } from "rollup-plugin-size-snapshot"


import pkg from "./package.json"
const name = "components";
const input = "./modules/index"

const globals = {
  react: "React",
  "prop-types":"PropTypes",
  "react-dom":"ReactDOM",
  "fbjs/lib/ExecutionEnvironment":"canUseDOM"
};

const babelOptionsCJS = {
  exclude: /node_modules/
};
const babelOptionsESM = {
  exclude: /node_modules/,
  runtimeHelpers: true,
  // plugins: [["@babel/plugin-transform-runtime", { useESModules: true }]]
};
const commonjsOptions = {
  include: /node_modules/
};
const external = ['moment']

export default [{
  input,
  output: { file: `esm/${pkg.name}.js`, format: "esm" },
  external:['moment'],
  plugins: [
    localResolve(),
    babel(babelOptionsESM),
    sizeSnapshot()
  ]
},{
   input,
   output: { file: `umd/${pkg.name}.js`, format: "umd", name, globals },
   external: Object.keys(globals),
   plugins: [
     nodeResolve(),
     babel(babelOptionsESM),
     commonjs(commonjsOptions),
     replace({ "process.env.NODE_ENV": JSON.stringify("development") }),
     sizeSnapshot()
   ]
}]
