import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CountdownModule } from 'ngx-countdown';
import { CountdownService } from './services/countdown/countdown.service';
import { LocalStorageService } from './services/localStorage/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    CountdownModule,
  ],
  declarations: [
    HomeComponent,
    CountdownComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
  { provide: CountdownService, useClass: CountdownService},
  ]
})
export class HomeModule { }
