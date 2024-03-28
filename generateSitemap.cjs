const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

async function generateSitemap() {
  const sitemapStream = new SitemapStream({
    hostname: "https://totoantonio.github.io/luckgenerator/", // Replace with your website URL
  });

  // Add URLs to the sitemap
  sitemapStream.write({ url: "/" }); // Example homepage URL
  // Add more URLs as needed

  sitemapStream.end();

  // Convert the sitemap stream to a readable stream
  const sitemapXML = await streamToPromise(Readable.from(sitemapStream));

  // Write sitemap XML to file
  fs.writeFileSync("public/sitemap.xml", sitemapXML); // Adjust the file path as needed
}

generateSitemap()
  .then(() => {
    console.log("Sitemap generated successfully.");
  })
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });
