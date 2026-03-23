import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'

function getHtmlInputs(dir) {
    const files = fs.readdirSync(dir)
    const inputs = {}

    files.forEach(file => {
        if (file.endsWith('.html')) {
            const name = file.replace('.html', '')
            inputs[name] = path.resolve(__dirname, dir, file)
        }
    })

    return inputs
}

export default defineConfig({
    root: 'src',
    publicDir: '../public',

    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: getHtmlInputs('src')
        }
    }
})