import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TelaMenuPage } from '../pages/tela-menu/tela-menu';
import { TelacadastroPage } from '../pages/telacadastro/telacadastro';
import { TelalistarPage } from '../pages/telalistar/telalistar';
import { TelaeditarPage } from '../pages/telaeditar/telaeditar';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TelaMenuPage,
    TelacadastroPage,
    TelalistarPage,
    TelaeditarPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TelaMenuPage,
    TelacadastroPage,
    TelalistarPage,
    TelaeditarPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
