import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports:      [ 
    FormsModule,
    BrowserModule, 
    NgxScannerQrcodeModule 
  ],
  declarations: [ AppComponent, SafePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
