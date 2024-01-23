const exp=require('express')
const app=exp()
const router=exp.Router()
const db=require('../db')
const{getAll,Add,puss,del}=require('../control/fc')

router.get('/',(getAll))
router.post('/',(Add))
router.put('/:id',(puss))
router.delete('/:id',(del))

module.exports=router;