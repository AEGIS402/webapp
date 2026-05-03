/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PREAUDIT_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
