/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PREAUDIT_URL?: string
  readonly VITE_POSTAUDIT_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
