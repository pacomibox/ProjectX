import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GridListDynamicComponent } from './views/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
declarations: [
AppComponent,
GridListDynamicComponent,
TruncatePipe
],
imports: [
BrowserModule,
MatToolbarModule,
MatCardModule,
MatListModule,
MatSliderModule,
MatGridListModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
