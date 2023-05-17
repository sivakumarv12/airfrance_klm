var fs = require('fs');
const path = require('path');

const resolvers = {
    Query: {
      booking: async (parent, { bookingCode }, { dataSources }) => {
        const booking = await dataSources.getDatasource.getBooking(bookingCode);
        if (!booking) {
          throw new Error(`Booking with code ${bookingCode} not found.`);
        }
      return booking;
      },
      bookingData: async (parent, { bookingCode }, { dataSources }) => {
        console.log("Received bookingCode:", bookingCode);
        const booking = await dataSources.getDatasource.getBooking(bookingCode);
        if (!booking) {
          throw new Error(`Booking with code ${bookingCode} not found.`);
        }
        return booking;
      },
    },
  };
  
  module.exports = resolvers;
  