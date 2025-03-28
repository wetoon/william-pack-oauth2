
import { build } from "bun";
import dts from "bun-plugin-dts";

await build({
    entrypoints: ['./src/index.ts'],
    plugins: [ dts() ],
    minify: {
        identifiers: false,
        whitespace: true,
        syntax: true
    },
    naming: 'index.mjs',
    sourcemap: 'none',
    outdir: 'dist',
    format: 'esm',
    target: 'bun'
})

await build({
    entrypoints: ['./src/index.ts'],
    minify: {
        identifiers: false,
        whitespace: true,
        syntax: true
    },
    naming: 'index.cjs',
    sourcemap: 'none',
    outdir: 'dist',
    format: 'cjs',
    target: 'bun'
})
