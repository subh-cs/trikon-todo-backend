import { Request, Response } from "express";
const TodoCard = require("../model/schema");

export const addTodoCard = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const todoCard = await TodoCard.create({ title, description });
    res.status(200).json(todoCard);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getAllTodoCards = async (req: Request, res: Response) => {
  try {
    const todoCards = await TodoCard.find().sort({ date: -1 });
    res.status(200).json(todoCards);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getTodoCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const todo = await TodoCard.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const { title, description } = req.body;
    const todoCard = await TodoCard.findByIdAndUpdate(id, {
      title,
      description
    });
    res.status(200).json(todoCard);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const todoCard = await TodoCard.findByIdAndDelete(id);
    res.status(200).json(todoCard);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
