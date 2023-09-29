let greeting = document.querySelector ("#greeting") //querySelector ile id'si "greeting" olan diziyi seçtik
greeting.classList.add("text-primary") //greeting'in class list'ne ekleme yapmak için kullanılır.
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") //bu şekilde virgül koyarak birden fazla class eklenebilir.

greeting.classList.remove("title", "second-class", "third-class") //bu şekilde ise virgül koyarak birden fazla class silinebilir.

console.log(greeting.classList)