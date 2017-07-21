import { Routes } from '@angular/router';
import { AuthGuard } from 'app/services/auth-guard.service';
import { LoginGuard } from 'app/services/login-guard.serevice';

export const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/modules/dashboard/dashboard.module.ts#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: 'app/modules/login/login.module.ts#LoginModule',
        canActivate: [LoginGuard]
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
