const exp=require('express')
const app=exp()
const bodyParser = require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')
const port=3000
const router=require('../HomeworkBTD/routes/route')
const { swaggerSpec, swaggerUi } = require('../HomeworkBTD/swagger');

app.use(bodyParser.json())
app.use(cors())
dotenv.config()
app.use('/game',router)
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port,()=>{console.log('this server run on ',port)})
