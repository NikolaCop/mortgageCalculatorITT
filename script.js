function calculate() {
    
    const amount = document.querySelector('#amount').value
    const interest = document.querySelector('#interest').value
    const term = document.querySelector('#term').value
    
    if (!amount || !interest || !term) return { balance: 0, payment: 0 };
    
    const r = (interest * 0.01) / 12;
    const n = term * 12;
    const p = amount;
    const x = (r * p * n)

    const balance = (x / (1 - Math.pow(1 + r, -n))).toFixed(2);
    const payment = (balance / n).toFixed(2);



    document.querySelector('#payment').innerHTML = `<b>Monthly Payment</b> $${payment}`
    document.querySelector('#balance').innerHTML = `<b>Total Balance</b> $${balance}`

}

//input
function test(amount, interest, term, balance, payment) {
    if amount 
}