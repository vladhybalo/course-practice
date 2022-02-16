
function checkCashRegister(price, cash, cid) {
    let change;
    cash = Math.round((cash - price)*100) / 100;//різниця між ціною і кешем
 
    let arr = [];
    let nominal = new Map([["PENNY",0.01],
    ["NICKEL",0.05],
    ["DIME", 0.10],
    ["QUARTER",0.25],
    ["ONE", 1], 
    ["FIVE", 5],
    ["TEN",10],
    ["TWENTY",20],
    ["ONE HUNDRED",100]]);
 
    for (let i = 0; i < cid.length; i++) {
        let temp = nominal.get(cid[i][0]);
        arr[i] = [temp, Math.round(cid[i][1] / temp)];
    }
 
    let i = arr.length-1;

    while (cash >= 0 && i >= 0) {
        while (cash - arr[i][0] >= 0 && arr[i][1]) {
            console.log(cash);
            cash = cash - arr[i][0];//якшо cash =- arr[i][0] - лажа
            arr[i][1]--;
            console.log(cash);
        }
        i--;
    }
    return (cash == 0) ?  true : false;
    
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.10],
  // ["QUARTER", 4.25],
  // ["ONE", 90.00],
  // ["FIVE", 55.00],
  // ["TEN", 20.00],
  // ["TWENTY", 60.00],
  // ["ONE HUNDRED", 100.00]]
  
  console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
  