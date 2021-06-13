function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}



function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getData = function () {
  return this.name + " " + this.surname + " " + this.salary;
}
Employee.prototype.getSalary = function () {
  console.log(this.salary);
}
Employee.prototype.increaseSalary = function () {
  this.salary += (this.salary * 0.1);
}



function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.getSpecilization = function () {
  console.log(this.specialization);
};



function Manager(name, surname, job, salary, specialization, department) {
  Employee.call(this, name, surname, job, salary, specialization);
  this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;
Manager.prototype.getDepartment = function () {
  console.log(this.department);
};
Manager.prototype.changeDepartment = function (dep) {
  this.department = dep || "undefined";
  console.log(this.department);
};



var employee1 = new Employee("Darko", "Kovacevic", "frontend developer", 60000);
console.log(employee1);