import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExchangeRateService } from './exchangeRate.service';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CurrenciesComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule, BrowserAnimationsModule, NgbModule,
    MatDialogModule
  ],
  providers: [ExchangeRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
