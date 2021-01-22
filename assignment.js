    function kilometerToMeter(kilo) {
        
        if(kilo < 0){
           return "Please enter positive number";
        }
        else
        var meter = kilo * 1000;  // 1 kilometer = 1000 meter
        return meter;     
    }
     var result = kilometerToMeter(22); //test kilometerToMete function
     console.log(result);

    //BudgetCalculator

     function budgetCalculator(ghori,phone,laptop){

        var ghoriDam = ghori * 50;
        var phoneDam = phone * 100;
        var laptopDam = laptop * 500;
        return ghoriDam+phoneDam+laptopDam; 
     }

     var result2 = budgetCalculator(2,4,2); //test budgetCalculator
     console.log(result2);

    //hotelCost

    function hotelCost(day){
        if( day < 0){
            return "Please enter positive number";
        }
        else if(day <= 10){
           var price = day * 100;
            return price;
        }
        else if(day <= 20){
            var price_1 = 10 * 100;
            var extra_day = day - 10;
            var price_2 = extra_day * 80;
            var price = price_1 + price_2;
            return price;
        }
        else{
            var price_1 = 10 * 100;
            var price_2 = 10 * 80;
            var extra_day = day - 20;
            var price_3 = extra_day * 50;
            var price = price_1 + price_2 + price_3;
            return price;
        } 
    }

    var totalPrice = hotelCost(21); // test hotelCost function
    console.log(totalPrice);

    //megaFriend

    function megaFriend(listOfName){
        var maxLength = 0;
        var maxName = '';

        for(var i = 0; i < listOfName.length; i++){
            var name = listOfName[i];
            if(name.length > maxLength){
                maxLength = name.length;
                maxName = name;
            }
        }
        return maxName;
    }

    var arrayName = ['Jamal','Kamal','Soniya','NiloyBhai']; //check megaFriend function
    var maxNameLength = megaFriend(arrayName);
    console.log(maxNameLength);
