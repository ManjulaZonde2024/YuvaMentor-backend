import Mentorship from "../models/Mentorship.js";

export const getMentorships = async (req, res) => {
  try {
    const mentorships = await Mentorship.find();
    if(mentorships.length === 0){
      return res.status(404).json({ message: "No mentorships found" });
    }
    res.json(mentorships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMentorship = async (req, res) => {
  try {
    const mentorship = await Mentorship.create(req.body);
    res.status(201).json(mentorship);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
