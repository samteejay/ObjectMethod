<!DOCTYPE html>
<html>
<head>
<title>Object Method</title>
</head>

<body>
<script>

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  pages: 10,
  discountMonths: [6, 7],
  annCalc: function(percentIfDisc) {
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
  }
};

var annualPrice = plan1.annCalc(.85);
alert("$" + annualPrice);

</script>

</body>
</html>