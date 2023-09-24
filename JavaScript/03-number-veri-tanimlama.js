 //number veri türü tanimlamak:
 let price = 100
 let tax = 0.18
 let priceTax = price * tax
 let total = price + prieTax
 console.log(
    "Fiyat:", price,
    "KDV Oranı:", tax,
    "kDV Tutarı:", priceTax,
    "Fiyat:, total"
 )

// arttirma ve azaltma islemleri:
let counter = 320
counter = counter + 1 //bir arttırır ama uzun yöntem
counter += 1;  //bir arttırır
counter ++; // bir arttırır
console.log(counter) //konsol'da göstermesini sağlar

counter --; //bir eksiltir
counter -=1; //bir eksiltir
console.log(counter) //konsol'da göstermesini sağlar

counter *= 10; //elindeki bilgiyi çarpar
console.log(counter) //konsol'da göstermesini sağlar

counter /= 2; //elindeki bilgiyi böler
console.log(counter) //konsol'da göstermesini sağlar

//islem önceligi:

console.log(2 + 3 * 10) //ilk çarpma işlemini yaptığı için sonuç 32 çıkacaktır ama biz cevabı 50 istiyoruz o zaman aşağıdaki örneğe bakalım.
console.log((2 + 3) * 10) //bu sefer cevap 50 çıkacaktır.

//mod (kalan) alma %:
//sayi tek mi cift mi ??
console.log(14 % 2) //eğer sonuç 0 ise çift, 1 ise tek

//8 urun alan koliye tum ürünler sigiyor mu?
console.log("Kalan Koli : ", 18 % 8) 

//üs alma **:
comsole.log(2 * 2 * 2 * 2) //uzun yöntem
console.log(2 ** 4) //iki tane "**" işareti ile üs alma işlemi kolaylaşır
