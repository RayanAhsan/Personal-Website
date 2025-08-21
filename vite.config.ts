import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // Replace with your actual repository name
  build: {
    outDir: 'dist',
  },
})