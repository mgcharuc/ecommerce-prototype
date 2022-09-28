import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './modules/ecommerce/components/home/home.component';
import { StoreComponent } from './modules/ecommerce/components/store/store.component';
import { AboutComponent } from './modules/ecommerce/components/about/about.component';
import { ContactComponent } from './modules/ecommerce/components/contact/contact.component';
import { LoginComponent } from './layout/login/login.component';
import { CheckoutComponent } from './modules/ecommerce/components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SkeletonComponent,
    HomeComponent,
    StoreComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
