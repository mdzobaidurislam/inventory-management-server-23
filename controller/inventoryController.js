const Inventory = require("../models/InventoryModel");
//getAllInventory
const getAllInventory = async (req, res) => {
  const inventory = await Inventory.find({});
  res.status(200).json(inventory);
};
//getAllItemsAdmin
const getAllItemsAdmin = async (req, res) => {
  const authUserEmail = req.decoded.id;
  if (authUserEmail === req.params.email) {
    const items = await Inventory.find({ email: req.params.email });
    res.status(200).json(items);
  } else {
    res.status(403).json({ sucess: false, msg: "Forbidden access!!" });
  }
};

// getAllInventoryAdmin
const getAllInventoryAdmin = async (req, res) => {
  const authUserEmail = req.decoded.id;
  if (authUserEmail === req.params.email) {
    const inventory = await Inventory.find({});
    res.status(200).json({ success: true, inventory });
  } else {
    res.status(403).json({ sucess: false, msg: "Forbidden access!!" });
  }
};

// add inventory
const addInventory = async (req, res) => {
  const authUserEmail = req.decoded.id;
  if (authUserEmail === req.body.email) {
    const inventory = await Inventory.create(req.body);
    if (inventory) {
      res.status(201);
      res.json({
        msg: "Inventory Successfully Added!",
      });
    } else {
      res.status(404);
      res.json({
        msg: "Inventory not Added!",
      });
    }
  } else {
    res.status(403).json({ sucess: false, msg: "Forbidden access!!" });
  }
};

// editInventory
const editInventory = async (req, res) => {
  const authUserEmail = req.decoded.id;
  if (authUserEmail === req.params.email) {
    const result = await Inventory.findById(req.params.id);
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(401).res.json("Inventory not found");
    }
  } else {
    res.status(403).json({ sucess: false, msg: "Forbidden access!!" });
  }
};

const getInventoryById = async (req, res) => {
  const result = await Inventory.findById(req.params.ById);
  if (result) {
    res.status(201).json(result);
  } else {
    res.status(401).res.json("Inventory not found");
  }
};

// update inventory

const updateInventory = async (req, res) => {
  const { id, email } = req.params;
  const authUserEmail = req.decoded.id;
  if (authUserEmail === email) {
    const result = await Inventory.findOne({ _id: id });
    if (result) {
      result.name = req.body.name;
      result.image = req.body.image;
      result.short_description = req.body.short_description;
      result.description = req.body.description;
      result.price = req.body.price;
      result.quantity = req.body.quantity;
      result.supplier_name = req.body.supplier_name;

      const inventory = await result.save();
      res.status(200).json({
        msg: "Inventory Successfully Updated!",
      });
    } else {
      res.status(401).res.json({ msg: "Inventory not found" });
    }
  } else {
    res.status(403).json({ sucess: false, msg: "Forbidden access!!" });
  }
};

// delete the inventory
const deleteInventory = async (req, res) => {
  console.log(req.params);
  const { id, email } = req.params;
  const authUserEmail = req.decoded.id;
  console.log(authUserEmail);
  if (authUserEmail === email) {
    const inventory = await Inventory.findOne({ id });
    if (inventory) {
      const result = await Inventory.findByIdAndDelete({ _id: id });
      if (result) {
        res.status(200).json({
          msg: "Inventory Deleted Successfully!",
        });
      }
    } else {
      res.status(404).json({
        msg: "Inventory not found!",
      });
    }
  } else {
    res.status(403).json({ sucess: false, msg: "Forbidden access!!" });
  }
};

const updateInventoryById = async (req, res) => {
  try {
    const findInventory = await Inventory.findOne({
      _id: req.body.inventoryId,
    });
    if (findInventory) {
      findInventory.quantity = findInventory.quantity - 1;
      findInventory.sold = findInventory.sold + 1;
      await findInventory.save();
      res.status(201).json({
        success: true,
        msg: "Delivered  Successfully Added!",
      });
    } else {
      res.status(404).json({
        success: false,
        msg: "Delivered  Not Added!",
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      msg: "Internal error!",
    });
  }
};

const updateInventoryByIdWithRestock = async (req, res) => {
  try {
    const findInventory = await Inventory.findOne({
      _id: req.body.inventoryId,
    });

    if (findInventory) {
      findInventory.quantity =
        findInventory.quantity + parseInt(req.body.restock);
      await findInventory.save();
      res.status(201).json({
        success: true,
        msg: "Inventory  restock Added!",
      });
    } else {
      res.status(404).json({
        success: false,
        msg: "Invemtory restock  Not Added!",
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      msg: "Internal error!",
    });
  }
};

module.exports = {
  getAllInventory,
  addInventory,
  editInventory,
  updateInventory,
  deleteInventory,
  getAllInventoryAdmin,
  updateInventoryById,
  updateInventoryByIdWithRestock,
  getAllItemsAdmin,
  getInventoryById,
};
