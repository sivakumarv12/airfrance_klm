import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './check-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';

@NgModule({
  declarations: [
    CheckInComponent,
    ItineraryDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    CheckInComponent,
    ItineraryDetailsComponent
  ]
})
export class CheckInModule { }
