class Person{
    
constructor(name,age,gender,interests){
this.name = name
this.age = age
this.gender = gender
this.interests = interests
}
fullname(){
    var arr = this.name.split(" ");
    var firstname = arr[0];
  

    console.log('Hello I \'m ' + firstname);
}
intro(){
    var arr = this.name.split(" ");
    var firstname = arr[0];
    var lastname = arr[1];
  var activity = [];
var arr2 = this.interests.split(",");
     
 for(var i = 0; i< arr2.length;i++){
        activity.push(arr2[i]);
   }
 console.log('Name:  ' + firstname + " Surname: " + lastname +  ' Age: ' + this.age +  ' Gender: ' + this.gender +  ' Interests: ' + activity);

}


}
const Firstperson = new Person("Tafadzwa","Tusele",20,"female","Reading,singing");
const Secondperson = new Person("Lindokuhle" ,"Ndamane",21,"female","a,b,x");
Secondperson.intro();