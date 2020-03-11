import { Context } from "../../utils";

export const post = {
  createDraft(parent, { title, content }, context: Context) {
    return context.prisma.createPost({ title, content });
  },
  deletePost(parent, { id }, context: Context) {
    return context.prisma.deletePost({ id });
  },
  publish(parent, { id }, context: Context) {
    return context.prisma.updatePost({
      where: { id },
      data: { published: true }
    });
  }
};
