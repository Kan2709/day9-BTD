const exp = require('express')
const app = exp()
const { swaggerSpec, swaggerUi } = require('../swagger');
const db = require('../db')
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /game:
 *  get:
 *      summary: Get all products   #โค้ดโดยรวมทำอะไร
 *      description: Get all products
 *      responses:
 *          200:
 *              description: A list of game
 */
exports.getAll = async (req, res) => {
    const sql = 'SELECT * FROM game'
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            res.json(result)
        }
    })
}
/**
 * @swagger
 * /game:
 *  post:
 *      summary: Get all products
 *      requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              Game_id:
 *                                  type: number
 *                              Game_name:
 *                                  type: string
 *                              Price:
 *                                  type: number
 *                         
 *      description: Get all game
 *      responses:
 *          200:
 *              description: A list of game
 *          500:
 *              description: errorเขามาจากไหนวะเนี้ย
 */
exports.Add = async (req, res) => {
    const sql = 'INSERT INTO game VALUE(?,?,?)'
    const change = req.body
    db.query(sql, [change.Game_id, change.Game_name, change.Price], (err, result) => {
        if (err) {
            res.status(500).json({ err })
        } else {
            res.status(200).json({ s: 'success' })
        }
    })
}

/**
 * @swagger
 * /game/{id}:
 *  put:
 *      summary: Put some game       
 *      requestBody: 
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          Game_id:
 *                              type: number
 *                          Game_name:
 *                              type: string
 *                          Price:
 *                              type: number
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          
 *      responses:
 *          200:
 *              description: update success
 */
exports.puss = async (req, res) => {
    const sql = 'UPDATE game SET Game_id=?,Game_name=?,Price=? WHERE Game_id=?'
    const id = req.params.id
    const change = req.body
    db.query(sql, [change.Game_id, change.Game_name, change.Price, id], (err, result) => {
        if (err) {
            res.status(500).json({ err })
        } else {
            res.status(200).json({ s: 'success' })
        }
    })
}

/**
 * @swagger
 * /game/{id}:
 *  delete:
 *      summary: Put some game       
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          
 *      responses:
 *          200:
 *              description: update success
 */
exports.del=async(req,res)=>{
    const id=req.params.id
    const sql="DELETE FROM game WHERE Game_id=?"
    db.query(sql,[id],(err,result)=>{
        if (err) {
            res.status(500).json({ err })
        } else {
            res.status(200).json({ s: 'success' })
        }
    })
}