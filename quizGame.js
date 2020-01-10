
///object
/*var john={
    name:'John',
    yearOfBirth:1990,
    job:'teacher'
};*/
//function constructor
/*var Person=function(name,yearOfBirth,job){                      //<---function constructor :first letter should be capital
    this.name=name;                                             //what we do is attach these
    this.yearOfBirth=yearOfBirth;                              //arguments to this variable of this
    this.job=job;  
    /*this.calculateAge = function(){
        console.log(2016-this.yearOfBirth);
    }                                       //function's execution context

}
//So attaching methods to the constructor function's prototype property is something that is really common to use
Person.prototype.calculateAge=function(){               //*inheritence
    console.log(2016-this.yearOfBirth);
} ;        */  
//attaching properties to the constructor function but its not common
//Person.prototype.lastName='Smith';  
/*var john=new Person('John',1990,'teacher');  //instantiation
var jane=new Person('Jane', 1996,'doctor');
var mark=new Person('Mark', 1997,'dancer');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();
console.log(john.lastName,jane.lastName,mark.lastName);*/
/*************************************************************************************************************************
*********************************************************************************************************************************************
trial and error

Person.prototype.Athelete=function(noofOlympic,olympicMedals,allowedOlympic){
    this.noofOlympic=noofOlympic;
    this.olympicMedals=olympicMedals;
    this.allowedOlympic=allowedOlympic;
};*/
/*
var john=new Person('John',1990,'teacher');  
var jane=new Person('Jane', 1996,'doctor');
var mark=new Person('Mark', 1997,'dancer');
console.log(john,mark,jane);

**************************************************************************************************************************************************
*****************************************************************************************************************************************************
*/
//Object create
/*var personProto={
    calculateAge:function(){
        console.log(2019- this.yearOfBirth);

    }
};
var john=Object.create(personProto);
john.name='JOHN';
john.yearOfBirth=1996;
john.job='teacher';

var jane=Object.create(personProto,
    {   name:{value:'JANE'},
        yearOfBirth:{value:1998},
        job:{value:'dancer'}
    }
    );
*/
//Primitives and Objects

//Primitives
/*var a=23;
var b=a;
a=46;
console.log(a,b);

//Objects
var Obj1 = {
    name: 'John',
    age:35
};
var Obj2=Obj1;
Obj2.age=67;
console.log(Obj1);
console.log(Obj2);

//functions
var age=24;
var obj={
    name:'lara',
    city:'lisbon'
};
function change(a,b){
    a=30;
    b.city='delhi'
    console.log(age,a);
}
change(age,obj);
console.log(age);
console.log(obj.city);
************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************\
*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
Lecture:Passing Function as an arguments
*/
/*var years=[1996,2010,1969,1952,1948];
function arryCalc(arr,fn){
    var arrRes=[];
    for(i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));

    }
    return arrRes;
}
function calculateAge(el){
    return (2019-el);

}
function isFullage(el){
    return el>18;
}
function ishHeartate(el){
    if(el>18&&el<81){
    return Math.round((206.9-(0.67*el)));
    }
    else{
        return -1;
    }
}
var ages=arryCalc(years,calculateAge);
var fullage=arryCalc(ages,isFullage);
var hertrate=arryCalc(ages,ishHeartate);
console.log(ages);
console.log(fullage);
console.log(hertrate);
********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
//Lecture:Functions returning Functions
/*function interviewQs(job){
    return function(name){
        if(job==='designer'){
        console.log('whato do u design, '+ name);
    }

        else if(job==='teacher'){
            console.log('what do u teach, '+ name);
        }
        else{
            console.log('What do u do, '+ name);

        }
    
}
}

var fun=interviewQs('teacher');
fun('john');
var designerqs=interviewQs('designer');
designerqs('jane');
designerqs('kane');
interviewQs('cricketer')('Virat')
*/
/**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** Lecture:IIFE***/
 /*function game(){
     var score=Math.random()*10;
     console.log(score>=5);
 }
 game();*/
 /*
 (function(){
    var score=Math.random()*10;
    console.log(score>=5);

 })();
 //console.log(score);
 //IIFE with arguments
 (function(goodLuck){
    var score=Math.random()*10;
    console.log(score>=5-goodLuck);

 })(5);
 *//***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
 //Lecutre:Closures
 /*function retirement(retirementAge){
     var a='years left before reitement';
     return function(yearOfBirth){
         var age=2020-yearOfBirth;
         console.log((retirementAge-age) + a);
     }

 }
 var us=retirement(66)
 us(1996);
 var india=retirement(60)
 india(1990);
 var germany=retirement(65)
 germany(1994);
 var uk=retirement(67)
 uk(1992);
 /***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
 /*function interviewQs(job){

    return function(name){
        if(job==='designer'){
        console.log('whato do u design, '+ name);
    }

        else if(job==='teacher'){
            console.log('what do u teach, '+ name);
        }
        else{
            console.log('What do u do, '+ name);

        }
    
}
}

var fun=interviewQs('teacher');
fun('john');
var designerqs=interviewQs('designer');
designerqs('jane');
designerqs('kane');
interviewQs('cricketer')('Subhash')
**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
//Lecture :Bind ,Call & Apply
/*var john={
    name:'JOHN',
    age:50,
    job:'wrestler',
    presentation:function(style,TimeofDay){
        if (style==='formal'){
            console.log('Good '+TimeofDay+' Ladies and Gentlemen I\' am ' + this.name
            +' I am a '+ this.job +' and I am '+ this.age + ' years old ');
        }else if(style==='friendly'){
            console.log(' Hey What\'s up, I am ' + this.name + ' I am a '+ this.job + ' and I am '+ this.age +
            ' years old.Have a nice ' + TimeofDay );
            
        }

    }
};
var emily={
    name:'EMILY',
    age:26,
    job:'Journalist'
};
//john.presentation('formal','morning');
//john.presentation.call(emily,'friendly','afternoon');
//john.presentation.apply(emily,['friendly','morning']);

var johnfriendly=john.presentation.bind(john,'friendly');
johnfriendly('morning');
var emilyfriendly=john.presentation.bind(emily);
emilyfriendly('formal','evening');*/
/*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*use of bind
var years=[1996,2000,1969,1952,1948];
function arryCalc(arr,fn){
    var arrRes=[];
    for(i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));

    }
    return arrRes;
}
function calculateAge(el){
    return (2020-el);

}
function isFullage(limit,el){
    return el>=limit;
}
var ages=arryCalc(years,calculateAge);
var fullJapan=arryCalc(ages,isFullage.bind(this,20))
console.log(ages);
console.log(fullJapan);
*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
//CODING CHALLENGE 7///BASIC LEVEL*********************************
/*(function(){
    var Question=function(qs,answer,correctans){
        this.qs=qs;
        this.answer=answer;
        this.correctans=correctans;
    
    }
    
    
    Question.prototype.randqs=function(){
        console.log(this.qs);
        for(i=0;i<this.answer.length;i++)
        console.log(i+':)'+this.answer[i]);
    
         
    
        
    }
    Question.prototype.correctanswer=function(answer){
        if(answer==this.correctans){
             console.log('correct ans!!!');
        }
        else{
            console.log('wrong ans');
        }
    
    
    }
    
    
    
    
    var qs1=new Question('who is the prime minister of india?',['rajendra','gajendra','narendra','indhira'],2);
     
    var qs2=new Question('who is the president of india?',['mohinder nath','kamal nath','rajendra','ram nath'],3);
    
    var qs3=new Question('which is your favourite programming language',['c++','java', 'python','javascript'],0);
    
    var qs4=new Question('till when u are going to complete the syllabus',['1 month','2 month','3 month','4 month'],0);
    
    var Abc=[qs1,qs2,qs3,qs4];
    var s=Math.floor(Math.random()*Abc.length);
    Abc[s].randqs();
    var answer= parseInt( prompt('Select the correct answer(choose no.)'));
    console.log('answer selected by user:'+answer);
    Abc[s].correctanswer(answer);
    

})();*/
/************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */
 //CODING CHALLENGE 7 EXPERT LEVEL//////////////////////////////////////////////////////////////////////////////////////////////
 /*(function(){
    var Question=function(qs,answer,correctans){
        this.qs=qs;
        this.answer=answer;
        this.correctans=correctans;
    }
    
    
    Question.prototype.randqs=function(){
        console.log(this.qs);
        for(i=0;i<this.answer.length;i++)
        console.log(i+':)'+this.answer[i]);
        
    }
    Question.prototype.correctanswer=function(answer){
        
        
        if(answer==this.correctans){
             score++;   
            console.log('correct ans!!!');
             
        }
        else{
            console.log('wrong ans ....Try again');

        }
        console.log('score:'+ score);
        console.log('----------------------------------------------------------------------------------');
              
    }
    
    var qs1=new Question('who is the prime minister of india?',['rajendra','gajendra','narendra','indhira'],2);
     
    var qs2=new Question('who is the president of india?',['mohinder nath','kamal nath','rajendra','ram nath'],3);
    
    var qs3=new Question('which is your favourite programming language',['c++','java', 'python','javascript'],0);
    
    var qs4=new Question('till when u are going to complete the syllabus',['1 month','2 month','3 month','4 month'],0);
    function NextQs(){
            var s=Math.floor(Math.random()*Abc.length);
            Abc[s].randqs();
            var answer=  prompt('Select the correct answer(choose no.)');
            console.log('answer selected by user:'+answer);
            if(answer!=='exit'){
            
            Abc[s].correctanswer(answer);
            NextQs()


        }

    }

    var score=0;
            
    var Abc=[qs1,qs2,qs3,qs4];
    NextQs();
    
})();*/
/*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */
 //CODING CHALLENGE 7 EXPERT LEVEL USING SAME METHOD AS THE TUTOR***************************************************** 
 
/*(function(){
    var Question=function(qs,answer,correctans){
        this.qs=qs;
        this.answer=answer;
        this.correctans=correctans;
    }
    
    
    Question.prototype.randqs=function(){
        console.log(this.qs);
        for(i=0;i<this.answer.length;i++)
        console.log(i+':)'+this.answer[i]);
        
    }
    Question.prototype.correctanswer=function(answer,callback){
        
        var sc;
        if(answer==this.correctans){ 
            console.log('correct ans!!!');
            sc=callback(true);
             
        }
        else{
            console.log('wrong ans ....Try again');
            sc=callback(false);

        }
        this.displayscore(sc) ;
        
    }
    Question.prototype.displayscore=function(score){
        console.log('the score:'+score)
        console.log('------------------------------------------------')
        }
     
    var qs1=new Question('who is the prime minister of india?',['rajendra','gajendra','narendra','indhira'],2);
     
    var qs2=new Question('who is the president of india?',['mohinder nath','kamal nath','rajendra','ram nath'],3);
    
    var qs3=new Question('which is your favourite programming language',['c++','java', 'python','javascript'],0);
    
    var qs4=new Question('till when u are going to complete the syllabus',['1 month','2 month','3 month','4 month'],0);
    function NextQs(){
            var s=Math.floor(Math.random()*Abc.length);
            Abc[s].randqs();
            var answer=  prompt('Select the correct answer(choose no.)');
            console.log('answer selected by user:'+answer);
            if(answer!=='exit'){
            
            Abc[s].correctanswer(answer,keepscore);
            NextQs()


        }

    }
    function score(){
        var sc=0;
        return function(correct){
           if (correct){
            sc++;
           }
           return sc;   

        }
    }
    
    var  keepscore = score();      
    var Abc=[qs1,qs2,qs3,qs4];
    NextQs();
    
})();*/













