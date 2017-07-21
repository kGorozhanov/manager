import { loginRoutes } from './login.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(loginRoutes)
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {}
