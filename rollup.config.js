import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const config = {
  input: 'src/index.cjs', // Your main file
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' })
  ]
};

export default [
  {
    ...config,
    output: {
      file: 'dist/bundle.cjs',
      format: 'cjs'
    }
  },
  {
    ...config,
    output: {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    }
  },
  {
    ...config,
    output: {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'nejs' // Replace with your library's global variable
    },
    plugins: [...config.plugins, terser()]
  }
];
