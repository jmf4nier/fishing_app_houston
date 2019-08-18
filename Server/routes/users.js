const router = require('express').Router();
let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//   Exercise.find()
//     .then(exercises => res.json(exercises))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/signup').post( async(req, res) => {
  // const username = req.body.username;
  // const password = req.body.password;
 console.log(req.body)

  const newUser = new User(req.body)
  const token = await newUser.generateAuthToken()
  newUser.save()
  .then(() => res.json('User added!', { user, token }))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post( async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findByCredentials(email, password)
    if (!user) {
        return res.status(401).send({error: 'Login failed! Check authentication credentials'})
    }
    const token = await user.generateAuthToken()
    res.send({ user, token })
} catch (error) {
    res.status(400).send(error)
}

})
// router.route('/:id').delete((req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then((res) => res.json('User deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.password = req.body.password;
      

      user.save()
        .then(() => res.json('User password updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
