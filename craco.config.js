const path = require('path');
const CracoLessPlugin = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');
const { when } = require('@craco/craco');
module.exports = function ({ env }) {
  return {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: getThemeVariables({
                // dark: true,
                compact: true,
              }),
              javascriptEnabled: true,
            },
          },
        },
      },
    ],

    typescript: {
      enableTypeChecking: true /* (default value)  */,
    },

    devServer: {
      open: false,
      // before(app) {
      //   // import on demand because when building prod env, there's no mocker-api
      //   when(
      //     env === 'development' && process.env.REACT_APP_ENV === 'mock',
      //     () => {
      //       const apiMocker = require('mocker-api');
      //       apiMocker(app, path.resolve('./mock/index.js'));
      //     }
      //   );
      // },
    },
  };
};
