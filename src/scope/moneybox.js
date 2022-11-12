/* function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins} pesos`);
}

moneyBox(15); */

function moneyBox() {
    let saveCoins = 0;
    function addCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins} pesos`);
    }
    return addCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);