import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { request } from "../../../../services/request";

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    const { ownerName, repoName } = req.query;
    const users = await Promise.all([
      request({
        url: `/repos/${ownerName}/${repoName}`,
        method: "GET",
      }),
      request({
        url: `/users/${ownerName}`,
        method: "GET",
      }),
    ]);

    res.status(200).json(users[0].data, users[1].data);
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create set. Debug Backend!"
    );
  }
};
