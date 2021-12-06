import { InjectionToken, NgModule } from '@angular/core';
import { Storage as CapacitorStorage, StoragePlugin } from '@capacitor/storage';

export const STORAGE_PLUGIN = new InjectionToken<StoragePlugin>('StoragePluginTokenIdentifier');

@NgModule({
  providers: [
    {
      provide: STORAGE_PLUGIN,
      // useValue: CapacitorStorage,
      useFactory: () => {
        console.log('called factory for storage plugin');
        return CapacitorStorage;
      }
    }
  ]
})
export class CapacitorPluginsModule { }
