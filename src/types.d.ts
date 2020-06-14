import { AbstractEditor } from './editor'
import { AbstractTheme } from './theme'
import { AbstractIconLib } from './iconlib'
import { Languages } from './defaults'

export interface Options {
  upload: Function
  prompt_before_delete: boolean,
  use_default_values: boolean,
  max_depth: number
}

export interface Defaults {
  options: Options,
  theme: string,
  template: string,
  themes: { [key: string]: AbstractTheme },
  callbacks: any,
  templates: { [key: string]: Function },
  iconlibs: { [key: string]: AbstractIconLib },
  editors: { [key: string]: AbstractEditor },
  languages: Languages,
  resolvers: ((schema: Object) => string)[],
  custom_validators: Function[],
  default_language: string,
  language: string,
  translate: (key: string, variables: string[]) => string
}

export interface IconlibMapping {
   collapse: string
   expand: string
   delete: string
   edit: string
   add: string
   cancel: string
   save: string
   moveup: string
   movedown: string
}
