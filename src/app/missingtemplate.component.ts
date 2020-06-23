import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';
import { Injectable } from "@angular/core";

@Injectable()
export class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        console.log(params);
        return 'Translations not available for ' + params.key;
    }
}