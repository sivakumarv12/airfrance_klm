import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CheckInService } from './service/check-in.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent {

  checkInForm = this.formBuilder.group({
    bookingCode: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(6)])],
    familyName: [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])]
  });
  bookingData:any;
  errorMessage:string | undefined;
  itinerary = false;

  constructor(private formBuilder: FormBuilder,private checkInService:CheckInService,private router: Router) { }



  retrieveBooking(): void {
     const bookingCode:any = this.checkInForm.get('bookingCode')?.value
     this.checkInService.getRetrieveBookingData(bookingCode).subscribe((result) => {
       if (result.data) {
        this.itinerary = true;
         this.bookingData = result.data;
       } else {
         alert('invalid booking');
       }
     });
  }

  }
