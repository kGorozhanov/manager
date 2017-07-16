import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { dashboardRoutes } from "app/modules/dashboard/dashboard.routes";
import { RestourantsCreateComponent } from './components/restourants-create/restourants-create.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    declarations: [
        DashboardComponent,
        RestourantsCreateComponent
    ]
})
export class DashboardModule {}