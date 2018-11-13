var areYouAUnicorn = {}
    areYouAUnicorn.validateHorseshoe = function(howManyHorseShoes){
        if(howManyHorseShoes === 4){
            return true;
        }
        else{
            return false;
        }
    }

    areYouAUnicorn.validateName = function(word){
        var re = /[a-z,A-Z]+/;
        if(re.test(word)){
            return true;
        }
        else{
            return false;
        }
    }

    areYouAUnicorn.validateHorn = function(isHornSparkly){
        var spark = password.length;
        if(spark === "very"){
            return "You are a rare unicorn";
        }
        else if(spark === "only in sunlight"){
            return "You are an average joe unicorn";
        }
        else{
            return "You are not a unicorn!";
        }  
    }

    areYouAUnicorn.checkUnicornPhoneNumber = function(num){
        var re = /^05+[1-9]+(?=-)+\d{7}$/;
        if(re.test(num)){
            return true;
        }
        else{
            return false;
        }
    }

    areYouAUnicorn.validateUnicornAge = function(age){
        var re = /[0-99]+/;
        if(re.test(age)){
            return true;
        }
        else{
            return false;
        }
    }

    areYouAUnicorn.consoleACuteUnicorn = function(){
        window.location.href = 'https://gph.is/189r81H';
    }

