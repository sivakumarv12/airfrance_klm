import { Component, Input, SimpleChanges } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';


const GET_BOOKING = gql`
  query getBooking($bookingCode: String!) {
    bookingData(bookingCode: $bookingCode) {
      bookingCode
      contactDetails {
        address
      }
      itinerary {
        type
        connections {
          id
          duration
          origin {
            IATACode
            name
          }
          destination{
            IATACode
            name
          }
        }
      }
      passengers {
        id
        firstName
        lastName
      }
    }
  }
`;

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.scss']
})
export class ItineraryDetailsComponent {
  @Input() bookingData:any;

  constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute){

  }
  booking: any;

   ngOnChanges(changes: SimpleChanges) {
    const bookingCodeParam =  changes['bookingData'].currentValue.booking.bookingCode;
          this.apollo
        .watchQuery({
          query: GET_BOOKING,
          variables: {
            bookingCode: bookingCodeParam,
          },
        })
        .valueChanges.subscribe((result) => {
          let bookingResult: any = result.data;
          console.log(bookingResult);
          this.booking = bookingResult.bookingData;
        });
  }

}
