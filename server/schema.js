const { gql } = require("apollo-server");

const typeDefs = gql`

  type EmailAddress {
    address: String
  }

  type Country {
    code: String
    name: String
  }

  type City {
    IATACode: String
    name: String
    country: Country
  }

  type Location {
    IATACode: String
    name: String
    city: City
  }

  type Terminal {
    name: String
  }

  type Cabin {
    code: String
    name: String
  }

  type Equipment {
    code: String
    name: String
  }

  type Flight {
    number: String
    carrier: Carrier
    duration: String
    flown: Boolean
    checkInStart: String
    localCheckInStart: String
    checkInEnd: String
    localCheckInEnd: String
    scheduledArrival: String
    localScheduledArrival: String
    scheduledDeparture: String
    localScheduledDeparture: String
    arrivalTerminal: Terminal
    cabin: Cabin
    equipment: Equipment
  }

  type Carrier {
    code: String
    name: String
  }

  type Segment {
    id: Int
    type: String
    informational: Boolean
    departFrom: Location
    arriveOn: Location
    marketingFlight: Flight
  }

  type Connection {
    id: Int
    duration: String
    origin: Location
    destination: Location
    segments: [Segment]
  }

  type Itinerary {
    type: String
    connections: [Connection]
  }

  type Title {
    code: String
    name: String
  }

  type Passenger {
    id: Int
    firstName: String
    lastName: String
    title: Title
  }

  type Booking {
    bookingCode: String
    contactDetails: [EmailAddress]
    itinerary: Itinerary
    passengers: Passenger
  }

  type Query {
    bookingData(bookingCode: String!): Booking
    booking(bookingCode: String!): Booking
  }`;

module.exports = typeDefs;
