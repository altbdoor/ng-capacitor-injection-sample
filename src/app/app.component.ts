import { Component, Inject, OnInit } from '@angular/core';
import { StoragePlugin } from '@capacitor/storage';
import { STORAGE_PLUGIN } from './capacitor-plugins/capacitor-plugins.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-capacitor-injection-sample';

  constructor(@Inject(STORAGE_PLUGIN) private storage: StoragePlugin) {}

  ngOnInit() {
    console.log('initialized AppComponent with', this.storage);
  }
}
