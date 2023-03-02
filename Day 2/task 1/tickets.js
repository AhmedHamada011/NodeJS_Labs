class Tickets{
  tickets = {}

  addTicket(id,seatNumber,flightNumber,depAirport,arrAirport,travelDate){
    let ticket = {seatNumber,flightNumber,depAirport,arrAirport,travelDate};
    this.tickets[id]= ticket;
  }

  getInfo(id) {
    return this.tickets[id];
  }

  updateInfo(id,seatNumber,flightNumber,depAirport,arrAirport,travelDate){
    if(this.tickets[id]){
      let oldTicket = this.tickets[id];
      let ticket = {
        seatNumber: (seatNumber === undefined) ? oldTicket["seatNumber"] : seatNumber,
        flightNumber: (flightNumber === undefined) ? oldTicket["flightNumber"] : flightNumber,
        depAirport: (depAirport === undefined) ? oldTicket["depAirport"] : depAirport,
        arrAirport: (arrAirport === undefined) ? oldTicket["arrAirport"] : arrAirport,
        travelDate: (travelDate === undefined) ? oldTicket["travelDate"] : travelDate,
      }
      this.tickets[id] = ticket;
    }else{
      throw new Error("id Must be provided");
    }
  }

}

var ticket = new Tickets();

ticket.addTicket(1,2,3,"cairo","alex","1-1-2022");

console.log(ticket.updateInfo(1,4));

module.exports = {
  Tickets
}