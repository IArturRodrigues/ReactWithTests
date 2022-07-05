import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react({
         babel: {
            plugins: ['babel-plugin-macros', 'babel-plugin-styled-components']
         }
      }),
      tsconfigPaths({ root: '.' })
   ]
});
