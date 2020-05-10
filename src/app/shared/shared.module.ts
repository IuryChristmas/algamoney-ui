import { MessageComponent } from './message/message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    MessageModule,
    MessagesModule,
  ],
  exports: [
    MessageComponent
  ]
})
export class SharedModule { }
