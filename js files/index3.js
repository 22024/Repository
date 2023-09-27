const person = {
    id: 1,
    personName: "Fahad",
    personAge: "23",
    personIncome: "2000000"
  };
  console.log("Properties:");
  for (let property in person) {
    console.log(property);
  }