const emp = require('./emp-connection')
let empModel = ()=>{}

 empModel.getAll = (cb)=>{
        emp.query('select * from employees',cb)
}
empModel.getOne = (id,cb)=>{
        console.log.apply(id);
        emp.query('select * from employees where eid = ?',id,cb)
}

empModel.insert =  (data,cb)=>{
        console.log(data)
        emp.query('insert into employees (ename,salary) values (?,?)',[data.ename,data.salary],cb)
}
empModel.update =  (id,data,cb)=>{
        emp.query('update employees set ? where eid = ?',[data,id],cb)
}
empModel.delete =  (id,cb)=>{
        emp.query('delete from employees where eid = ?',id,cb)
}

module.exports = empModel