import { emitEnum } from "@nyteshade/ne-reflection";

export const ESLintMetaType = emitEnum('ESLintMetaType', [
  ['problem', [
    'The rule is identifying code that either will cause an',
    'error or may cause a confusing behavior. Developers',
    'should consider this a high priority to resolve.',
  ].join(' ')],

  ['suggestion', [
    'The rule is identifying something that could be done',
    'in a better way but no errors will occur if the code',
    'isn\'t changed.',
  ].join(' ')],

  ['layout', [
    'The rule cares primarily about whitespace, semicolons,',
    'commas, and parentheses, all the parts of the program',
    'that determine how the code looks rather than how it',
    'executes. These rules work on parts of the code that',
    'aren\'t specified in the AST.',
  ].join(' ')]
])