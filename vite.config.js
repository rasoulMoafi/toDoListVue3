import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // alias: {
  //   // alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]  },
        
  //     find: "@",
  //     replacement:resolve(projectRootDir, "src"),
  // }
})
