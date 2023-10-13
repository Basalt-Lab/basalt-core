const esbuild = require('esbuild');
const alias = require('esbuild-plugin-alias');

const { resolve, join } = require('path');
const basePath = resolve(__dirname);

async function run() {
    const options = {
        entryPoints: ['./Sources/App.ts'],
        outfile: './Build/App.js',
        bundle: true,
        platform: 'node',
        external: Object.keys(require('./package.json').dependencies),
        loader: { '.ts': 'ts' },
        tsconfig: './tsconfig.json',
        color: true,
        plugins: [
            alias({
                "@/*": join(basePath, "/*"),
            }),
        ]
    };

    const env = process.env.ESBUILD_ENV || 'dev';

    if (env === 'prod') {
        options.minify = true;
        options.keepNames = true;
        options.treeShaking = true;
        await esbuild.build(options);
    }

    if (env === 'dev') {
        options.sourcemap = 'linked';
        await esbuild.build(options);
        const ctx = await esbuild.context(options);
        await ctx.watch();
    }
}

run().catch((e) => {
    console.error(e);
    process.exit(1);
});
