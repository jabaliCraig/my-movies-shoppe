const router = require('express').Router();
const { User } = require("../db");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const requireToken = async (req, res) => {
    try{
        const token = req.headers.authorization;
        const user = await User.byToken(token);
        req.user = user;
    } catch(error) {
        next(error)
    }
}


router.post('/auth', async (req, res, next) => {
    try{res.json({ token: await User.authenticate(req.body) });

    } catch(error) {
        next(error)
    }
})

router.get('/auth', requireToken, async (req, res, next) => {
    try{
res.json(req.user)
    } catch(error) {
        next(error)
    }
})

// GET /api/users
router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll({
            // include: [ Order ]
        })
        res.json(users)
    }
    catch (error) {
        next(error)
    }
})

// GET /api/users/:id
router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id, {
        //   include: [ Order ]
        })
        res.json(user)
    }
    catch (error) {
        next(error)
    }
})

// POST /api/users
router.post('/', async (req, res, next) => {
  try {
      const addUser = await User.create(req.body);
      res.json(addUser)
  }
  catch (error) {
      next(error)
  }
})

// UPDATE /api/users/:id
router.put('/:id', async (req, res, next) => {
  try {
      const updateUser = await User.findByPk(req.params.id);
      const updated = await updateUser.update(req.body)
      res.send(updated)
  }
  catch (error) {
      next(error)
  }
})

// DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
      const userId = Number(req.params.id)
      const deleteUser = await User.findByPk(id);
      await deleteUser.destroy();
      res.send(deleteUser);
  }
  catch (error) {
      next(error)
  }
})

module.exports = router;
