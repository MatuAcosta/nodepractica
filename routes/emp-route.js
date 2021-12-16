const express = require ('express')
const EmpController = require('../controllers/empcontroller')
const router = express.Router()
router
.get('/',(req,res,next)=>{
    EmpController.getAll(req,res,next)
})
router.get('/nuevo',(req,res)=>{
    res.render('nuevoEmp',{error:false});
})
router.get('/:id', (req,res,next) => {
    EmpController.getOne(req,res,next)
})
router.put('/:id',  (req,res,next)=>{
    EmpController.update(req,res,next)
})

router.post('/', (req,res,next)=>{
    EmpController.insert(req,res,next)
})
router.delete('/:id',(req,res,next)=>{
    EmpController.delete(req,res,next)
})
module.exports = router;