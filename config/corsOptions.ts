import type { CorsOptions } from "cors";

const allowedUrl = [
  "http://localhost:5000",
  "http://localhost:3000"
];

const corsOptions: CorsOptions = {
  origin: allowedUrl,
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  preflightContinue: false,
};

export { corsOptions };
