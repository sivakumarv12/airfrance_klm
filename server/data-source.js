const { RESTDataSource } = require("apollo-datasource-rest");
//  const fs = require("fs");
const path = require('path');
const fs = require('fs').promises;
class GetDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/";
  }

  async getBooking(code) {
    if (!code) {
      throw new Error("Booking code is required");
    }
    const filePath  = path.join(__dirname,"mock.json")
    const data = await fs.readFile(filePath, "utf8");
    const customer = JSON.parse(data);
        if(customer.bookingCode === code){
          return customer;
        }
    return null;
  }
}


module.exports = GetDatasource;
