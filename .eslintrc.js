module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "plugin:jest/recommended",
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": ["jest"],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
