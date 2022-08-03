module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: 'react-native-dotenv',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          api: './src/api',
          colors: './src/common/colors',
          store: './src/redux',
          hooks: './src/hooks',
          components: './src/common/components',
          navigation: './src/navigation',
          defaultTypes: './src/types/defaultTypes',
          testing: './src/testing',
          constants: './src/common/constants',
          screens: './src/screens',
        },
      },
    ],
  ],
};
