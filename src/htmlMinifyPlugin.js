import { minify } from "html-minifier";

export default function htmlMinifyPlugin() {
  return {
    name: "html-minify-plugin",
    transformIndexHtml(html) {
      return minify(html, {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
      });
    },
  };
}
