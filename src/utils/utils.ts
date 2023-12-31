const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

export const currencyFormat: (money:number) => string = (money:number) => formatter.format(money);