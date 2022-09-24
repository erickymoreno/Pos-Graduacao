import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreatePostController {
  async handle(request: Request, response: Response) {
    const { title, published } = request.body;

    const authorId = 1
    const post = await prismaClient.post.create({
      data: {
        title,
        published,
        author: {
            connect: {
                id: authorId
            },
        },
        updatedAt: new Date()
      },
    });

    return response.json(post);
  }
}