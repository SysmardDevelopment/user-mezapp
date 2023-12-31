import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StripePaymentsPageRoutingModule } from './stripe-payments-routing.module';

import { Stripe } from '@ionic-native/stripe/ngx';

import { StripePaymentsPage } from './stripe-payments.page';
import { SharedModule } from 'src/app/directives/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StripePaymentsPageRoutingModule,
    SharedModule
  ],
  declarations: [StripePaymentsPage],
  providers: [ Stripe ]
})
export class StripePaymentsPageModule { }
