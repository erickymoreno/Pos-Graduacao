export class CreatePostDto {
  id: number;

  title: string;

  description: string;

  author: string;

  slug: string;

  published: boolean;

  category: number;
}
