import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ForumsPage } from '../pages/forums/forums';
import { EventsPage } from '../pages/events/events';
import { CentersPage } from '../pages/centers/centers';
import { LoginPage } from '../pages/login/login';
import { SocialGatheringsPage } from '../pages/social-gatherings/social-gatherings';
import { FestivalsPage } from '../pages/festivals/festivals';
import { PerformancesPage } from '../pages/performances/performances';
import { MakeYourOwnPage } from '../pages/make-your-own/make-your-own';
import { PerformancesPageModule } from '../pages/performances/performances.module';
import { SocialGatheringsPageModule } from '../pages/social-gatherings/social-gatherings.module';
import { FestivalsPageModule } from '../pages/festivals/festivals.module';
import { MakeYourOwnPageModule } from '../pages/make-your-own/make-your-own.module';
import { HttpModule } from "@angular/http";
import { EventInfoPage } from '../pages/event-info/event-info';
import { EventInfoPageModule } from '../pages/event-info/event-info.module';


@NgModule({
  declarations: [
    MyApp,
    ForumsPage,
    EventsPage,
    CentersPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocialGatheringsPageModule,
    FestivalsPageModule,
    PerformancesPageModule,
    MakeYourOwnPageModule,
    HttpModule,
    EventInfoPageModule,
    SocialGatheringsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForumsPage,
    EventsPage,
    CentersPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
