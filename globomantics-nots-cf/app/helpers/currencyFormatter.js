const currencyFormatter= Intl.NumberFormat("en-us",{
    "style" : "currency",
    "currency" : "USD",
    "maximumFractionDigits" : 2

});

export default currencyFormatter;