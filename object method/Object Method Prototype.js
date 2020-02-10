<!DOCTYPE html>
<html>
<head>
<title>Object Method Prototype</title>
</head>

<body>
<script>

function Plan(name, price, space, transfer, pages, discountMonths) {
  this.name = name; 
  this.price = price;
  this.space = space;
  this.transfer = transfer;
  this.pages = pages;
  this.discountMonths = discountMonths;
  
}

Plan.prototype.annCalc = function(percentIfDisc) {
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++) {
      if (this.discountMonths[i] === thisMo) {
	    bestPrice = this.price * percentIfDisc;
	    break;
	  }
    }
    return bestPrice * 12;
  };
  
Plan.prototype.cancellable = true; 

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);
var annualPrice1 = plan1.annCalc(.85);
var annualPrice2 = plan2.annCalc(.85);
var annualPrice3 = plan3.annCalc(.85);
//plan1.prototype.cancellable = false;

var gotProperty = "price" in plan1;
var gotNotProperty = "location" in plan1;
var isOwnedProperty = plan2.hasOwnProperty("ocation");

var listProperties = [];
for (var prop in plan1) {
  listProperties.push(prop);
}

var listOwnProperties = [];
for (var prop in plan1) {
  if (plan1.hasOwnProperty(prop)) {
    listOwnProperties.push(prop);
  }
}

alert("annualPrice1: " + "$" + annualPrice1 + "   annualPrice2: " + "$" + annualPrice2 + "   annualPrice3: " + "$" + annualPrice3);
alert(plan2.cancellable);
alert(plan1.cancellable);
alert(gotProperty);
alert(gotNotProperty);
alert(listProperties);
alert(listOwnProperties);
alert(isOwnedProperty);


</script>

</body>
</html>