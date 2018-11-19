var burgers = [];
function MenuItem(item, kCal, price, gl, la) {
    this.itemName = item;
    this.kCalories = kCal;
    this.price = price;
    this.gluten = gl;
    this.lactose = la;
    this.name = function() {
      burgers.push(this);
        return this.itemName + ', ' + this.kCalories + 'kCal, ' + this.price + 'kr';
    };
}
var burger1 = new MenuItem('Hallomiburgaren', '850', '30', false, true);
//console.log( burger1.name() );
var burger2 = new MenuItem('Hipsterburgaren', '1050', '50', true, false);
//console.log( burger2.name() );
var burger3 = new MenuItem('Bao-burgaren', '650', '45', true, false);
//console.log( burger3.name() );
var burger4 = new MenuItem('Syrlig', '700', '40', false, false);
//console.log( burger4.name() );
var burger5 = new MenuItem('Sötis', '1500', '50', true, true);
//console.log( burger5.name() );

for (burger in burgers) {
  console.log(burger);
}
