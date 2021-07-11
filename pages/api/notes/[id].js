import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/Note";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const notes = await Note.findById(id);
        if (!notes) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: { test: "get" } });
      }
      break;
    case "PUT":
      try {
        const notes = await Note.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!notes) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: { test: "put" } });
      }
      break;

    case "DELETE":
      try {
        const deletedNote = await Note.deleteOne({ _id: id });
        if (!deletedNote) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: { test: "put" } });
      }
      break;
    default:
      res.status(400).json({ success: false, data: { test: "default" } });
      break;
  }
};
