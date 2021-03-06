import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        NgbCarouselModule,
        NgbAlertModule,
        StatModule,
    ],
    declarations: [
        DashboardComponent,
    ]
})
export class DashboardModule { }