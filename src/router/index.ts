import express from "express";
const router = express.Router();
import {
  getAllTodoCards,
  addTodoCard,
  updateTodo,
  deleteTodo,
  getTodoCard,
} from "../controller";

router.get("/getAllTodoCards", getAllTodoCards);
router.get("/getTodoCard", getTodoCard);
router.post("/addtodoCard", addTodoCard);
router.patch("/updateTodoCard", updateTodo);
router.delete("/deleteTodoCard", deleteTodo);

module.exports = router;
