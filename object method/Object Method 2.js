<!DOCTYPE html>
<html>
<head>
<title>Object Method 2</title>
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
  this.annCalc = function(percentIfDisc) {
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
}

var plan1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);
var annualPrice1 = plan1.annCalc(.85);
var annualPrice2 = plan2.annCalc(.85);
var annualPrice3 = plan3.annCalc(.85);
alert("annualPrice1: " + "$" + annualPrice1 + "   annualPrice2: " + "$" + annualPrice2 + "   annualPrice3: " + "$" + annualPrice3);


</script>

</body>
</html>