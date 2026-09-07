
export function createVisitor(name, age, ticketId) {
  let visitor = {
    name: name,
    age: age,
    ticketId: ticketId
  }
  return visitor;
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
 let owner = tickets[ticketId];
  if (owner === undefined) {
    return 'unknown ticket id';
  }
  if (owner === null) {
    return 'not sold';
  }
  return `sold to ${owner}`
}

export function simpleTicketStatus(tickets, ticketId) {
 let owner = tickets[ticketId];
  if (owner === null || owner === undefined) {
    return 'invalid ticket !!!';
  }
  return owner;
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
