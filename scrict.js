var userAge = +prompt('Введите Возраст')
var answer;
if (userAge > 0 && userAge <= 18){
    answer = 'Вы еще молоды. Вам нужно учится'
}else if(userAge > 18 && userAge <= 50){
    answer = 'Вам нужно работать'
}else if(userAge > 50 && userAge <= 59){
    answer = 'Вам скоро на пенсию'
}else if(userAge > 59 && userAge <= 150){
    answer = 'Вы пенсионер'
}else{ answer = 'Что-то пошло не так'
}
alert(answer)



x=parseInt(prompt("Находим Наибольшее Число,Введите Первое Число:")); 
y=parseInt(prompt("Введите Второе Число:")); 
z=parseInt(prompt("Введите Третье Число:"));  

if(x>y&&x>z) alert(x);
if(y>x&&y>z) alert(y);
if(z>y&&z>x) alert(z);

x=parseInt(prompt("Находим Наименьшее Число,Введите  Первое Число:")); 
y=parseInt(prompt("Введите Второе Число:")); 
z=parseInt(prompt("Введите Третье Число:"));  

if(x<y&&x<z) alert(x);
if(y<x&&y<z) alert(y);
if(z<y&&z<x) alert(z);

a=parseInt(prompt("Находим среднее Число,Введите Первое Число:")); 
b=parseInt(prompt("Введите Второе Число:")); 
c=parseInt(prompt("Введите Третье Число:"));  
if((b<a && a<c) || (c<a && a<b)) alert(a);
if((a<b && b<c) || (c<b && b<a)) alert(b);
if((a<c && c<b) || (b<c && c<a)) alert(c);


var userTime = +prompt('Введите Время')
var answer = ''
switch(userTime){
    case 1 : answer = '1 Час Ночи';break
    case 2 : answer = '2 Часа Ночи';break
    case 3 : answer = '3 Часа Ночи';break
    case 4 : answer = '4 Часа Ночи';break
    case 5 : answer = '5 Часов Ночи';break
    case 6 : answer = '6 Часов Утра';break
    case 7 : answer = '7 Часов Утра';break
    case 8 : answer = '8 Часов Утра';break
    case 9 : answer = '9 Часов Утра';break
    case 10 : answer = '10 Часов Утра';break
    case 11 : answer = '11 Часов Утра';break
    case 12 : answer = '12 Часов Дня';break
    case 13 : answer = '1 Час Дня';break
    case 14 : answer = '2 Часа Дня';break
    case 15 : answer = '3 Часа Дня';break
    case 16 : answer = '4 Часа Дня';break
    case 17 : answer = '5 Часов Дня';break
    case 18 : answer = '6 Часов Вечера';break
    case 19 : answer = '7 Часов Вечера';break
    case 20 : answer = '8 Часов Вечера';break
    case 21 : answer = '9 Часов Вечера';break
    case 22 : answer = '10 Часов Вечера';break
    case 23 : answer = '11 Часов Вечера';break
    case 24 : answer = '12 Часов Ночи';break
    default: answer = 'Что-то пошло не так'
}
alert(answer)
