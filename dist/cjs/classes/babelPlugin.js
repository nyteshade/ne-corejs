"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BabelPlugin_store;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BabelPlugin = void 0;
const singleton_js_1 = require("./singleton.js");
const eslintMetaType_js_1 = require("../enums/eslintMetaType.js");
const reducers_js_1 = require("../functions/reducers.js");
class BabelPlugin extends singleton_js_1.Singleton {
    constructor() {
        super(...arguments);
        _BabelPlugin_store.set(this, new Map());
    }
    babel() { return {}; }
    eslint() {
        const { description, recommended, url, type, fixable, hasSuggestions, schema, deprecated, replacedBy, } = this.lint;
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
                return {};
            },
        };
    }
    get lint() {
        // https://eslint.org/docs/latest/extend/custom-rules#rule-structure
        const store = __classPrivateFieldGet(this, _BabelPlugin_store, "f").get('lint') ?? {
            description: '',
            recommended: undefined,
            url: undefined,
            type: eslintMetaType_js_1.ESLintMetaType.problem,
            fixable: undefined,
            hasSuggestions: undefined,
            schema: undefined,
            deprecated: undefined,
            replacedBy: undefined,
        };
        if (!__classPrivateFieldGet(this, _BabelPlugin_store, "f").has('lint')) {
            __classPrivateFieldGet(this, _BabelPlugin_store, "f").set('lint', store);
        }
        return store;
    }
    set lint(value) {
        __classPrivateFieldGet(this, _BabelPlugin_store, "f").set('lint', value);
    }
}
exports.BabelPlugin = BabelPlugin;
_BabelPlugin_store = new WeakMap();
