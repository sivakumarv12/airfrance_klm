import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CheckInService {
  constructor(private apollo: Apollo) {}

  getRetrieveBookingData(bookingCode: string) {
     const GET_BOOKING_DATA = gql`
       query GetBookingData($bookingCode: String!) {
         booking(bookingCode: $bookingCode) {
           bookingCode,
           passengers {
             lastName
           }
         }
       }
     `;
     return this.apollo.watchQuery({
       query: GET_BOOKING_DATA,
       variables: {
         bookingCode,
       },
     }).valueChanges;
   }
}

