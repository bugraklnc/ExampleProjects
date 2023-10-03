//eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadı yaz.
let userName = prompt ("Kullaniıcı Bilginizi Yazınız..")
let info = document.querySelector("#info")

//ternary kullanım:
//koşul ? doğruysa : yanlışsa

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadı :( "}`