module.exports = function(eleventyConfig) {
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  
  eleventyConfig.addCollection("posts", function(collection) {
      return collection.getFilteredByGlob("posts/**/*.md");
  });
}
