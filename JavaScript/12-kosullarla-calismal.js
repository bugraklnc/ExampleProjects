let username = prompt("Kullanıcı Adınzı Giriniz : ")
//eger kullanici bilgisi varsa ekrana ismini yazdir
//eger (username.length > 0) {console.log(username)} degilse {console.log ("bilgi yok")}
//if (username.length > 0) {console.log(username)} else {console.log ("bilgi yok")}

if (username.length > 0){  //if'de koşullar parantez içerisine alınır süslü parantez içerisine ise ne yapılacağı yazılır.
    console.log(`Kullanici Bilginiz ${username}`)
}
else { //eğer kutu boş bırakılırsa yani bişey yazılmazsa ekrana "Bilgi yok" yazacaktır.
    console.log ("Bilgi yok")
}