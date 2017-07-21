import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdInputModule, MdToolbarModule, MdSidenavModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MdTabsModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MdCardModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdInputModule,
        MdToolbarModule,
        MdSidenavModule,
        MdTabsModule
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
        MdTabsModule,
        ControlMessagesComponent
    ]
})
export class SharedModule {}
