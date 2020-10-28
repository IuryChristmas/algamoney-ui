import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MessageModule,
    MessagesModule,
    ToastModule,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    ErrorHandlerService,
    MessageService
  ]
})
export class CoreModule { }
