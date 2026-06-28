const Task = require('../models/task.models');

// 1. Create a New Task (POST)
exports.createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        // Backend Form Validation
        if (!title || title.trim() === "") {
            return res.status(400).json({ success: false, message: "Title is required" });
        }

        const newTask = await Task.create({ title, description, status });
        res.status(201).json({ success: true, data: newTask });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 2. Get All Tasks (GET)
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 }); // Newest tasks first
        res.status(200).json({ success: true, count: tasks.length, data: tasks });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 3. Update a Task (PUT)
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        // Validation if title is being updated to empty
        if (title !== undefined && title.trim() === "") {
            return res.status(400).json({ success: false, message: "Title cannot be empty" });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, status },
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({ success: true, data: updatedTask });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 4. Delete a Task (DELETE)
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({ success: true, message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};