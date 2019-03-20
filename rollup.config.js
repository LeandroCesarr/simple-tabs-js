import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import scss from 'rollup-plugin-scss'

const babelConfig = { exclude: 'node_modules/**' };
const minifyConfig = { comments: false };

export default [
  {
    input: 'resources/index.js',
    output: {
      name: 'index',
      file: 'dist/index.min.js',
      format: 'umd'
    },
    interop: false,
    plugins: [
      babel(babelConfig),
      minify(minifyConfig),
      uglify()
    ]
  },
  {
    input: 'resources/browser.js',
    output: {
      name: 'index',
      file: 'dist/simpletabsjs.min.js',
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel(babelConfig),
      minify(minifyConfig),
      uglify()
    ]
  },
  {
    input: 'resources/style.js',
    output: {
      file: 'dist/bundle.js',
      format: "system"
    },
    plugins: [
      scss() // will output compiled styles to bundle.css
    ]
  }
]
