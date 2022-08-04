module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/base", "plugin:vue/essential", "plugin:vue/strongly-recommended"],
    rules: {
        "vue/multi-word-component-names" : 0,
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
        }],
        // "vue/html-closing-bracket-newline": ["error", {
        //     "singleline": "never",
        //     "multiline": "never"
        // }],
        // "vue/no-parsing-error": [2, { "invalid-first-character-of-tag-name": false }],
        // "vue/attribute-hyphenation": "never",
        // "vue/script-indent": ["error", 4],
        // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    // parserOptions: {
    //     parser: "babel-eslint"
    // }
};
