const Todo = require('../model/todoSchema');

exports.create = async (req, res) => {
    const { todo } = req.body;
    // console.log(req.body);
    // console.log(req.cookies);
    if (!todo) {
        return res.status(400).send("Enter a todo name plz");
    }
    try {
        const newtodo = new Todo({
            tid: req.cookies.uid, todo
        })
        newtodo.save()
            .then(() => {
                res.status(200).send("Todo saved successfully");
            })
            .catch((err) => {
                res.status(500).send(err);
                console.log(err);
            })

    } catch (err) {
        res.status(400).send("You are not authenticated");
    }
}


exports.view = async (req, res) => {
    try {
        const userid = req.cookies.uid;
        const user = await Todo.find({ tid: userid });
        // console.log(user);
        let todos = [];
        user.map((items) => {
            todos.push(items.todo);
        })
        // console.log(todos);

        if (!user) {
            res.status(200).send("You don't have any todos");
        }
        res.status(200).send(todos);
    } catch (err) {
        res.status(500).send("something went wrong");
        console.log(err);
    }
}