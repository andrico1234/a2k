const roundNumber = (number: number, decimal = 1e2) =>
  Math.round(number * decimal) / decimal;

export default roundNumber;
