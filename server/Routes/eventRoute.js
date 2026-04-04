import express from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
} from "../Controllers/eventController.js";

const route = express.Router();

route.post("/events", createEvent);

route.get("/events", getAllEvents);

route.delete("/events/:id", deleteEvent);

export default route;
