import { Context } from "../utils";

export const Query = {
  feed(parent, args, context: Context) {
    return context.prisma.posts({ where: { published: true } });
  },
  drafts(parent, args, context: Context) {
    return context.prisma.posts({ where: { published: false } });
  },
  post(parent, { id }, context: Context) {
    return context.prisma.post({ id });
  }
};
