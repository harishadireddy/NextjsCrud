import dbConnect from "../../utils/dbConnect";
import Note from "../../models/Note";

dbConnect();

export default function handler(req, res) {
  Note.find({}).then((notes) => {
    res.status(200).json(notes);
  });
}
