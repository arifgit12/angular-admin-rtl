import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { MyMissingTranslationHandler } from './missingtemplate.component'

export function createTranslateLoader( httpClient: HttpClient ) {
    return new TranslateHttpLoader( httpClient, '../assets/i18n/', '.json' );
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
			loader: {
			  provide: TranslateLoader,
			  useFactory: (createTranslateLoader),
			  deps: [HttpClient]
			}
		})
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
