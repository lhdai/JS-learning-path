const exchangeRate = 23208;
let currency1 = "vnd"
let currency = prompt ("Pls Choose the currency you have, VND or USD")

function checkandback(){
    let amount = prompt ("How much?");
    if(isNaN(amount)===false){
        let hereYourNumber = vndToUsd(amount);
        console.log("Your money is equals ",
        formatCurrency(hereYourNumber))
        
    }else{
        alert("Please enter number only");
        checkandback()
    }   
}
checkandback();
function vndToUsd (amount){  
    if (currency === currency1){
        return (amount / exchangeRate)
    }else{
        return (amount * exchangeRate)
    }
}

function formatCurrency(hereYourNumber) {
    if(currency === currency1){
    const formatter = new Intl.NumberFormat('en-US', {
        currency: "USD",
        style: "currency"});
      return formatter.format(hereYourNumber);
    }else{
    const formatter = new Intl.NumberFormat('en-US', {
        currency: "VND",
        style: "currency"});
      return formatter.format(hereYourNumber);
    }   
  }

  








