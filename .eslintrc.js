"use strict";
module.exports = {
	plugins: [
		"@typescript-eslint",
		"eslint-comments",
		"promise",
		"unicorn",
	],
	extends: [
		"airbnb-typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:eslint-comments/recommended",
		"plugin:promise/recommended",
		"plugin:unicorn/recommended",
		"prettier",
	],
	env: {
		node: true,
		browser: true,
		jest: true,
	},
	parserOptions: {
		project: "./tsconfig.json"
	},
	rules: {
		// As agreed we will use tabs for indentation
        "indent": ["warn", "tab"],
        "lines-around-directive": 0,
        "global-require": 0,
		// Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        "no-prototype-builtins": "off",
        "no-buffer-constructor": 0,
        "no-new-require": 0,
        "no-path-concat": 0,
		// https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
		"import/prefer-default-export": "off",
		"import/no-default-export": "error",
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		// Use function hoisting to improve code readability
		"no-use-before-define": [
			"error",
			{functions: false, classes: true, variables: true},
		],
		"react/jsx-indent": "off",
		"react/jsx-indent-props": "off",
		"@typescript-eslint/no-use-before-define": [
			"error",
			{functions: false, classes: true, variables: true, typedefs: true},
		],
		// Common abbreviations are known and readable
		"unicorn/prevent-abbreviations": "off",
	},
}