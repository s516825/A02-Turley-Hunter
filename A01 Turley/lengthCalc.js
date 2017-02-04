var App = {
    launch:function(){
        App.getMiles();
        App.getPrice();
        App.getMPG();
        App.getTotal();
    },
    getMiles: function(){
        var miles = $('miles')[0];
    },
    getPrice: function(){
        var price = $('price')[0];
    },
    getMPG: function(){
        var mpg = $('mpg')[0];
    },
    calcGallons: function(miles, mpg){
        var gallons = miles/mpg;
        return gallons;
    },
    calcCost: function(gallons, price){
        var cost= gallons*price;
        return cost;
    },
    errorCheck: function(gallons, cost){
        if(isNaN(gallons)||isNan(cost)){
            eBoo == false;
    }
        else{
            eBoo == true;
         }
         return eBoo;
    },
    getTotal: function(){
        var gallons1 = App.calcGallons();
        var cost1 = App.calcCost();
        var eCheck = App.errorCheck();
        /*if (eCheck == true){
            document.getElementById("displayTotal").innerHTML = ("Your trip will use" + gallons1 +" gallons, costing $" + cost1 +".");
        }
        else{
            document.getElementById("displayError").innerHTML = ("Please enter only numbers into correct fields.")
        }

*/
    document.getElementById("displayTotal").innerHTML = ("Your trip will use" + gallons1 +" gallons, costing $" + cost1 +".");

}
}