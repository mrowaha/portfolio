import { sendMail } from "@/service/mailService";
import { NextApiResponse } from "next";

interface EmailData {
  EmailTitle : string;
  FromEmail : string;
  Content : string;
}

const handler = async (req : Request, res : NextApiResponse) => {
  try {
    const { method } = req;
    // @ts-ignore
    const data = req.body as EmailData;
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          `${data.FromEmail} | ${data.EmailTitle}`,
          data.Content,
        );
        res.status(200).send("Success");
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      message: (err as Error).message,
    });
  }
};

export default handler;