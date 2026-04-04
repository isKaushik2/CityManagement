import Volunteer from "../Models/volunteerModel.js";

// CREATE VOLUNTEER (apply for event)
export const createVolunteer = async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    const saveData = await newVolunteer.save();

    res.status(201).json(saveData);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ errorMessage: error.message });
  }
};

// GET VOLUNTEERS BY EVENT (IMPORTANT FOR ADMIN DASHBOARD)
export const getVolunteersByEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;

    const data = await Volunteer.find({ eventId });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
