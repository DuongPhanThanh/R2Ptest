module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['fr', 'fi', 'de', 'en', 'zh', 'ja', 'ru', 'pt'],
    localeDetection: false,
    serializeConfig: false,
    formatSeparator: ',',
    interpolation: {
      format: (value, rawFormat, lng) => {
        const [format, ...additionalValues] = rawFormat
          .split(',')
          .map((v) => v.trim());
        switch (format) {
          case 'uppercase':
            return value.toUpperCase();
          case 'currency':
            return Intl.NumberFormat(lng, {
              style: 'currency',
              currency: additionalValues[0],
            }).format(value);
          default:
            return value;
        }
      },
    },
  },
};
