import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGameDetailComponent } from './add-game-detail/add-game-detail.component';
import { ViewGameDetailComponent } from './view-game-detail/view-game-detail.component';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, AddGameDetailComponent, ViewGameDetailComponent, CustomerComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
