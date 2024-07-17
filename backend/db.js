const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://omsaraykar:not_strong%4044@cluster0.ezelsat.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    descripton: String,
    completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}