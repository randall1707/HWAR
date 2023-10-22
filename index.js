// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// Дано неотрицательное целое число n. Написать функцию, которая на вход принимает данное число и возвращает n-ое число из ряда Фибоначчи

// n -> return
// 0 -> 0
// 1 -> 1
// 2 -> 1
// 3 -> 2
// 4 -> 3
// 10 -> 55
// 16 -> 987
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


function fibonacci(num){
    if(num===0){
        return 0;
    }else if(num===1){
        return 1;
    }else{
        let a=0;
        let b=1;
        let result;

        for(let i=2;i<=num;i+=1){
            result=a+b;
            a=b;
            b=result;
        }
        return result;
    }
}


console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(10));
console.log(fibonacci(16));
