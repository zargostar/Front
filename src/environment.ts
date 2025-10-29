const environment = {
  Images: String(import.meta.env.VITE_IMAGE_SERVER),
  Server: String(import.meta.env.VITE_WEB_SERVERE),
  Environment: String(import.meta.env.VITE_APP_ENV),
};

export default environment;
