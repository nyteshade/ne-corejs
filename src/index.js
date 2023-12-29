import { Patch, Extension } from '@nejs/extension'
import { enableAll } from '@nejs/basic-extensions'

enableAll()

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

import { Hasher } from './classes/hasher.js'
import { Singleton } from './classes/singleton.js'
import { SemVer } from './classes/semver.js'

import {
  formatEntries,
  keysToDescriptorEntries,
  keysToDescriptors
} from './functions/reducers/index.js'

import { trimUndefined } from './functions/trimUndefined.js'

// Namespacing...

const classes = {
  Descriptor,
  Errors,
  Extension,
  GetProxy,
  Hasher,
  Logs,
  Patch,
  ProxyMeta,
  PubSub,
  Singleton,
  SemVer,
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