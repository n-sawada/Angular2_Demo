//アプリ全体の設定情報記述

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({

  // このアプリで利用する
  declarations: [
    AppComponent
  ],

  // このアプリで利用するモジュール
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  // DI元となるクラス
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
