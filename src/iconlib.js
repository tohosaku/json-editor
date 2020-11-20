import { IconlibMapping } from './types' // eslint-disable-line no-unused-vars

const defaultMapping = { collapse: '', expand: '', delete: '', edit: '', add: '', cancel: '', save: '', moveup: '', movedown: '' }

export class AbstractIconLib {
  /**
   *
   * @param {string} iconPrefix
   * @param {IconlibMapping} mapping
   */
  constructor (iconPrefix = '', mapping = defaultMapping) {
    this.mapping = mapping
    this.icon_prefix = iconPrefix
  }

  /**
   *
   * @param {string} key
   */
  getIconClass (key) {
    return this.mapping[key] ? this.icon_prefix + this.mapping[key] : null
  }

  /**
   *
   * @param {string} key
   */
  getIcon (key) {
    const iconclass = this.getIconClass(key)

    if (!iconclass) return null

    const i = document.createElement('i')
    i.classList.add(...iconclass.split(' '))

    return i
  }
}
