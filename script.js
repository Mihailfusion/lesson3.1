let str = ("урок-3 - был слишком легким");
str = str[0].toUpperCase() + str.substring(1);
document.write(str);
str = str.split('-').join(' ');
document.write("<br>" + str);
console.log(str);
str = str.split(" ");
let res = str[6].replace('легким', 'легкоо');
console.log(res);
document.write("<br>" + res + "<br>");



let arr = [20, 33, 1, "Человек", 2, 3];
let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (typeof (arr[i]) === "number") {            
            count = count + Math.pow(arr[i], 3);
          
    }
} 
count = Math.sqrt(count);
            document.write(count);
            console.log(count);




let q = prompt("Какой-то текст");
function lorem(arg) {
    if (typeof arg === "string") {
        arg.trim();
        if (arg.length > 50) {
            arg = arg.substr(0, 50) + '...';
        }
        // arg = arg.substr(0, 50) + '...';
        document.write("<br><br>" + arg);
    } else {
        alert("Введите текст");
    }
    
    
}
lorem(q);
