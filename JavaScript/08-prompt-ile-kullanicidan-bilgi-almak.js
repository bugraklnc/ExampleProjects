let fullName = prompt("lütfen Adınızı Giriniz") //bu şekilde yazılırsa herhangi bi işlem yapılmaz.
console.lpg(fullName) //fakat "console" komutunu yazarsanız bilgiye ulaşabilirsiniz.

let greeting = document.querySelector("#greeting")

greeting.innerHTML = '${greeting.innerHTML} <small style="color:red>${fullName}</small>'