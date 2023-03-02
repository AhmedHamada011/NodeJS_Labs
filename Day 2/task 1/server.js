var myMod = require("./tickets");

let ticket = new myMod.Tickets();


ticket.addTicket(1,2,3,"cairo","alex","28-2-2023");
console.log(ticket.getInfo(1));

ticket.addTicket(2,3,3,"cairo","alex","28-2-2023");
console.log(ticket.getInfo(2));

ticket.addTicket(3,3,3,"cairo","alex","28-2-2023");
console.log(ticket.getInfo(3));

ticket.updateInfo(3,3,3,"cairo","CA","5-3-2023");
console.log(ticket.getInfo(3));