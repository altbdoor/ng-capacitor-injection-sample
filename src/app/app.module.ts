import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapacitorPluginsModule } from './capacitor-plugins/capacitor-plugins.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CapacitorPluginsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
