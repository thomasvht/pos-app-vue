module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-essential", // This option doesn't impose formatting rules
    // 'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability
  ],

  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          'default'
        ]
      }
    ]
  },

  'extends': [
    'plugin:vue/essential',
    'plugin:vue/vue3-essential'
  ]
};
