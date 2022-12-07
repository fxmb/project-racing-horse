/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.tbd.de",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
