import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { AppComponent } from './app.component';
import { AppDialogComponent } from './app.dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDialogComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AppDialogComponent
  ]
})
export class AppModule { }
