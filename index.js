// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Open the Console</h1>`;

// Shopping List

var shoppinglist = [
  ['Milk', 2],
  ['Cornflaxes', 1],
  ['Meat (1kg)', 2],
  ['Tomatoes (1kg)', 2],
  ['Watermelons', 2],
  ['Eggs', 25],
  [('Chicken 65 masala packet (100g)', 10)],
  ['Rice (1kg)', 1]
];

var wear = 'T-Shirt';

function Outfit() {
  var wear = 'sweater';

  return wear;
}

console.log(Outfit());
console.log(wear);

function number(num) {
  return num * 5;
}
console.log(number(12));

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

console.log(changed);
