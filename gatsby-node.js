const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require("slug");
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    if (fileNode.relativePath.includes("posts")) {
      const filename = createFilePath({ node, getNode, basePath: `posts` });

      const [, date, title] = filename.match(
        /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
      );

      const slug = `/${slugify([date].join("-"), "/")}/${title}/`;

      createNodeField({ node, name: `type`, value: "blog" });
      createNodeField({ node, name: `slug`, value: slug });
      createNodeField({ node, name: `date`, value: date });
    } else {
      const filename = createFilePath({ node, getNode });
      createNodeField({ node, name: `slug`, value: filename });
    }
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { type: { eq: "blog" } } }
          sort: { order: DESC, fields: [fields___date] }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const posts = result.data.allMarkdownRemark.edges;
    const postsPerPage = 10;
    const numPages = Math.ceil(posts.length / postsPerPage);

    // Create blog lists
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });

    // Create blog posts
    result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug
        }
      });
    });
  });
};
