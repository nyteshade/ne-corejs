import {
  Errors,
  PubSub,
  Logs,
  CreateLocalErrors
} from '@nyteshade/ne-pubsub'

import {
  Descriptor,
  WriteTarget,
  ConflictResolution,
  WriteNotAllowedError,
  NEReflect,
  GetProxy,
  ProxyMeta,
  ArrayValuesAsEntriesReducer,
  ArrayValuesAsKeysAndDescsReducer,
  ObjectToKeysAndSymbolsReducer,
  EntriesToObjectReducer,
  MergedObjToDescriptorsReducer,
  stripNullish,
  objectCopy,
  emitEnum,
  maskAsString,
  asBigIntObject,
  toInstance,
  isPrimitive,
} from '@nyteshade/ne-reflection'

import { Hasher } from './classes/hasher.cjs'
import { Extension } from './classes/extension.cjs'
import { ExtensionManager } from './classes/extensionManager.cjs'
import { Singleton } from './classes/singleton.cjs'

import {
  formatEntries,
  keysToDescriptorEntries,
  keysToDescriptors
} from './functions/reducers/index.cjs'

import { trimUndefined } from './functions/trimUndefined.cjs'

// Namespacing...

const classes = {
  Descriptor,
  Errors,
  Extension,
  ExtensionManager,
  GetProxy,
  Hasher,
  Logs,
  ProxyMeta,
  PubSub,
  Singleton,
}

const functions = {

}

const utils = {
  asBigIntObject,
  CreateLocalErrors,
  emitEnum,
  isPrimitive,
  maskAsString,
  objectCopy,
  stripNullish,
  toInstance,
  trimUndefined,
}

const enums = {
  ConflictResolution,
  WriteTarget,
}

const errors = {
  WriteNotAllowedError,
}

const extensions = {
  NEReflect,
}

const reducers = {
  ArrayValuesAsEntriesReducer,
  ArrayValuesAsKeysAndDescsReducer,
  EntriesToObjectReducer,
  formatEntries,
  keysToDescriptorEntries,
  keysToDescriptors,
  MergedObjToDescriptorsReducer,
  ObjectToKeysAndSymbolsReducer,
}

export {
  classes,
  enums,
  errors,
  extensions,
  reducers,
  utils,
}