let userName =prompt ("Kullanici Adınız :")
let yas = prompt ("Yaşınız :")
let info = document.querySelector("#info")

//Console üzerine yazdırmamıza yarayan kod.

if (userName && yas >= 18){ //eğer yaşınız 18 üstü ise aşağıdaki değeri konsol'a yazdırır.
console.log ("Ehliyet Alabilirsiniz.")
}
else if (!userName) {
    console.log ("Kullanıcı Adınızı Yok.")
}
else if ( !(yas >= 18) ){
    console.log ("Yaş Bilginiz Yok veya 18 Yaşından Küçüksünüz.")
}

//Ekrana yazdırmamıza yarayan kod.

if (userName && yas >= 18){
    info.innerHTML = "Ehliyet Alabilirsiniz."
}
else if (!userName) {
    info.innerHTML = "Kullanıcı Adınızı Yok."
}
else if ( !(yas >= 18) ){
    info.innerHTML = "Yaş Bilginiz Yok veya 18 Yaşından Küçüksünüz."
}