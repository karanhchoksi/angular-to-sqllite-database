import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { StorageDataComponent } from './storage-data/storage-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StorageDataComponent
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot({
      name: 'localstorage',
      driverOrder: ['indexeddb', 'sqlite', 'websql'],
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
