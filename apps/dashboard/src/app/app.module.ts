import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreDataModule } from '@production-angular/core-data';
import {
  CoreStateModule
} from '@production-angular/core-state';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@production-angular/material';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { StoreModule } from '@ngrx/store';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetsListComponent,
    WidgetDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
