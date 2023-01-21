const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  let billAmount = Number(billTotalInput.value);
  let tipAmount = Number(tipInput.value);
  let totalBillAmount = billAmount + (tipAmount / billAmount) * 100;
  //   console.log(totalBillAmount);
  let billPerPerson = totalBillAmount / numberOfPeople;
  //   console.log(Math.floor(billPerPerson * 100) / 100);
  //   perPersonTotal.innerText = `$${Math.floor(billPerPerson * 100) / 100}`;
  perPersonTotal.innerText = `$${billPerPerson.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeopleDiv.innerText > 1) {
    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople;
  }
  calculateBill();
};
