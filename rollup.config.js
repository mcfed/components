import babel from "rollup-plugin-babel"
import replace from "rollup-plugin-replace"
import commonjs from "rollup-plugin-commonjs"
import postcss from 'rollup-plugin-postcss'
import json from "rollup-plugin-json"
import nodeResolve from "rollup-plugin-node-resolve"
import localResolve from 'rollup-plugin-local-resolve'
import notify from 'rollup-plugin-notify'
import { sizeSnapshot } from "rollup-plugin-size-snapshot"


import pkg from "./package.json"
const name = "components";
const input = "./modules/index"

const globals = {
  "react": "React",
  "prop-types":"PropTypes",
  "react-dom":"ReactDOM",
  "moment":"moment",
  "fbjs/lib/ExecutionEnvironment":"canUseDOM"
};

const babelOptionsCJS = {
  exclude: /node_modules/
};
const babelOptionsESM = {
  exclude: /node_modules/,
  runtimeHelpers: true,
//  plugins: [["@babel/runtime", { useESModules: true }]]
};
const commonjsOptions = {
//  include: /node_modules/
};

export default [{
  input,
  output: { file: `esm/${pkg.name}.js`, format: "esm",name,globals },
  external:Object.keys(globals),
  plugins: [
    nodeResolve(),
    postcss({
      plugins: []
    }),
    babel(babelOptionsESM),
    commonjs(commonjsOptions),
    // replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    sizeSnapshot(),
    notify()
  ]
},{
  input,
  output: { file: `umd/${pkg.name}.js`, format: "umd", name, globals },
  external: Object.keys(globals),
  plugins: [
   nodeResolve(),
   postcss({
     autoModules:false,
     plugins: []
   }),
   babel(babelOptionsESM),
   commonjs(commonjsOptions),
   replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
   sizeSnapshot(),
   notify()
  ]
}]
