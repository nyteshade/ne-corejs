import { emitEnum } from "@nyteshade/ne-reflection";
export const ESLintMetaFixable = emitEnum('ESLintMetaFixable', [
    ['code', [
            'identifies issues that can be fixed by modifying the code',
            'itself, you will need to implement a fixer function in',
            'your plugin\'s rule. The fixer function receives the context',
            'of the violation and returns an object with the following',
            'properties: `range` and `text`',
        ].join(' ')],
    ['whitespace', [
            'Identifies issues related to whitespace, such as missing',
            'indentation or inconsistent line breaks, you can utilize',
            'the fixer function\'s built-in methods like insertTextAfter,',
            'insertTextBefore, and removeRange',
        ].join(' ')],
]);
