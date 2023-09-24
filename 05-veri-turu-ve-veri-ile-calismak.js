//veri turunu ogrenmek typeof:
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log( //konsol üzerinde değerin "Number" olduğunu söylüyor.
    "price: ",
    typeof(price)
)

console.log( //konsol üzerinde değerin "String" olduğunu söylüyor.
    "stringPrice: ",
    typeof(stringPrice)
)
console.log( //konsol üzerinde değerin "Boolean" olduğunu söylüyor.
    "hasPassword: ",
    typeof(hasPassword)
) 
//"typeof" dedikten sonra "typeof("11")" şuan da bu komut "String" cevabını verir.
//"typeof("11") === "string" komutu girilnce ise cevabı "true" olarak verir.



//string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11"
console.log("number1: ",parseInt(number1))