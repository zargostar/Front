/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_WEB_SERVERE: string;
  readonly VITE_IMAGE_SERVER: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
