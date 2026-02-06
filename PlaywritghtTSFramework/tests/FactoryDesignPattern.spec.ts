interface employee{
    salary():number
    role():any;
}

class tester implements employee{
    salary(){
        return 5000;
    }
    role(){
        console.log("This is tester, who tests");
    }

}

class admin implements employee{
    salary(): number {
        return 1000;
    }
    role(){
        console.log("This is admin and it does admin tasks");
    }
}
/* two employees tester and admin, they do certain job defined by interface. Since each employee has a role and respective salary.
every calass that implements employee, have to define the methodss.
*/

class assignment{
    public assEmp(empType:string):any{
      
        switch(empType.toLocaleLowerCase()){
            case "tester":
                return new tester();
                break;
            case "admin":
                return new admin();
                break;
            default:
                console.log("Not a valid employee: "+empType)
        }
    }

}

const myEmp = new assignment();                 //created object of assignment
/* no need to worry about what to object to create, just employee type and respective object will be created 
and returned using that object we can see what type of role and salary the employee is having.
*/
const empType = myEmp.assEmp("admin");          //assEmp mehod will return admin object, since we passed admin in the method.
console.log(empType.salary());                  // using that admin method we can access admin's details.
empType.role();


