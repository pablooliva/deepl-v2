import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'de.pablooliva.deeplv2',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  appPath: 'src'
} as NativeScriptConfig;
