import express from "express";
import {
  createVolunteer,
  getVolunteersByEvent,
} from "../Controllers/volunteerController.js";

const route = express.Router();

route.post("/volunteers", createVolunteer);

route.get("/volunteers/:eventId", getVolunteersByEvent);

export default route;
