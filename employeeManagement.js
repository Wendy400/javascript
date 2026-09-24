const employees = []
employees.push("bob", "ann", "charlie" ,"ken", "hellen" , "david", "steff")
employees[0]= "Dan"// updating the list
employees.splice(2,4)// output Dan ann and steff. The splice has deleted 4 people from where 2 starts.
console.log(employees)
