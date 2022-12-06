/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.puppypals.de",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
