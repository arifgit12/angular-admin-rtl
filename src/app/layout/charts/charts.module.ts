import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ChartsRoutingModule,
        PageHeaderModule
    ],
    declarations: [ChartsComponent]
})
export class ChartsModule { }