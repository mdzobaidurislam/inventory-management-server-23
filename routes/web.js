const express = require("express");
const {
  getAllBlog,
  addBlog,
  getBlogById,
} = require("../controller/BlogController");
const {
  getAllInventory,
  addInventory,
  deleteInventory,
  updateInventory,
  editInventory,
  getAllInventoryAdmin,
  updateInventoryById,
  updateInventoryByIdWithRestock,
  getAllItemsAdmin,
  getInventoryById,
} = require("../controller/inventoryController");
const { verifyUser } = require("../controller/userLoginController");
const { apiMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/admin/inventory/:email", apiMiddleware, getAllInventoryAdmin);
router.get("/admin/items/:email", apiMiddleware, getAllItemsAdmin);

router.get("/inventory", getAllInventory);
router.post("/inventory", apiMiddleware, addInventory);
router.delete("/inventory/:id/:email", apiMiddleware, deleteInventory);
router.put("/inventory/:id/:email", apiMiddleware, updateInventory);
router.get("/edit-inventory/:id/:email", apiMiddleware, editInventory);
router.get("/inventory/:ById", getInventoryById);

router.put("/update-inventory", updateInventoryById);
router.put("/restock-inventory", updateInventoryByIdWithRestock);
router.post("/login", verifyUser);

// blog routes
router.get("/blog", getAllBlog);
router.post("/blog", addBlog);
router.get("/blog/:id", getBlogById);

module.exports = router;
