import { AbstractEditor } from './editor'
import { AbstractTheme } from './theme'
import { AbstractIconLib } from './iconlib'
import { Languages } from './defaults'

export interface DefaultOptions {
  upload: Function
  prompt_before_delete: boolean,
  use_default_values: boolean,
  max_depth: number
}

export interface Defaults {
  iconlib?: AbstractIconLib,
  options: DefaultOptions,
  theme: string,
  template: string | TemplateEngine,
  themes: { [key: string]: AbstractTheme },
  callbacks: any,
  templates: { [key: string]: TemplateEngine },
  iconlibs: { [key: string]: AbstractIconLib },
  editors: { [key: string]: AbstractEditor },
  languages: Languages,
  resolvers: ((schema: Schema) => string)[],
  custom_validators: Function[],
  default_language: string,
  language: string,
  translate: (key: string, variables?: string[]) => string
  translateProperty: (key: string, variables?: string[]) => string
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

export interface TemplateEngine {
  compile(template:string): (context:Json) => string
}

export interface Schema {
  [property: string]: any;
  type :string
  options?: { [property: string]: Json }
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

export type Error = {
    path: string,
    property: string,
    message: string
  }
