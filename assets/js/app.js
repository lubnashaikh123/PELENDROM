// alert("hello----------");

let cl=console.log;
// race car
//madam

//srting
//reverse string
//string === reverse string ? given string is palindrome :given string is not palindrome

function isplindrome(str){
    //cl(str.split)("").reverse().join("")
    let givenStr = str.toLowerCase().replace(/[\W_]/g,"")
    let revStr = givenStr.toLowerCase().split("").reverse().join("");
    return (givenStr === revStr) ? `The GIven string is palindrome` : `The Given string is not a palindrome`    
}
//madam
function isplindrome(str){
    let givenStr = str.toLowerCase().replace(/[\W_]/g,"");
    let revStr = "" ;
for(let i= givenStr.length - 1; i >= 0;i--){
revStr +=givenStr[i]
}
return(givenStr === revStr) ? `The GIven string is palindrome` : `The Given string is not a palindrome`
}
  let str ="madam";
//   let reduceStr = str.split("").reduce((accu,nextval)=>{

//   })
// cl(Array.from(str));
cl([...str])
let reduceStr=Array.from(str).reduce((accu,nextval)=>{
})
// let reduceStr=[...str].reduce((accu,nextval)=>{
    
// })
cl(isplindrome("Race car"));
cl(isplindrome("Race-car"));
cl(isplindrome("mAdaM"));
