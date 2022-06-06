/// <reference types="node" />

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly API_PORT: string
    readonly DATABASE_PORT: string
    readonly AWS_ACCESS_KEY_ID: string
    readonly AWS_SECRET_ACCESS_KEY: string
    readonly DYNAMODB_REGION: string
  }
}
