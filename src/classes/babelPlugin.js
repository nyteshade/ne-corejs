import { Singleton } from './singleton.js'
import { ESLintMetaType } from '../enums/eslintMetaType.js'
import { keysToDescriptors } from '../functions/reducers.js'

export class BabelPlugin extends Singleton {
  babel() { return { } }

  eslint() {
    const {
      description,
      recommended,
      url,
      type,
      fixable,
      hasSuggestions,
      schema,
      deprecated,
      replacedBy,
    } = this.lint

    const plugin = {
      meta: {
        type,
        docs: {
          description,
          recommended,
          url,
        }
      },
      fixable,
      hasSuggestions,
      schema,
      deprecated,
      replacedBy,

      // https://eslint.org/docs/latest/extend/custom-rules#the-context-object
      create(context) {
        // type for context is: {
        //   id: string;
        //   filename: string;
        //   physicalFilename: string;
        //   cwd: string;
        //   options: array;
        //   sourceCode: object;
        //   parserPath: string;
        //   parserServices: object; // deprecated: use SourceCode#parserServices instead
        //   parserOptions: {
        //     ecmaVersion: string; // 3,5(default),6-15 (matching 2015-2024) or latest
        //     sourceType: string; // 'script' or 'module'
        //     allowReserved: boolean;
        //     ecmaFeatures: {
        //       globalReturn: boolean;
        //       impliedStrict: boolean;
        //       jsx: boolean;
        //     }
        //   }
        // }
        return { }
      },
    }


  }

  get lint() {
    // https://eslint.org/docs/latest/extend/custom-rules#rule-structure
    const store = this.#store.get('lint') ?? {
      description: '',
      recommended: undefined,
      url: undefined,
      type: ESLintMetaType.problem,
      fixable: undefined,
      hasSuggestions: undefined,
      schema: undefined,
      deprecated: undefined,
      replacedBy: undefined,
    }

    if (!this.#store.has('lint')) {
      this.#store.set('lint', store)
    }

    return store
  }

  set lint(value) {
    this.#store.set('lint', value)
  }

  #store = new Map()
}