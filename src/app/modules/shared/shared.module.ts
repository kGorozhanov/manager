import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MdCardModule, MdButtonModule, MdInputModule, MdToolbarModule, MdSidenavModule } from '@angular/material';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MdCardModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdInputModule,
        MdToolbarModule,
        MdSidenavModule
    ],
    declarations: [
        ControlMessagesComponent
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        MdCardModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdInputModule,
        MdToolbarModule,
        MdSidenavModule,
        ControlMessagesComponent
    ]
})
export class SharedModule {}