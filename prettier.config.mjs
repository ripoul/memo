export default {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '**/*.svg',
      options: { parser: 'html' },
    },
  ],
}
