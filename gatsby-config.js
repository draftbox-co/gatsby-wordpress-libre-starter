let siteConfig;
let wordpressConfig;

try {
  siteConfig = require(`./siteConfig`);
  wordpressConfig = require(`./.wordpress-config`);
} catch (e) {
  console.log(e);
}

console.log(typeof process.env.WP_HOSTING_WPCOM);
const hostingWPCOM = process.env.WP_HOSTING_WPCOM &&  process.env.WP_HOSTING_WPCOM === "true" ? true: false; 
if (process.env.WP_BASE_URL) {
  wordpressConfig.baseUrl = process.env.WP_BASE_URL; 
  if (hostingWPCOM) {
    wordpressConfig.hostingWPCOM = true;
    wordpressConfig.auth = {};
    wordpressConfig.auth.wpcom_app_clientSecret = process.env.WP_CLI_SEC;
    wordpressConfig.auth.wpcom_app_clientId = process.env.WP_CLI_ID;
    wordpressConfig.auth.wpcom_user = process.env.WP_USER;
    wordpressConfig.auth.wpcom_pass = process.env.WP_PASS;
    wordpressConfig.includedRoutes.push("**/settings");
  }
}

console.log(wordpressConfig);

let gatsbyPlugins = [
  {
    resolve: `@armada-inc/gatsby-wordpress-theme-libre`,
    options: {
      wordpressConfig,
      siteConfig: siteConfig,
    },
  },
];

if (process.env.SEGMENT_KEY) {
  gatsbyPlugins.push({
    resolve: `gatsby-plugin-segment-js`,
    options: {
      prodKey: process.env.SEGMENT_KEY,
      devKey: process.env.SEGMENT_KEY,
      trackPage: true,
      delayLoad: true,
      delayLoadTime: 1000,
    },
  });
}

if (process.env.GA) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GA,
      head: true,
    },
  });
}

gatsbyPlugins.push({
  resolve: 'gatsby-plugin-robots-txt',
  options: {
    host: siteConfig.siteUrl,
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    policy: [{ userAgent: '*', disallow: ['/'] }]
  }
})

module.exports = {
  plugins: gatsbyPlugins,
};
