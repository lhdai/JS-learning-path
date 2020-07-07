const exchangeRate = {
    vnd: {
      usd: 0.000043,
      krw: 0.051,
      eur: 0.000039,
      vnd: 1
    },
    usd: {
      usd: 1,
      krw: 1193.27,
      eur: 0.9,
      vnd: 23235.5
    },
    krw: {
      usd: 0.00084,
      krw: 1,
      eur: 0.00075,
      vnd: 19.47
    }
  };
  
  function getConversionRate(from, to) {
    return exchangeRate[from][to];
  }

function doConverse (){
    let amountInput = document.getElementById('amount')
    let amount = amountInput.value
    console.log(amount)
    let toCurrency = document.getElementById("fromToList")
    let to = toCurrency.value
    console.log(to)
    let fromCurrency = document.getElementById("fromCurList")
    let from = fromCurrency.value
    console.log(from)
    result = parseInt((amount * getConversionRate(from, to)).toFixed(2))
    document.getElementById("result").innerHTML = `${formatCurrency(to, result)}`
    
    let listMenhGia = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000]
    let i
    let du = result;
    let nguyen = 0;
    let html =``
    for  (i = 0; i < listMenhGia.length; i++){
      nguyen = parseInt (du/listMenhGia[i])
      du = du%listMenhGia[i];
      html += `<p>${listMenhGia[i]} - number of unit: ${nguyen}</p>`
    }
  
    document.getElementById('demo').innerHTML = html

}  


function formatCurrency(type,result) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(result);
  }   






  








