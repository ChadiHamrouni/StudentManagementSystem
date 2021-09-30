 /** 
   * * Chadi Hamrouni, SE 1
   * ! Exercice 31, 11, 16, 25 functions are commented
  */
var students = []
var numberOfStudents = 0;

function addStudent(student){
  students.push(student);
}

function getNumberOfStudents(){
  console.log(numberOfStudents)
  return numberOfStudents;
}

function createFullName(firstName, lastName){
    return firstName + " " + lastName
}

function isFullName(name){
    words = name.split(" ");
    if (words.length >=  2 ){
      return true;
    }
    else{return false;}
}

function getStudentsByInitials(firstInitial,secondInitial){
  var newarray = [];
  for(var i=0; i<students.length; i++){
      if(students[i].charAt('0') === firstInitial)
        {
          newarray.push(students[i]);
          console.log(newarray)
        }
    }
}

function createStudent(firstName, lastName, email, age, education){
  student = {
      firstNames: firstName,
      lastNames: lastName,
      emails: email,
      ages: age,
      educations: education
            }

  student.fullNames = student.firstNames + " " + student.lastNames;
  return student;
}

function addSkills(student, skills){
    for (var i=0  ;i<skills.length;i++){
          var uniqueChars = [...new Set(skills)];
          student.skill = uniqueChars
    }
    console.log(student)
}
       
function clearStudents(){
   students.length = 0;
}

function removeStudent(firstName){
    for(var i=0;i<students.length;i++){
        if(students[i].firstNames === firstName){
          students.pop(students[i]);
        }
    }
    numberOfStudents = students.length;
}

function isStudentOlderThan(student,age){
  if(student.ages > age){
    console.log("true")
    return true
  }
  else {
    console.log("false")
    return false
  }
}

function doesStudentHaveSkills(student){
  if (student.hasOwnProperty('skill')){
      if(student.skill.length>= 1){
        console.log("true")
        return true
      } 
  }
  else {
    console.log("false")
    return false
  }
}

function isStudentQualified(student){
  if (student.ages>= 18 && student.hasOwnProperty('skill') &&student.skill.length>=1){
      console.log("true")
      return true
  }
  else {
      console.log("false")
      return false
  }
}

function numberOfStudentOlderThan(age){
  var numberofolder = 0
   for(var i=0;i<students.length;i++){
        if(isStudentOlderThan(students[i],age)){
            numberofolder++           
        }     
    }
   console.log(numberofolder)
}

function getStudentsWithSkills(){
  var skilledstudents = []
  for(var i=0;i<students.length;i++){
      if(doesStudentHaveSkills(students[i])){
          skilledstudents.push(students[i])
      }
    }
  console.log(skilledstudents)      
}

function getAllStudentsWithSkill(skillset){
var skilledstudents = []
    for(var i=0;i<students.length;i++){
        if(doesStudentHaveSkills(students[i])){
               if (students[i].skill.indexOf(skillset) != -1){
                       skilledstudents.push(students[i])
          }
      }
  }
  console.log(skilledstudents)
}

//getStudentsByInitials("Z","H");

//addStudent(createFullName("chady","hamrouny"))
//addStudent(createFullName("ziden","hammouda"))
//addStudent(createFullName("ahmed","himden"))
//addStudent(createFullName("hammouda","ahmed"))
//addStudent(createFullName("mohamed","benahmed"))

//clearStudents()

S1 = createStudent("ahmed","fonfon","fonn@gmail.com",17,"medtech")

addStudent(S1)

S2 = createStudent("mohamed","fonfon","fono@gmail.com",15,"medtech")

addStudent(S2)

S3 = createStudent("himden","fonfon","non@gmail.com",20,"medtech")

addStudent(S3)

S4 = createStudent("hammouda","fonfon","fnon@gmail.com",21,"medtech")

addStudent(S4)

S5 = createStudent("hmida","fonfon","foon@gmail.com",23,"medtech")

addStudent(S5)
console.log(students.length)

addSkills(S1,["JS","CSS"])
addSkills(S3,["JAVA","CSS","PYTHON"])
addSkills(S2,["PYTHON","JAVASCRIPT","HTML"])

//removeStudent("mohamed")
//removeStudent("himden")

isStudentOlderThan(S1,20)
doesStudentHaveSkills(S5)
isStudentQualified(S3)
numberOfStudentOlderThan(20)
getStudentsWithSkills()
getAllStudentsWithSkill("HTML")
