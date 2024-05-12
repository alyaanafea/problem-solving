//1- even odd num
// method a 
// function evenOrOdd(num){
//     if (num %2===0)return "even"
//     return "odd"
// }

// method b
// function evenOrOdd(num){
//     return num%2===0 ? "even":"odd"
// }
// console.log(evenOrOdd(5));
// console.log(evenOrOdd(4));




// 2-sum of positives of an array
// method a
// function sumOfPos(arr){
//     var sum =0;
//         for(let i = 0; i<arr.length; i++ ){
//             if (arr[i]>0){
//                 sum +=arr[i]
//             }
//         }
//         return sum;
// }

// method b
// function sumOfPos (arr){
//     var sum = 0;
//     arr.forEach((ele) => {
//         if(ele>0)sum+=ele;
//     }
//      );
//      return sum;
// }

// method c
// function sumOfPos(arr){
//    return arr.filter(x=>x>0).reduce((acc,val)=>acc+val)
// }
// console.log(sumOfPos([1,2,3,-1,2,-3]));



//3- sum without max or min val
// method a
// function sum (arr){
// return arr.sort((a,b)=>a-b).slice(1,-1).reduce((acc,val)=>acc+val);
// }
// console.log(sum([3,4,5,3,9,5]));

// method b 
// function sum (arr){
//     sum=0;
//     var sorted = arr.sort((a,b)=>b-a)
//     for (let i=1;i<sorted.length-1; i++){
//         sum+=sorted[i];
//     }
//     return sum;
// }
// console.log(sum([3,4,5,3,9,5]));



// 4-repeat a string n times 
// function repeat (str,n){
//     for(let i = 0 ;i<n; i++){
//         console.log(str);
//     }
// }
// repeat("hello",5) not accurate

// method a 
// function repeat (s,n){
//    var str = "";
//    for(let i = 0 ;i<n; i++){
//     str += s
//    }
//    return str
// }

// method b
// function repeat (str,n){
//     return str.repeat(n);
// }
// console.log(repeat("hello ",5))


// 5- ocnvert number to reversed array of digets

// function numToDigets (num){
//   var str=  String(num).split("").reverse().map(n=>Number(n));
// return str;
// }
// console.log(numToDigets(123));


// 6-count sheeps

// function countSheeps(arr){
// var counter = 0
// // for(let i=0; i<arr.length; i++){
// //     if(arr[i]==="true")counter++
// // }

// orrrrr 
// arr.map(n=>{if (n==="true")counter++})
// return counter
// }
// console.log(countSheeps(["true","true",'false',"true","true",'false',"true","true"]));



// 7-find the opposite of a given num 
// function opp(num){
//     return -num;
// }
// console.log(opp(-2));


// 8- return any number as negative
// function negNum(num){
//     return num>0? -num:num
// }
// console.log(negNum(-2));

// 10-find the needle
// method a 
// function findNeedle (arr){
//     for(let i=0;i<arr.length; i++){
//         if (arr[i]==="neddle"){
//             return "the neddle in the position of "+i;
//         }
//     }
// }
// console.log(findNeedle(["fvd","fewe","neddle","ewqwl"]));

// method b 
// function findNeedle(arr){
//     return "the neddle in the position of "+ arr.indexOf("neddle")
// }
// console.log(findNeedle(["fvd","fewe","neddle","ewqwl"]));

// 11-sum of positive count of negative
// method a 
// function sumCount(arr){
//     var sum = 0;
//     var counter = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>0){sum+=arr[i]}
//    else counter++
// }
// return `the sum of positives is ${sum} , the coun of negatives is ${counter}`
// }
// 

// method b sum negatives count positive 
// function sumCount(arr){
//     var sum = arr.filter(a=>a<0).reduce((acc,ass)=>acc+ass)
//     var counter = arr.filter(a=>a>0).length
//     return [sum,counter]
// }

// console.log(sumCount([2,3,4,5,-1,2,-7,-2,6,-1]));

// 12- double char 
// function doubleChar(str){

// return str.split("").map(a=>a+a).join("");

// orrr 

// return str.split("").map(a=>a.repeat(2)).join("");


// }
// console.log(doubleChar("alyaa"));

//13 mathematecal operathions
// function mathoperation(sympol,x,y){
//     return eval(x +sympol+ y) ;
// }
// console.log(mathoperation("+",5,10))
// console.log(mathoperation("*",5,5));
// console.log(mathoperation("-",5,10));
// console.log(mathoperation("/",5,10))



//14 the square root or not to square root


// function squrt(arr) {
// var newarr = [];
// for(let ele of arr){
//     if (Number.isInteger(Math.sqrt(ele))){ ele = Math.sqrt(ele)}
//     else{ ele = ele*ele};
//     newarr.push(ele);
// }
// return newarr
// orrrrrr 
//     return arr.map(ele => Number.isInteger(Math.sqrt(ele)) ? Math.sqrt(ele) : ele * ele)
// }
// console.log(squrt([2, 4, 3, 7, 9]));


// 15-count by x 
// function countByx(jump,num){
// var arr =[]
// for(let i = jump; i<=num*jump ; i+=jump){
//     arr.push(i)
// }
// return arr
// orrr 
// return Array.from(Array(num+1).keys()).slice(1).map(ele=>ele*jump)
// }
// console.log(countByx(2,5));
// console.log(countByx(1,10));


//16- remove string spaces
// function remove(str){
//  return   str.split(" ").join("")
// }
// console.log(remove("fgfg hgffg sld"));


//17- return the opposite
// function opp(arr){
//     return arr.map(ele=>-ele)
// }
// console.log(opp([1,-2,3,-4,-5,6]));

// 18 -boolean to string 

// function bolToStr(boolean){

// if(boolean==true)return "yes"
// if(boolean==false)return"no"
//    orrr 
//    return boolean? "yes":"no"
// }
// console.log(bolToStr(false));
// console.log(bolToStr(true));


// 19-reverse the words 
// function reverse(words){
// return words.split(" ").reverse().join(" ")
// }
// console.log(reverse("bfgdv  fgd fr fgr"));


// 20- keep hyderated
// function drink(time){
// return Math.floor(time/2)
// }
// console.log(drink(7.3));



// 21- convert a number to a string 
// method a 

// function conv(num){
//     return String(num);
// }
// console.log(typeof(conv(1)))

// method b

// function conv(num){
//     return num.toString();
// orrr 
// return `${num}`

// }
//  console.log(typeof(conv(1)))

// 22- average of a given array 
// function calcAvg(arr){
// var avg = 0;
// for(let i = 0 ; i<arr.length; i++){
//     avg+=arr[i]
// }
// return avg/arr.length

// }

// orr 
// function calcAvg(arr){
//     if (arr.length===0)return 0
// return  arr.reduce((acc,val)=>acc+=val)/arr.length
// }
// console.log(calcAvg([0,1,2,3,4]));
// console.log(calcAvg([]));


// 23-convert a string to a number

// function toNum(str){
// return Number(str);
// return +str
// }
// console.log(toNum("123"));



// 24- count the monkies

// function count (num){
//     var arr = []
//     for(let i = 1 ; i < num+1; i++){
// arr.push(i)
//     }
//     return arr
// }
// console.log(count(5));




// 25-hello with user's language
// function hello(lang){
//     var langs={
//         english: "welcome",
//         frensh: "fuckyou",
//         german: "morgen",
//         turkish: "gunayden",
//         koean: "anyoung",
//         arabic: "alslamalykom"
//     }
//     if(langs.hasOwnProperty(lang)){
//         return langs[lang];
//     }else return langs["english"]
// }
// console.log(hello("arabic")); 
// console.log(hello("armainian")); 


//26- array of words to sentence 

// function wordsToSecntence(words){
//    return words.reduce((acc,val)=>acc+" "+val) 

// orrr 
// return words.join(" ")
// }
// console.log(wordsToSecntence(["hello","i","am","alyaa"]));



// 27-swith to word
// function numToWord(num) {
//     switch (num) {
//         case 0:
//             return "zero";
//             break;
//         case 1:
//             return "one";
//             break;
//         case 2:
//             return "two";
//             break;
//         case 3:
//             return "three";
//             break;
//         case 4:
//             return "four";
//             break;
//         case 5:
//             return "five";
//             break;
//         case 6:
//             return "six";
//             break;
//         case 7:
//             return "seven";
//             break;
//         case 8:
//             return "eight";
//             break;
//         case 9:
//             return "nine";
//             break;
//             default:return"wrong number"
//     }
// }
// console.log(numToWord(0));
// console.log(numToWord(10));



//27- do i get bounus
// function bounus(salary,bouns){
    // if (bouns==true)return salary*10;
    // return salary
    // orrrr 
// }
// console.log(bounus(12,true));



// remove علامة التعجب
// function remo(str){
// return str.replace(/!$/,"")  
// }
// console.log(remo("decd!!"));
// console.log(remo("!decd"));

//30 are you playing bango??

// function bango (name){
    // if(name.startsWith("r")||name.startsWith("R"))return "IAM PLAYING BANGO"
    // else return "i am not playing"

    // ORRR 
//     if(name.charAt(0)==="r"||name.charAt(0)==="R")return "IAM PLAYING BANGO"
//     else return "i am not playing"
// ORRR 
//     if(name[0]==="r"||name[0]==="R")return "IAM PLAYING BANGO"
//     else return "i am not playing"
// return /^r/i.test(name)?"IAM PLAYING BANGO": "i am not playing"
// }
// console.log(bango("roma"));
// console.log(bango("Roma"));
// console.log(bango("oma"));


// 31- remove every second ele from array
// function removee(arr){
//     var newarr = []
// for(let i =0; i<arr.length; i+=2){
// newarr.push(arr[i]);
// }
// return newarr;
// orrr 
// return arr.filter((a,i)=>i%2===0)
// }
// console.log(removee([1,2,3,4,5,6]));


// 33-renting a car 
// function rent(numOfDays){
//     // var total = 0;
//     if(numOfDays<3)return "total =" +numOfDays*40 +"$"
//     else if(numOfDays>=7){
//        return "total =" +eval(numOfDays*40 - 50)+"$";
//     }else return "total = "+eval(numOfDays*40 - 20)+ "$";

// }
// console.log(rent(8));
// console.log(rent(2));
// console.log(rent(4));


// 34- exclosive xor logecal operator

// function xor(a,b)
// {
//  return   a===b?false:true
// }
// console.log(xor(true,true));
// console.log(xor(true,false));


// 35- consecutive

// function con (arr){
//     for(let i =1; i<arr.length; i++){
//         if(arr[i]-1 !==arr[i-1]) return arr[i]
//     }return null
// }
// console.log(con([1,2,4]));


// 36-volume of cubic
// class kata {
//  static volume (w,h,l){
//     return w*h*l
// }}
// console.log(kata.volume(10,20,5));


// 37-to fixwd
// function tofixed(num){
//     // return Number(num.toFixed(2))
//     return Math.round(num*100)/100     explaination  num*100=434.56=>round=>435=>/100=>4.35
// }
// console.log(tofixed(4.3456)); 


// 38-dolar and sints

// function dolar(num){
//     return `$ ${num.toFixed(2)}`;
// }
// console.log(dolar(4.22));

// 39- find the position in alphabit

// function find (char){
//     var str= "abcdefghijklmnopqrstuvwxyz";
//     let arr = [...str]
    // console.log(arr);
    // for(let i=0; i<arr.length; i++){
    //     if (char===arr[i])return i+1
    // }
    // orrr 
//     return arr.indexOf(char)+1
// }
// console.log(find("c")); 


// 40-are they in love??
// function inlove(flower1,flower2){
//   return flower1%2 !== flower2%2
// }
// console.log(inlove(24,54));

//no zeros for heros

//41- function noZeros (num){
//     var strNum =String(num)
//    while (strNum.lastIndexOf(0)===strNum.length-1)
// {
//     while (strNum.endsWith(0))
//     {
//     strNum = strNum.slice(0,strNum.length-1)
// }
    
// return Number(strNum) ;
//  }

// console.log(noZeros(1234000));


// 42- mean rounded down
// function mean (arr){
// return Math.floor(arr.reduce((total,val)=>total+val)/arr.length)
// }
// console.log(mean([1,2,3,4,5,7]));


//43-remove the vouls

// function noVouls(str){
//   let  mystr=[...str]
//   let vouls = ["a","i","u","e","o"]

// }

// console.log(noVouls("asdfoce"));
// filter 
// array.every(item => item !== elementToCheck)













