const { build } = require('esbuild');
const { dependencies } = require('./package.json');
const { compilerOptions: { target } } = require('./tsconfig.json');

const COLOR = {
  red: '\033[0;31m',
  green: '\033[0;32m',
}
const RESET = '\033[0m'

const external = Object.keys(dependencies);

const header = `(() => {
    window.__esbuild_vendors__ = window.__esbuild_vendors__ || {};
    function require(key) { return window.__esbuild_vendors__[key] };`;

const footer = `})();`;

const vendor = `window.__esbuild_vendors__ = window.__esbuild_vendors__ || {};
${external.map(key => {
    return `window.__esbuild_vendors__['${key}'] = require('${key}');`
}).join('\n')}`;

const run = async () => {

  const start = Date.now();

  // Build the source code first to find errors quickly.
  await buildSrc();

  // Build the vendor packages next.
  await buildVendor();

  const finish = Date.now();

  console.log('\n', COLOR['green'], `Complete in ${finish - start}ms`, RESET);

}

const buildSrc = async () => {
  try { 
    await build({
      entryPoints: ['src/index.ts'],
      outfile: 'dist/source.js',

      bundle: true,
      minify: true,
      sourcemap: true,

      external,
      banner: { js: header },
      footer: { js: footer },

      logLevel: 'info',
      target,
      // browser: {},
    });
  } catch (err) {
    throw new Error('Build failed');
  }
}

const buildVendor = async () => {
  try {
    await build({
        stdin: {
            contents: vendor,
            resolveDir: __dirname
        },
        bundle: true,
        minify: true,
        outfile: 'dist/vendor.js',
        logLevel: 'info',
        sourcemap: true,
    });
  } catch (err) {
    throw new Error('Building vendor bundle failed');
  }
}

(function main() {
  run()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(COLOR['red'], err, RESET);
      process.exit(1);
    });
})();
