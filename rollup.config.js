import postcss from "rollup-plugin-postcss";
import postcssUrl from "postcss-url";
import postcssImport from "postcss-import";
import { join } from "path";
import NpmImport from 'less-plugin-npm-import';

const assetsDirName = "assets";
const outWidgetDir = join("mendixcn", "/", "protable");

const cssUrlTransform = asset =>
  asset.url.startsWith(`${assetsDirName}/`) ? `${outWidgetDir}/${asset.url}` : asset.url;

export default args => {
  const production = Boolean(args.configProduction);
  const result = args.configDefaultConfig;
  const [jsConfig, mJsConfig] = result;

  [jsConfig, mJsConfig].forEach(config => {
    console.assert(config.plugins[5].name === "postcss", "修改postcss");
    const outputFormat = config.output.format;

    config.plugins[5] = postcss({
      extensions: [".css", ".less"],
      extract: outputFormat === "amd",
      inject: false,
      minimize: production,
      plugins: [
        postcssImport(),
        postcssUrl({ url: "copy", assetsPath: "assets" }),
        postcssUrl({ url: cssUrlTransform })
      ],
      sourceMap: !production ? "inline" : false,
      //credit https://github.com/egoist/rollup-plugin-postcss/issues/140#issuecomment-1005707931
      use: [['less', {
        javascriptEnabled: true,
        plugins: [
          new NpmImport({ prefix: '~' })
        ],
      }]],
      to: join(__dirname, `dist/tmp/ProTable.css`)
    });

    const onwarn = config.onwarn;
    config.onwarn = warning => {
      if (
        warning.loc &&
        warning.loc.file &&
        warning.loc.file.includes("node_modules")
      ) {
        return;
      }
      if ([
        'NAMESPACE_CONFLICT',
        'CIRCULAR_DEPENDENCY',
        'EVAL'
      ].includes(warning.code)) return;

      onwarn(warning);
    };
  });

  return result;
};
