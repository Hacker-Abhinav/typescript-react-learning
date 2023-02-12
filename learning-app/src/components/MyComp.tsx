import {useEffect, useState} from 'react';

type Employee = {
  name: string;
  salary: number;
};

export function MyComp(){
  //const employee: {name: string; salary: number;}
  const [employee, setEmployee] = 
useState<Employee>({
    name: '',
    salary: 0,
  });

  const setEmployee = ()=>{

  }

  useEffect(() => {
    setEmployee({name: 'James', salary: 100});
  }, []);

  return (
    <div>
      <h2>Name: {employee.name}</h2>
      <h2>Salary: {employee.salary}</h2>
    </div>
  );
};

