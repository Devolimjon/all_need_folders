import { Router } from 'express'
import User from '../model/user.model'
import userService from '../service/user.service'

const router = Router()
// register ENDPOINT
router.post('/register', async (req, res) => {

  let user: User = {
      id: 0,
      name: req.body.name,
      age: req.body.age,
      username: req.body.username,
      password: req.body.password
    }

    await userService.addUser(user)

    let { password, ...newUser } = user

    res.json({
      message: 'Register successful!',
      user: newUser
    })
})
// /login ENDPOINT
router.post('/login', async (req, res) => {
  let { username, password } = req.body

  let user = await userService.findUser(username)

  if (user == undefined) {
    return res.status(404).json({
      message: 'user with username: ' + username + ' not found.'
    })
  }

  if (user.password === password) {
    return res.json({
      message: 'Login successfuly'
    })
  }
  else {
    res.status(401).json({
      message: 'Do`g`ri Yoz !'
    })
  }
})


export default router