# NgCapacitorInjectionSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.13.

## Testing Angular injection with Capacitor plugins

1. A module was created in `src/app/capacitor-plugins`.
1. In the module file, we define the `InjectionToken` and a `@NgModule` that provides the object-based Capacitor plugins.
    1. `useValue` can be used to quickly return the `StoragePlugin` object.
    1. `useFactory` can be used to write a function (e.g., check IE11) before returning the `StoragePlugin` object.
1. Components that need the plugins can inject it themselves via `@Inject()`.
1. In the test cases, we can import the module, and override the providers, by providing the same `InjectionToken`, but with a spy object instead.

## Reference

- https://github.com/ionic-team/capacitor/issues/2368#issuecomment-839724923
- https://angular.io/guide/dependency-injection-providers
