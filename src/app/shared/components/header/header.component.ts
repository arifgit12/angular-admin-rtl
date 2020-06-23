import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Subscription } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    private isRTL: boolean = false;
    private isLTR: boolean = true;
    private subscription: Subscription;

    constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {
        
        translate.addLangs(["en", "ar"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
    }

    ngOnInit() {
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(
            (param: any) => {
            let locale = param['locale'];
            if (locale !== undefined){
                this.translate.use(locale);
            }
        });
    }

    ngOnDestroy() {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    }

    changeLanguage(lang){
        //console.log(lang);
        if(lang == 'en'){
            this.ltr();
        }
        if(lang == 'ar'){
            this.rtl();
        }
        this.translate.use(lang);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');     
    }

    rtl(){
         if(this.isRTL == false){
            const dom: any = document.querySelector('body');
            dom.classList.toggle('rtl');
            this.isRTL = true;
            this.isLTR = false;
        } 
    }

    ltr(){
        if(this.isLTR == false){
            const dom: any = document.querySelector('body');
            dom.classList.toggle('rtl');
            this.isRTL = false;
            this.isLTR = true;
        }         
    }
}