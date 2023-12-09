export default {
    stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)','../*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials','@storybook/addon-a11y',],
    framework: '@storybook/react',
    features: { emotionAlias: false },
  };