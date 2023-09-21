// ********* let ve const ile Degisken Tanimlama  ********

// var ile degisken tanımlamak:
var serverNAME ="calismakampi.com"

console.log("calismakampi.com") //Yanlış kullanım. Eğer adres değişikliği olursa sürekli aramak yerine aşağıdaki örnekteki gibi yapılabilir.

console.log(serverName) //Doğru kullanım. serverNAME değiştikçe buradaki "Name'de değşir".
// let ile degiskeni bos tanimlamak:
let serverNAME;
console.log(serverNAME) //Console'de herhangi bi değer alınamaz "serverNAME" değişkeninde herhangi bir değer bulunmamakta.

//let ile degiskene bilgi atamak:
 serverNAME = "https://calismakampi.com" //Bu sefer Console'den değer alabilirsiniz "serverNAME" değişkeninde değer bulunmakta.
 console.log(serverNAME)

 //let ile degiskene bilgi atayarak tanımlamak:
 let password = "1234";
 console.log(password)

 //degisken atamasi yapmadan önce kullanmaya calismak:
/*HATALI KULLANIM
 console.log(fullName)
let fullName = "Mustafa Buğra Kılınç"; //bu şekilde yazılırsa yüklenildiği yerden önce kullanılmaya çalışılmış diye hata verir. 

console.log(fullName2)
var fullName2 = "Mustafa Buğra Kılınç"; //bu şekilde yazılırsa undefined hatası verir.
*/
let fullName = "Mustafa Buğra Kılınç";
console.log (fullName) //DOĞRU KULLANIM

//birlestirme veya ekleme islemi:
fullName + "Yeni Eklenen Bilgi" //bu şekilde yazılırsa eklenmez.
console.log(fullName + "Test Bilgisi") //eğer tırnak açtıktan sonra boşluk koyulmaz ise cümle bitişik halde olur.


//const ile degiskeni bos tanimlamaya calismak:


//const ile degisken tanimlamak:
