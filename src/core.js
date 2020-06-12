import { defaults } from './defaults.js'
import { editors } from './editors/index.js'
import { templates } from './templates/index.js'
import { iconlibs } from './iconlibs/index.js'
import { themes } from './themes/index.js'
import { AbstractEditor } from './editor'
import { AbstractTheme } from './theme'
import { AbstractIconLib } from './iconlib'
import { JSONEditor } from './jsoneditor'

JSONEditor.defaults = defaults
JSONEditor.AbstractEditor = AbstractEditor
JSONEditor.AbstractTheme = AbstractTheme
JSONEditor.AbstractIconLib = AbstractIconLib

Object.assign(JSONEditor.defaults.themes, themes)
Object.assign(JSONEditor.defaults.editors, editors)
Object.assign(JSONEditor.defaults.templates, templates)
Object.assign(JSONEditor.defaults.iconlibs, iconlibs)
