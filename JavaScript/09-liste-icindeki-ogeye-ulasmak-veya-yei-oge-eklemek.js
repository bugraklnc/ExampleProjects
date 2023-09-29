let item = document.querySelector("ul#list>li:last-child") //bu komut "ul" komutunun içerisndeki bilgileri ekrana yazar.
console.log(item) //console üzerinde "document.querySelector("ul#list>li:first-child").innerText" yazılır ise "ul" içerisindeki ilk sıradaki bilgiyi bize söyler.

let lastChild = document.querySelector("ul#list>li:last-child") //bu komut ise "ul" içerisindeki son sıradaki bilgiyi değiştirir.
lastChild.innerHTML = "Son Bilgi Değişti." 

let firstChild = document.querySelector("ul#list>li:first-child") //bu komut ise "ul" içerisindeki ilk sıradaki bilgiyi değiştirir. 
firstChild.innerHTML = "İlk Bilgi Değişti."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi Oluşturduğumuz Öğe." //sadece bu komutu yazarsak ekrana bişey yazdıramayız.

//ulDOM.append(liDOM) //"append" komutu ile ekrana yazdırabiliriz.

ulDOM.prepend(liDOM)