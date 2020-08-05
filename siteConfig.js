module.exports = {
  siteUrl: "https://wp-libre-preview.draftbox.co", // Site domain. Do not include a trailing slash!

  postsPerPage: 10, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "Built with Draftbox", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta: "New-age blogging platform", // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "Built with Draftbox", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://wordpress.theasdfghjkl.com",
  subscribeWidget: {
    visible: true,
    title: "Subscribe to Draftbox",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Draftbox.",
  },
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://wp-libre-preview.draftbox.co/",
      },
      {
        label: "Contact",
        url: "https://wp-libre-preview.draftbox.co/contact",
      },
    ],
  },
  footer: {
    copyright: "Built with Draftbox",
    navigation: [
      {
        label: "Home",
        url: "https://wp-libre-preview.draftbox.co/",
      },
      {
        label: "Sitemap",
        url: "https://wp-libre-preview.draftbox.co/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://wp-libre-preview.draftbox.co/rss.xml",
      },
      {
        label: "Contact",
        url: "https://wp-libre-preview.draftbox.co/contact",
      },
      {
        label: "External Link",
        url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      },
    ],
  },
  socialLinks: {
    twitter: "https://twitter.com/draftboxhq",
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/draftbox-co",
    whatsapp: "",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
  },
  contactWidget: {
    title: "Contact Built with Draftbox",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
  },
  twitterCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "facebookImage.png",
    appId: "2391725224459953",
  },
  siteTitle: "Built with Draftbox",
  siteDescription:
    "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding.",
  language: "en",
  logoUrl: "logo.png",
  iconUrl: "favicon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "logo.png",
  themeConfig: {
    fonts: [
      {
        family: "Libre Baskerville",
        variants: ["400", "700"],
        fontDisplay: "swap",
        strategy: "selfHosted",
      },
      {
        family: "Source Code Pro",
        variants: ["400", "700"],
        fontDisplay: "swap",
        strategy: "selfHosted",
      },
    ],
    variables: [
      {
        varName: "--page-background",
        value: "#ede6dd",
      },
      {
        varName: "--primary-font",
        value: "Libre Baskerville",
      },
      {
        varName: "--primary-font-normal",
        value: "400",
      },
      {
        varName: "--primary-font-bold",
        value: "700",
      },
      {
        varName: "--primary-color",
        value: "#438d8d",
      },
      {
        varName: "--secondary-font",
        value: "Source Code Pro",
      },
      {
        varName: "--secondary-font-normal",
        value: "400",
      },
      {
        varName: "--secondary-font-bold",
        value: "700",
      },
      {
        varName: "--secondary-color",
        value: "#5e4f40",
      },
    ],
  },
};
