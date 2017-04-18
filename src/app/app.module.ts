import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { TranslateModule, MissingTranslationHandler } from 'ng2-translate';
import { MyMissingTranslationHandler } from './missingtemplate.component'

export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../assets/i18n', '.json' );
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
  ],
  providers: [ 
    { 
      provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler
    }, 
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
