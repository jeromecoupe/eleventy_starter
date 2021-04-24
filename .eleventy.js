module.exports = function (eleventyConfig) {
  // collections
  eleventyConfig.addCollection(
    "blogposts",
    require("./eleventy/collections/blogpsts.js")
  );

  // filters
  eleventyConfig.addFilter("date", require("./eleventy/filters/date.js"));
  eleventyConfig.addFilter("exclude", require("./eleventy/filters/exclude.js"));
  eleventyConfig.addFilter("include", require("./eleventy/filters/include.js"));
  eleventyConfig.addFilter("jsonify", require("./eleventy/filters/jsonify.js"));
  eleventyConfig.addFilter("sortby", require("./eleventy/filters/sortby.js"));

  // copy files
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  // deep merge
  eleventyConfig.setDataDeepMerge(true);

  // override default config
  return {
    dir: {
      input: "./src/",
      output: "./dist/",
    },
  };
};
