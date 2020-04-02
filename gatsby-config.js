let siteConfig;
let wordpressConfig;

try {
  siteConfig = require(`./siteConfig`);
  wordpressConfig = require(`./.wordpress-config`);

  console.log(wordpressConfig);
} catch (e) {
  console.log(e);
}

let gatsbyPlugins = [
  {
    resolve: `@armada-inc/gatsby-wordpress-theme-libre`,
    options: {
      wordpressConfig,
      siteConfig: siteConfig
    }
  }
]

if(process.env.SEGMENT_KEY) {
  gatsbyPlugins.push({
    resolve: `gatsby-plugin-segment-js`,
    options: {
      prodKey: process.env.SEGMENT_KEY,
      devKey: process.env.SEGMENT_KEY,
      trackPage: true,
      delayLoad: true,
      delayLoadTime: 1000
    }
  });
}

if(process.env.GA) {
  gatsbyPlugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GA,
      head: false,
      pageTransitionDelay: 0,
      sampleRate: 5,
      siteSpeedSampleRate: 10
    }
  });
}


module.exports = {
  plugins: gatsbyPlugins
};
