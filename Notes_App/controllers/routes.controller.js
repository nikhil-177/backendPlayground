import { Todo } from "../models/Data.models.js";

export const addTodo = async (req, res) => {
    // console.log(req.body);
    const{ title, description, completed } = req.body;
    await Todo.create({title,description,completed})
    .then((todo) => console.log(todo),console.log("Todo added successfully!"))
    .catch((error) => console.log(error));
    // res.render('index.ejs');
    res.redirect('/');
};

export const getAllTodos = async (req, res) => {
    const todos = await Todo.find();
    res.render('index', {
      title: 'Todo App',
      heading: 'My Todos',
      todos
    });
}

export const updateTodo = async (req, res) => {
    const { title, updatedtitle, description, completed } = req.body;
    // console.log(req.body);
    const todo = await Todo.findOneAndUpdate({title}, {$set: {title : updatedtitle || title, description, completed} })
    .then((todo,updatedOne) => {return {"todo" : todo === null ? "Todo not found" : todo,"updatedOne" : updatedOne}})
    .catch((error) => {return {"message": "Sorry, Can't get data"}})
    res.json(todo);
    
}

export const deleteTodo = async (req, res) => {
    // console.log(req.body);
    const { title } = req.body;
    const data = await Todo.findOneAndDelete({title})
    .then((todo) => {return {"todo" : todo === null ? "Todo not found" : todo}})
    .catch((error) => {return {"message": error.message}})
    res.json(data);
}