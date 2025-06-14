/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://zeyadmaher.com', // قم بتغيير هذا إلى دومين موقعك
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://zeyadmaher.com/sitemap.xml', // قم بتغيير هذا إلى دومين موقعك
    ],
  },
  changefreq: 'weekly',
  priority: 1.0,
  generateIndexSitemap: false,
}
