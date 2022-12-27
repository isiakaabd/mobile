module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
<<<<<<< HEAD
        "babel-plugin-root-import",
        {
          paths: [
            {
              rootPathPrefix: "~",
              rootPathSuffix: "src",
            },
            // {
            //   rootPathSuffix: "./src/components",
            //   rootPathPrefix: "~/",
            // },
          ],
=======
        "module-resolver",
        {
          root: ["./src"],
>>>>>>> ac6b9fd12829920f61efb0ce09cc071768de9498
        },
      ],
    ],
  };
};
