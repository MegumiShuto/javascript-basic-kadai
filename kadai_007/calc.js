let num = Math.floor(Math.random()*100) + 1;

//値num出力（確認用）
console.log(num)

//値numが3と5の倍数の場合
if (num % 3 === 0 && num % 5 ===0) {
    console.log('3と5の倍数です')
}

//値numが3の倍数の場合
else if (num % 3 === 0) {
    console.log('3の倍数です')
}

//値numが5の倍数の場合
else if (num % 5 === 0) {
    console.log('5の倍数です') 
}

