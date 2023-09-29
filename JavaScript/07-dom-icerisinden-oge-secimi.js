let title1 = document.getElementsByTagName('h2')
console.log(title) //console üzerinden içindeki bilgiye ulaşmak için "title.title" ile yazılınca geliyor. Fakat zor bir yöntem bunu yapmak için İD bilgisinide bilimeniz lazım.

let h2 = document.getElementsByTagName('h2')
console.log(h2.title.innerHTML)

//let title = document.getElementById('title') //"title" direk yazılınca ulaşabilindi. içerisindeki bilgiye ulaşıldıktan sonra innerHTML'ine direk ulaşılabilir. O da "console.log(title.innerHTML)" şeklinde yazılarak.
//console.log(title)

//let title= document.getElementById('title') //bu şekilde yazılınca ise hem sayfa üzerinde hem console üzerinde "deneme" yazar.
//console.log(title.innerHTML = "deneme")

let title = document.getElementById("title")
title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("ul#list>il>a") //querySelecter 1 adet seçim yapar. 1'den fazla olsada eleman 1 tane seçer. querySelectorAll ise hepsini seçer.
link.innerHTML = "link bilgisi degisti" //link içersindeki yazının değişmesi.
console.log(link.innerHTML) //içerisindeki innerHTML bilgisine console üzerinden ulaşılır.

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degisti" //eger tırnak içindeki cümle vs. boşluk koyulmaz ise yazı ekranda bitişik boşluk koymadan çıkar.
link.style.color = "red"
link.classList.add ('btn')