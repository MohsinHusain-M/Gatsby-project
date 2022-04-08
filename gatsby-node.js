exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: { allChecCategory },
  } = await graphql(`
    {
      allChecCategory {
        node {
          id
          slug
        }
      }
    }
  `);

  allChecCategory.nodes.forEach(({ id, slug }) =>
    createPage({
      path: `/categories/${slug}`,
      component: require.resolve(`./src/templates/CategoryPage.js`),
      context: {
        id,
      },
    })
  );
};
