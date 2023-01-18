import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";

export const postSearchhandler = async (req: Request, res: Response) => {
  try {
    const { query, page, per_page, order, sort } = req.params;
    console.log("🚀 ~ file: post.ts:7 ~ postSearchhandler ~ query", query);
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create set. Debug Backend!"
    );
  }
};
