import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name } = request.body;

    const product = await prismaClient.user.create({
      data: {
        email,
        name
      },
    });

    return response.json(product);
  }
}