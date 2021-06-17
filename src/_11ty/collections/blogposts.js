const now = new Date();

module.exports = (collection) => {
  return collection
    .getFilteredByGlob("./src/content/blogposts/*.md")
    .filter((item) => item.date <= now && item.data.draft !== true)
    .sort((a, b) => b.date - a.date);
};
