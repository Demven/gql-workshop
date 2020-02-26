module.exports = {
  article: (obj, args, context) => {
    const { id } = args;

    return context.database.getArticleById(id);
  },

  Article: {
    authors: (obj, args, context) => {
      const { id } = obj;

      return context.database.getAuthorsByArticleId(id);
    },
  },
};
