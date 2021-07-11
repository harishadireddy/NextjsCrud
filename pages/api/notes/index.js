import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/Note";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: { test: "get" } });
      }

      break;
    case "POST":
      try {
        const notes = await Note.create(req.body);
        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: { test: "post" } });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
