// 0 ve 1'i anlamak:
let isActive = false // 0 alan bir değer
isActive = true //1 alan bir değer yani "Açık - Kapalı" veya "Var - Yok" gibi bütün bilgileri boolean ile sağlayabiliyoruz.
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") //Boolean'ın içerisine 11 gönderirsek True diyor.
Boolean("0") //True
Boolean("") //içerisi boş olduğu için False.

userName = "user"
console.log("User Name: ",Boolean(userName))

//0, -0, null, false, NaN, undefined, (""):
Boolean(0) //false
Boolean(-0) //false
Boolean(-0.1) //true
Boolean(0 === 0) //true
