// Get all users
const getAll = (req, res) => {
    User.findAll().then(users => {
        res.json(users);
    });
}

// add new user 
const addNewUser = async (req, res) => {
    const { name, email, age } = req.body;

    await User.create({
        name: name,
        email: email,
        age: age,
    })

    res.send({ message: "user Added successfully" })

}

// get oneUser by id 
const getUserById = async (req, res) => {
    const { id } = req.body;
    const find = await User.findOne({
        where: {
            id: id
        }

    })
    res.send(find)
    console.log(find);

}


// Update user
const updateUser = async (req, res) => {
    const { id, name } = req.body;
    const user = await userModel.update(
        { name },
        {
            where: {
                id
            }
        }
    )
    if (user[0]) {
        res.send({ message: "user successfully updated" })
    } else {
        res.send({ message: "user does not updated " })
    }

}
// Delete user
const deleteUser = async (req, res) => {
    const { id, name } = req.body;
    const user = await userModel.destroy(
        { name },
        {
            where: {
                id
            }
        }
    )
    if (user[0]) {
        res.send({ message: "user successfully deleted" })
    } else {
        res.send({ message: "user does not deleted" })
    }
}


// Search for user where name starts with "a" and age less than 30
const searchByOp = (req, res) => {
    User.findAll({
        where: {
            name: { [Sequelize.like]: 'a%' },
            age: { [Sequelize.lt]: 30 }
        }
    }).then(users => {
        res.json(users);
    });
}


// Search for users by list of ids
const searchByListOfId = (req, res) => {
    User.findAll({
        where: {
            id: { [Sequelize.in]: req.query.ids }
        }
    }).then(users => {
        res.json(users);
    });
}


// Get all users with products
const userPro = (req, res) => {
    User.findAll({ include: 'Products' }).then(users => {
        res.json(users);
    });
}

export {
    getAll,
    addNewUser,
    getUserById,
    updateUser,
    deleteUser,
    searchByOp,
    searchByListOfId,
    userPro
}