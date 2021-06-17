module.exports = function (eleventyConfig) {
  // collections
  eleventyConfig.addCollection(
    "blogposts",
    require("./src/_11ty/collections/blogposts.js")
  );

  // filters
  eleventyConfig.addFilter("date", require("./src/_11ty/filters/date.js"));
  eleventyConfig.addFilter(
    "exclude",
    require("./src/_11ty/filters/exclude.js")
  );
  eleventyConfig.addFilter(
    "include",
    require("./src/_11ty/filters/include.js")
  );
  eleventyConfig.addFilter(
    "jsonify",
    require("./src/_11ty/filters/jsonify.js")
  );
  eleventyConfig.addFilter("sortby", require("./src/_11ty/filters/sortby.js"));

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
