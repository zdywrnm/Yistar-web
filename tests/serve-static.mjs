import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const root = resolve(process.cwd(), "dist");
const host = "127.0.0.1";
const port = Number(process.env.PORT ?? 4321);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url ?? "/", `http://${host}:${port}`);
    const requestPath = decodeURIComponent(requestUrl.pathname);
    let filePath = resolve(root, `.${requestPath}`);

    if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    const fileStats = await stat(filePath);
    if (fileStats.isDirectory()) {
      filePath = resolve(filePath, "index.html");
    }

    const body = await readFile(filePath);
    response.writeHead(200, {
      "cache-control": "no-store",
      "content-type":
        contentTypes[extname(filePath)] ?? "application/octet-stream",
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    response.end(body);
  } catch {
    try {
      const body = await readFile(resolve(root, "404.html"));
      response.writeHead(404, { "content-type": contentTypes[".html"] });
      response.end(body);
    } catch {
      response.writeHead(404).end("Not found");
    }
  }
});

server.listen(port, host, () => {
  console.log(`Static test server ready at http://${host}:${port}`);
});
