import todoSchema from "../models/todoSchema.js";

export const updateTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todoId = req.params.id;
    const data = await todoSchema.findOne({
      _id: todoId,
    });
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    data.title = title;

    // const existingTodo = await todoSchema.findOne({ title});

    const existingTodo = await todoSchema.findOne({
      title,
      _id: { $ne: todoId },
    });
    if (existingTodo) {
      return res.status(400).json({
        success: false,
        message: "Title already exists",
      });
    }

    await data.save();
    console.log(data);

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
