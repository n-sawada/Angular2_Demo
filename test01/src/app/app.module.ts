//アプリ全体の設定情報記述

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MainComponent, ROUTES } from './main.component';
import { Page01Component } from './page01.component';
import { Page02Component } from './page02.component';
import { CalcService } from './calc.service';
import { StoreService } from './store.service';
import { ChildComponent } from './child.component';
import { CounterService } from './counter.service';

// import { AppComponent } from './app.component';

@NgModule({

  // このアプリで利用する
  declarations: [
    MainComponent,
    Page01Component,
    Page02Component,
    ChildComponent
  ],

  // このアプリで利用するモジュール
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],

  // DI元となるクラス
  providers: [
    CalcService,
    StoreService,
    CounterService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
