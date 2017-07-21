import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { dashboardRoutes } from 'app/modules/dashboard/dashboard.routes';
import { RestourantsCreateComponent } from './components/restourants-create/restourants-create.component';
import { RestourantDetailComponent } from './components/restourant-detail/restourant-detail.component';
import { RestourantMenuComponent } from './components/restourant-menu/restourant-menu.component';
import { RestourantDesksComponent } from './components/restourant-desks/restourant-desks.component';
import { RestourantOfficiantsComponent } from './components/restourant-officiants/restourant-officiants.component';
import { RestourantReportComponent } from './components/restourant-report/restourant-report.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    declarations: [
        DashboardComponent,
        RestourantsCreateComponent,
        RestourantDetailComponent,
        RestourantMenuComponent,
        RestourantDesksComponent,
        RestourantOfficiantsComponent,
        RestourantReportComponent
    ]
})
export class DashboardModule {}
