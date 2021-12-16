
let empModel = require('../models/emp')
let EmpController = ()=>{}

EmpController.getAll = (req,res,next)=>{
    empModel.getAll((error,rows)=>{
        if (error) throw error;
        let resp = {title:'Empleados',data:rows}
        res.render("empleados",{consulta: resp})
    })
}
EmpController.getOne = (req,res,next)=>{
    empModel.getOne(req.params.id,(error,rows)=>{
        if (error) throw error;
        res.render("empunico",{emp:rows[0]})
    })
}
EmpController.insert =  (req,res,next)=>{
    let body = req.body
    let data = {
        ename: body.ename,
        salary: parseFloat(body.salary)
    }
    empModel.insert(data,(error,rows)=>{
        try {
            if(error) throw {error,mensaje:'Verifica lo ingresado'};
            res.redirect("/empleados")

        } catch (error) {
            res.render('nuevoEmp',{error:true,mensaje:error.mensaje})
        }
        
    })
}
EmpController.update = (req,res,next)=>{
    const id = req.params.id
    let data = {
        ename: req.body.ename,
        salary: parseFloat(req.body.salary)
    }
    empModel.update(id,data,(error,rows)=>{
        try {
            if(error) throw error;
            res.json(
              {estado:true}  
            )
        } catch (error) {
            console.log(error)
            res.json({estado:false})
        }
    })
}
EmpController.delete = (req,res,next) => { 
    const id = req.params.id 
    empModel.delete(id,(error,rows)=>{ 
        try {
            if(error) throw {error};
            res.json({estado:true})
        } catch (error) {
            console.log(error)
            res.json({estado:false})
        }
    })
}

module.exports = EmpController