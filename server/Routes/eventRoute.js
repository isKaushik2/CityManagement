import express from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
} from "../Controllers/eventController.js";

const route = express.Router();

// CREATE EVENT
route.post("/events", createEvent);

// GET ALL EVENTS
route.get("/events", getAllEvents);

// DELETE EVENT
route.delete("/events/:id", deleteEvent);

export default route;
