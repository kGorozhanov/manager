import { RestourantReportComponent } from './components/restourant-report/restourant-report.component';
import { RestourantOfficiantsComponent } from './components/restourant-officiants/restourant-officiants.component';
import { RestourantDesksComponent } from './components/restourant-desks/restourant-desks.component';
import { RestourantMenuComponent } from './components/restourant-menu/restourant-menu.component';
import { RestourantDetailComponent } from './components/restourant-detail/restourant-detail.component';
import { RestourantsCreateComponent } from './components/restourants-create/restourants-create.component';
import { DashboardComponent } from './dashboard.component';
import { Routes } from '@angular/router/router';
export const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'restourants/new',
                component: RestourantsCreateComponent
            },
            {
                path: 'restourants/:id',
                component: RestourantDetailComponent,
                children: [
                    {
                        path: 'reports',
                        component: RestourantReportComponent
                    },
                    {
                        path: 'menu',
                        component: RestourantMenuComponent
                    },
                    {
                        path: 'desks',
                        component: RestourantDesksComponent
                    },
                    {
                        path: 'officiants',
                        component: RestourantOfficiantsComponent
                    },
                    {
                        path: '**',
                        redirectTo: 'reports'
                    }
                ]
            }
        ]
    }
]
