const router = require("express").Router();
const Users = require('../models/users/users.js');

const UserMetas = require('../models/users_meta/users_meta');

router.get('/', (req, res) => {
    Users.getUsers()
    .then( users => {
        res.status(200).json(users)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting users", error: error.toString()})
    })
})

router.get('/:user_id', (req, res) => {
    Users.getUserById(req.params.user_id)
    .then( user => {
        res.status(200).json(user)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user", error: error.toString() })
    })
})

router.get('/username/:username', (req, res) => {
    Users.getUserByUsername(req.params.username)
    .then( user => {
        res.status(200).json(user)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user", error: error.toString() })
    })
})

router.get('/email/:email', (req, res) => {
    Users.getUserByEmail(req.params.email)
    .then( user => {
        res.status(200).json(user)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user", error: error.toString() })
    })
})

router.get('/sub/:sub_id', (req, res) => {
    Users.getUserBySubId(req.params.sub_id)
    .then( user => {
        res.status(200).json(user)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user", error: error.toString() })
    })
})

// ******** ADDS USER TO PG DATABASE, BUT RES DOES NOT RETURN NEWLY CREATED USER, WHY? ********
router.post('/', (req, res) => {
    const { email, sub_id, username } = req.body;

    Users.createUser(req.body)
    .then(user => {
        // if (user) {
            res.status(200).json(user)
        // }
        // else {
        //     res.status(400).json({ message: 'Incomplete entry' })
        // }
    })
    .catch(error => {
        res.status(500).json({ message: "Error creating user", error: error.toString() })
    })
})

router.put('/:id', async (req, res) => {
    const { email, username, sub_id } = req.body
    
    if (!email || !username || !sub_id ) {
        res.status(400).json({ errorMessage: "Please provide user's email and username and sub_id" })
    }

    Users.updateUser(req.params.id, req.body)
    .then(user => {
        if (user) {
            res.status(200).json(user)
        }
        else {
            res.status(404).json({ message: "User not found" })
        }
    })
    .catch (error => {
        res.status(500).json({ error: error.toString() })
    })
})

router.delete('/:id', (req, res) => {
    Users.removeUser(req.params.id)
    .then( deleted => {
        if (deleted) {
            res.status(200).json(deleted)
        }
        else {
            res.status(400).json({ message: 'Requested user cannot be found' })
        }
    })
    .catch (error => {
        res.status(500).json({ error: error.toString() })
    })
})


// user_meta routes

router.get('/meta/:id', (req, res) => {
    UserMetas.getUserMetaById(req.params.id)
    .then( meta => {
        res.status(200).json(meta)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user meta", error: error.toString() })
    })
})

router.get('/meta/uid/:user_id', (req, res) => {
    UserMetas.getUserMetaByUserId(req.params.user_id)
    .then( meta => {
        res.status(200).json(meta)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user meta", error: error.toString() })
    })
})

router.get('/meta/state/:state_id', (req, res) => {
    UserMetas.getUserMetaByStateId(req.params.state_id)
    .then( meta => {
        res.status(200).json(meta)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user meta", error: error.toString() })
    })
})

router.get('/meta/suid/:shelter_user_id', (req, res) => {
    UserMetas.getUserMetaByUserId(req.params.shelter_user_id)
    .then( meta => {
        res.status(200).json(meta)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user meta", error: error.toString() })
    })
})

router.get('/meta/num/:phone_number', (req, res) => {
    UserMetas.getUserMetaByPhoneNumber(req.params.phone_number)
    .then( meta => {
        res.status(200).json(meta)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user meta", error: error.toString() })
    })
})

router.get('/meta/zip/:zip', (req, res) => {
    UserMetas.getUserMetaByZip(req.params.zip)
    .then( meta => {
        res.status(200).json(meta)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user meta", error: error.toString() })
    })
})

router.get('/meta/city/:city', (req, res) => {
    UserMetas.getUserMetaByCity(req.params.city)
    .then( meta => {
        res.status(200).json(meta)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting user meta", error: error.toString() })
    })
})

router.post('/meta', (req, res) => {
    const { id, user_id, shelter_user_id } = req.body

    UserMetas.createUserMeta(req.body, 'id')
    .then( meta => {
        if (meta) {
            res.status(200).json(meta)
        }
        else {
            res.status(400).json({ message: 'Incomplete entry' })
        }
    })
    .catch(error => {
        res.status(500).json({ error: "Error while saving user meta to the database", error: error.toString() })
    })
})

router.put('/meta/:id', (req, res) => {
    const { id, user_id, shelter_user_id } = req.body

    UserMetas.updateUserMeta(req.params.id, req.body)
    .then( meta => {
        if (meta) {
            res.status(200).json(meta)
        }
        else {
            res.status(404).json({ message: "User meta not found" })
        }
    })
    .catch (error => {
        res.status(500).json({ error: "Error updating user meta" })
    })
})

router.delete('/meta/:id', (req, res) => {
    UserMetas.deleteUserMeta(req.params.id)
    .then( meta => {
        if (meta) {
            res.status(200).json(meta)
        }
        else {
            res.status(404).json({ message: "User meta not found" }) 
        }
    })
    .catch (error => {
        res.status(500).json({ error: "Error deleting user meta" })
    })
})

module.exports = router;