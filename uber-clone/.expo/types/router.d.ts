/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)\_layout` | `/(auth)\sign-in` | `/(auth)\sign-up` | `/(auth)\welcome` | `/(root)\(tabs)\_layout` | `/(root)\(tabs)\chat` | `/(root)\(tabs)\home` | `/(root)\(tabs)\profile` | `/(root)\(tabs)\rides` | `/(root)\_layout` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
