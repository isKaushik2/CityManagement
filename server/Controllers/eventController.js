import Event from "../Models/eventModel.js";

export const createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const saveData = await newEvent.save();
    res.status(201).json(saveData);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();

    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events found" });
    }

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;

    const eventExist = await Event.findById(id);
    if (!eventExist) {
      return res.status(404).json({ message: "Event not found" });
    }

    await Event.findByIdAndDelete(id);

    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
