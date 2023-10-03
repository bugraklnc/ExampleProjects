let price = "0"  //buradaki eşittir tanımlama yapmak için kullandığımız bir operatör.
let user = "Buğra"
// == Eşitse
console.log ("== :", price == 1)
console.log ("== :", price == 100)

// === Hem değeri hem de türü eşitse
console.log ("=== :", price === 1)
console.log ("=== :", price === 100) //sonuç "false" değeri verdi demekki "price" bilgisi bizim istediğimiz bi bilgi değilmiş.

// != Eşit Değilse
console.log("!= : ", user != "misafir") //user değişkeni eğer "misafir" ise "false" değilse "true". //user değişkenine "Buğra" yazdığımızda ise bu artık misafir değil sonucunu alırız.

// < Küçükse
console.log ("price < 100 :", price < 100)
//console.log ("price < :", price < 1000) //price değişkeni 1000'den küçükse ekrana "true" yazdırır.

// <= Küçük veya eşitse
console.log ("price <= 100 :", price <= 100)

// > Büyükse
console.log ("price > 200 :", price > 200)

// >= Büyük ve eşitse
console.log ("price >= 100 :", price >= 100)

// &&  ve
price = 0
console.log (price > 0 && user != "guest")
// || veya

// ! değil (tersi)