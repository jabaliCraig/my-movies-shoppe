const router = require('express').Router();
const { Order, Movie }=require("../db");

// GET /api/orders <----- i dont know if we need this
router.get('/', async (req, res, next) => {
  try {
      const orders = await Order.findAll({
          include: [{ model: Movie, as: 'movies'}]
      })
      res.send(orders)
  }
  catch (error) {
      next(error)
  }
})

// GET /api/orders/:id
router.get('/:id', async (req, res, next) => {
    try {
        const order = await Order.findByPk({
            include: [{ model: Movie, as: 'movies'}]
        })
        res.send(order)
    }
    catch (error) {
        next(error)
    }
})

// POST /api/orders/id
router.post('/:id', async (req, res, next) => {
  try {
      const addOrder = await Order.create(req.body);
      res.send(addOrder)
  }
  catch (error) {
      next(error)
  }
})

// UPDATE /api/orders/:id
router.get('/:id', async (req, res, next) => {
  try {
      const updateOrder = await Order.findByPk(req.params.id);
      const updated = await updateOrder.update(req.body)
      res.send(updated)
  }
  catch (error) {
      next(error)
  }
})

// DELETE /api/orders/:id
router.delete('/:id', async (req, res, next) => {
  try {
      const id = Number(req.params.id)
      const deleteOrder = await Order.findByPk(id);
      await deleteOrder.destroy();
      res.send(deleteOrder);
  }
  catch (error) {
      next(error)
  }
})

module.exports = router;
