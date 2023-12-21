import db from "../../models";
import { bufferTobase64 } from "./userService";
export const addMarkDown = async (
  descriminator,
  contentHTML,
  contentMarkdown,
  desc,
  id
) => {
  const keyRef = descriminator + "Id";
  try {
    const schedule = await db.Markdown.create(
      {
        contentHTML,
        contentMarkdown,
        desc,
        [keyRef]: id,
      },
      { raw: true }
    );
    if (schedule) {
      return {
        message: "ok",
        errCode: 0,
        data: schedule,
      };
    }
    return {
      message: "insert fail",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }
};

