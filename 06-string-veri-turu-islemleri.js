let email = "mustafabugrakilinc1@gmail.com"
let firstName = "Buğra"
let lastName = "KILINÇ"

//string karakter sayisi --> length
console.log (email.length) //email adresinin kaç karakter olduğunu gösterir.

//ilk karakteri bulmak --> [0]: //isim'in ilk harfinin hangisi olduğunu gösterir.
console.log(firstName[0]) //"0" yazmamızın sebebi o karakterin ne olduğunu bulmak içindir.
console.log(firstName.charAt[0])

//buyuk harf / kucuk harf:
firstName = firstName.toUpperCase() //bütün harfleri büyük harf yapar.
console.log(firstName)

firstName = firstName.toLowerCase() //bütün harfleri küçük harf yapar.
console.log(firstName)

//String icimnde istediğimiz bilgisi aramak ve yerini bulmak -->search:
console.log(email.search("@")) //emailde kaçıncı karakter olduğunu bize söyler.
console.log(email(15)) //emailde belirttiğimiz yerde hangi karakterin olduğunu söyler.
//eger console'a "email.search("asjdada") yazılırsa ve bu yazılan yazı emailde yoksa değer hep "-1"dir

email.search('olmayan') //-1

//belli bir yere kadar al --> slice:
email.slice(0,10) //eger yazılan "0,10" sayıları '1' den başlarsa en baştaki harfi almaz o yüzden '0'dan başlamamız lazım.