var cleave = new Cleave('.phoneNumber', {
    phone: true,
    phoneRegionCode: 'fr'
});

var cleave = new Cleave('.purchaseDate', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});

var cleave = new Cleave('.cardNumber', {
    creditCard: true
});