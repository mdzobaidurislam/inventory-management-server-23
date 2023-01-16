const Blog = require("../models/BlogModel");

//getAllInventory
const getAllBlog = async (req, res) => {
  const blog = await Blog.find({});
  res.status(200).json(blog);
};

// add inventory
const addBlog = async (req, res) => {
  const result = await Blog.create(req.body);
  if (result) {
    res.status(201);
    res.json({
      msg: "Blog Successfully Added!",
    });
  } else {
    res.status(404);
    res.json({
      msg: "Blog not Added!",
    });
  }
};

// get blog by id
const getBlogById = async (req, res) => {
  const result = await Blog.findById(req.params.id);
  if (result) {
    res.status(201).json(result);
  } else {
    res.status(401).res.json("Blog not found");
  }
};

module.exports = {
  getAllBlog,
  addBlog,
  getBlogById,
};
