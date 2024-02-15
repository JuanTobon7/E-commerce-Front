import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();

  // En producción, sirve los archivos estáticos generados
  if (process.env.NODE_ENV === 'production') {
    const serveStatic = require('serve-static');
    app.use(serveStatic(path.resolve(__dirname, 'dist')));
  } else {
    // En desarrollo, usa Vite para servir los archivos
    const vite = await createViteServer({
      server: { middlewareMode: 'html' }
    });
    app.use(vite.middlewares);
  }

  // Especifica el puerto
  const PORT = process.env.PORT || 3002;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

createServer();
