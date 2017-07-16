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
            }
        ]
    }
]