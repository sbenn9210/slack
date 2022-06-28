import { RequestHandler } from "express";

export function asyncHandler(fn: (req: any, res: any) => Promise<void>): RequestHandler {
    return function (req, res, next) {
      fn(req, res).catch(next);
    };
  }
  