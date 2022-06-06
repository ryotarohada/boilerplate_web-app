/// <reference types="node" />

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly PORT: string
    readonly AWS_ACCESS_KEY_ID: string
    readonly AWS_SECRET_ACCESS_KEY: string
    readonly DYNAMODB_REGION: string
  }
}
