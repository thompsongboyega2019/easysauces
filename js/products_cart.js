function productCal() {
    var productPrice = document.getElementById("productPrice").innerHTML;
    var newPrice = parseInt(productPrice);
    var productQty = document.getElementById("hotqty").value;
    var total = newPrice * productQty;
    var totalAmount = document.getElementById("totalAmount").innerHTML = total;
    /**var x = 2 + 2;
    var totalAmount = document.getElementById("totalAmount").innerHTML = x;**/
};