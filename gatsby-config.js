let siteConfig;
let wordpressConfig;

try {
  siteConfig = require(`./siteConfig`);
  wordpressConfig = require(`./.wordpress-config`);

  console.log(wordpressConfig);
} catch (e) {
  console.log(e);
}

module.exports = {
  plugins: [
    {
      resolve: `@armada-inc/gatsby-wordpress-theme-libre`,
      options: {
        wordpressConfig,
        siteConfig: siteConfig
      }
    }
  ]
};
