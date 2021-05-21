import { trigger } from './utilities'

const matchKey = [
  'matches',
  'webkitMatchesSelector',
  'mozMatchesSelector',
  'msMatchesSelector',
  'oMatchesSelector'].find(key => key in document.documentElement)

export class AbstractTheme {
  /**
   *
   * @param {import("./core").JSONEditor} jsoneditor
   * @param {{[key:string]:import("./type").Json}} options
   */
  constructor (jsoneditor, options = { disable_theme_rules: false }) {
    this.jsoneditor = jsoneditor
    Object.keys(options).forEach(key => {
      if (typeof jsoneditor.options[key] !== 'undefined') {
        options[key] = jsoneditor.options[key]
      }
    })
    /* Theme config options that allows changing various aspects of the output */
    this.options = options
  }

  /**
   * @returns {HTMLElement}
   */
  getContainer () {
    return document.createElement('div')
  }

  /**
   * @returns {HTMLElement}
   */
  getFloatRightLinkHolder () {
    const el = document.createElement('div')
    el.classList.add('je-float-right-linkholder')
    return el
  }

  /**
   * @returns {HTMLElement}
   */
  getModal () {
    const el = document.createElement('div')
    el.style.display = 'none'
    el.classList.add('je-modal')
    return el
  }

  /**
   * @returns {HTMLElement}
   */
  getGridContainer () {
    const el = document.createElement('div')
    return el
  }

  /**
   * @returns {HTMLElement}
   */
  getGridRow () {
    const el = document.createElement('div')
    el.classList.add('row')
    return el
  }

  /**
   * @returns {HTMLElement}
   */
  getGridColumn () {
    const el = document.createElement('div')
    return el
  }

  /**
   * Applies grid size to specified element.
   *
   * @param {HTMLElement} el The DOM element to have specified size applied.
   * @param {number} size The grid column size.
   */
  setGridColumnSize (el, size) {
  }

  /**
   *
   * @param {string} text
   */
  getLink (text) {
    const el = document.createElement('a')
    el.setAttribute('href', '#')
    el.appendChild(document.createTextNode(text))
    return el
  }

  /**
   *
   * @param {HTMLElement} header
   */
  disableHeader (header) {
    header.style.color = '#ccc'
  }

  /**
   *
   * @param {HTMLElement} label
   */
  disableLabel (label) {
    label.style.color = '#ccc'
  }

  /**
   *
   * @param {HTMLElement} header
   */
  enableHeader (header) {
    header.style.color = ''
  }

  /**
   *
   * @param {HTMLElement} label
   */
  enableLabel (label) {
    label.style.color = ''
  }

  /**
   *
   * @param {string} text
   */
  getInfoButton (text) {
    const icon = document.createElement('span')
    icon.innerText = 'ⓘ'
    icon.classList.add('je-infobutton-icon')

    const tooltip = document.createElement('span')
    tooltip.classList.add('je-infobutton-tooltip')
    tooltip.innerText = text
    icon.onmouseover = () => {
      tooltip.style.visibility = 'visible'
    }
    icon.onmouseleave = () => {
      tooltip.style.visibility = 'hidden'
    }

    icon.appendChild(tooltip)

    return icon
  }

  /**
   *
   * @param {string} text
   * @param {boolean} req
   */
  getFormInputLabel (text, req) {
    const el = document.createElement('label')
    el.appendChild(document.createTextNode(text))
    if (req) el.classList.add('required')
    return el
  }

  /**
   * Gets a header element.
   *
   * @param {string|HTMLElement} text The header text or element.
   * @param {number} pathDepth
   * @returns {HTMLElement} The header element.
   */
  getHeader (text, pathDepth) {
    const el = document.createElement('h3')
    if (typeof text === 'string') {
      el.textContent = text
    } else {
      el.appendChild(text)
    }
    el.classList.add('je-header')

    return el
  }

  getCheckbox () {
    const el = this.getFormInputField('checkbox')
    el.classList.add('je-checkbox')
    return el
  }

  /**
   *
   * @param {string} text
   * @param {boolean} req
   */
  getCheckboxLabel (text, req) {
    const el = document.createElement('label')
    el.appendChild(document.createTextNode(`\u00A0${text}`))
    if (req) el.classList.add('required')
    return el
  }

  /**
   *
   * @param {{ [key:string]:HTMLElement }} controls
   * @param {HTMLElement} label
   * @param {HTMLElement} description
   * @param {string} infoText
   */
  getMultiCheckboxHolder (controls, label, description, infoText) {
    const el = document.createElement('div')
    el.classList.add('control-group')

    if (label) {
      label.style.display = 'block'
      el.appendChild(label)
      if (infoText) label.appendChild(infoText)
    }

    Object.values(controls).forEach(control => {
      control.style.display = 'inline-block'
      control.style.marginRight = '20px'
      el.appendChild(control)
    })

    if (description) el.appendChild(description)

    return el
  }

  /**
   *
   * @param {HTMLElement} label
   * @param {HTMLElement} input
   * @param {boolean|undefined} compact
   */
  getFormCheckboxControl (label, input, compact) {
    const el = document.createElement('div')
    el.appendChild(label)
    input.style.width = 'auto'
    label.insertBefore(input, label.firstChild)
    if (compact) {
      el.classList.add('je-checkbox-control--compact')
    }

    return el
  }

  /**
   *
   * @param {{[key:string]:string}} attributes
   */
  getFormRadio (attributes) {
    const el = this.getFormInputField('radio')
    Object.keys(attributes).forEach(key => el.setAttribute(key, attributes[key]))
    el.classList.add('je-radio')
    return el
  }

  /**
   *
   * @param {string} text
   * @param {boolean|undefined} req
   */
  getFormRadioLabel (text, req) {
    const el = document.createElement('label')
    el.appendChild(document.createTextNode(`\u00A0${text}`))
    if (req) el.classList.add('required')
    return el
  }

  /**
   *
   * @param {HTMLElement} label
   * @param {HTMLInputElement} input
   * @param {boolean|undefined} compact
   */
  getFormRadioControl (label, input, compact) {
    const el = document.createElement('div')
    el.appendChild(label)
    input.style.width = 'auto'
    label.insertBefore(input, label.firstChild)
    if (compact) {
      el.classList.add('je-radio-control--compact')
    }

    return el
  }

  /**
   *
   * @param {string[]} options
   * @param {boolean} multiple
   */
  getSelectInput (options, multiple) {
    const select = document.createElement('select')
    if (options) this.setSelectOptions(select, options)
    return select
  }

  /**
   *
   * @param {string[]} options
   */
  getSwitcher (options) {
    const switcher = this.getSelectInput(options, false)
    switcher.classList.add('je-switcher')
    return switcher
  }

  /**
   *
   * @param {HTMLElement} switcher
   */
  getSwitcherOptions (switcher) {
    return switcher.getElementsByTagName('option')
  }

  setSwitcherOptions (switcher, options, titles) {
    this.setSelectOptions(switcher, options, titles)
  }

  /**
   *
   * @param {HTMLElement} select
   * @param {string[]} options
   * @param {string[]} titles
   */
  setSelectOptions (select, options, titles = []) {
    select.innerHTML = ''
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement('option')
      option.setAttribute('value', options[i])
      option.textContent = titles[i] || options[i]
      select.appendChild(option)
    }
  }

  getTextareaInput () {
    const el = document.createElement('textarea')
    el.classList.add('je-textarea')
    return el
  }

  /**
   *
   * @param {number} min
   * @param {number} max
   * @param {number} step
   */
  getRangeInput (min, max, step) {
    const el = this.getFormInputField('range')
    el.setAttribute('min', min)
    el.setAttribute('max', max)
    el.setAttribute('step', step)
    return el
  }

  /**
   *
   * @param {HTMLElement} input
   */
  getStepperButtons (input) {
    const div = document.createElement('div')

    const minusBtn = document.createElement('button')
    minusBtn.setAttribute('type', 'button')
    minusBtn.classList.add('stepper-down')

    const plusBtn = document.createElement('button')
    plusBtn.setAttribute('type', 'button')
    plusBtn.classList.add('stepper-up')

    const readonly = input.getAttribute('readonly')

    if (readonly) {
      minusBtn.setAttribute('disabled', true)
      plusBtn.setAttribute('disabled', true)
    }

    minusBtn.textContent = '-'
    plusBtn.textContent = '+'

    const initialize = (input, min) => {
      if (min) {
        input.value = Number(min)
      } else {
        input.value = Number(input.value)
      }
      input.setAttribute('initialized', '1')
    }

    const min = input.getAttribute('min')
    const max = input.getAttribute('max')

    minusBtn.addEventListener('click', () => {
      if (!input.getAttribute('initialized')) {
        initialize(input, min)
      } else if (min) {
        if (Number(input.value) > Number(min)) {
          input.stepDown()
        }
      } else {
        input.stepDown()
      }
      trigger(input, 'change')
    })

    plusBtn.addEventListener('click', () => {
      if (!input.getAttribute('initialized')) {
        initialize(input, min)
      } else if (max) {
        if (Number(input.value) < Number(max)) {
          input.stepUp()
        }
      } else {
        input.stepUp()
      }
      trigger(input, 'change')
    })

    div.appendChild(minusBtn)
    div.appendChild(plusBtn)
    return div
  }

  /**
   *
   * @param {HTMLInputElement} input
   * @param {number?} startvalue
   */
  getRangeOutput (input, startvalue) {
    const output = document.createElement('output')
    output.value = startvalue || 0

    const updateOutput = e => { output.value = e.currentTarget.value }
    input.addEventListener('change', updateOutput, false)
    input.addEventListener('input', updateOutput, false)
    return output
  }

  /**
   *
   * @param {HTMLElement} input
   * @param {HTMLElement} output
   * @return {HTMLElement}
   */
  getRangeControl (input, output) {
    const el = document.createElement('div')
    el.classList.add('je-range-control')
    if (output) el.appendChild(output)
    el.appendChild(input)
    return el
  }

  /**
   *
   * @param {string} type
   */
  getFormInputField (type) {
    const el = document.createElement('input')
    el.setAttribute('type', type)
    return el
  }

  /**
   *
   * @param {HTMLElement} input
   */
  afterInputReady (input) {

  }

  /**
   * Gets a form control object consisiting of several sub objects.
   *
   * @param {HTMLElement} label The label element.
   * @param {HTMLElement} input The input element.
   * @param {string} description The element description.
   * @param {string} infoText The element information text.
   * @returns {HTMLElement} The assembled DOM element.
   */
  getFormControl (label, input, description, infoText) {
    const el = document.createElement('div')
    el.classList.add('form-control')
    if (label) el.appendChild(label)
    if ((input.type === 'checkbox' || input.type === 'radio') && label) {
      input.style.width = 'auto'
      label.insertBefore(input, label.firstChild)
      if (infoText) label.appendChild(infoText)
    } else {
      if (infoText && label) label.appendChild(infoText)
      el.appendChild(input)
    }

    if (description) el.appendChild(description)
    return el
  }

  /**
   * @return {HTMLElement}
   */
  getIndentedPanel () {
    const el = document.createElement('div')
    el.classList.add('je-indented-panel')
    return el
  }

  /**
   * @return {HTMLElement}
   */
  getTopIndentedPanel () {
    const el = document.createElement('div')
    el.classList.add('je-indented-panel--top')
    return el
  }

  /**
   * @return {HTMLElement}
   */
  getChildEditorHolder () {
    return document.createElement('div')
  }

  /**
   *
   * @param {string} text
   */
  getDescription (text) {
    const el = document.createElement('p')
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  }

  /**
   *
   * @param {string} text
   */
  getCheckboxDescription (text) {
    return this.getDescription(text)
  }

  /**
   *
   * @param {string} text
   */
  getFormInputDescription (text) {
    return this.getDescription(text)
  }

  /**
   *
   * @returns {HTMLElement}
   */
  getButtonHolder () {
    return document.createElement('span')
  }

  /**
   * @return {HTMLElement}
   */
  getHeaderButtonHolder () {
    return this.getButtonHolder()
  }

  /**
   *
   * @param {string} buttonAlign
   */
  getFormButtonHolder (buttonAlign) {
    return this.getButtonHolder()
  }

  /**
   * Gets a single button element.
   *
   * @param {string} text The button text.
   * @param {HTMLElement} icon The icon object.
   * @param {string} title The button title.
   * @returns {HTMLElement} The button object.
   */
  getButton (text, icon, title) {
    const el = document.createElement('button')
    el.type = 'button'
    this.setButtonText(el, text, icon, title)
    return el
  }

  /**
   * Gets a single button element.
   *
   * @param {string} text The button text.
   * @param {HTMLElement} icon The icon object.
   * @param {string} title The button title.
   * @returns {HTMLElement} The button object.
   */
  getFormButton (text, icon, title) {
    return this.getButton(text, icon, title)
  }

  /**
   *
   * @param {HTMLElement} button
   * @param {string} text
   * @param {HTMLElement} icon
   * @param {string} title
   */
  setButtonText (button, text, icon, title) {
    /* Clear previous contents. https://jsperf.com/innerhtml-vs-removechild/37 */
    while (button.firstChild) {
      button.removeChild(button.firstChild)
    }
    if (icon) {
      button.appendChild(icon)
      text = ` ${text}`
    }
    if (!this.jsoneditor.options.iconlib || !this.jsoneditor.options.remove_button_labels || !icon) {
      const spanEl = document.createElement('span')
      spanEl.appendChild(document.createTextNode(text))
      button.appendChild(spanEl)
    }
    if (title) button.setAttribute('title', title)
  }

  /* Table functions */
  getTable () {
    return document.createElement('table')
  }

  getTableRow () {
    return document.createElement('tr')
  }

  getTableHead () {
    return document.createElement('thead')
  }

  getTableBody () {
    return document.createElement('tbody')
  }

  /**
   *
   * @param {string} text
   */
  getTableHeaderCell (text) {
    const el = document.createElement('th')
    el.textContent = text
    return el
  }

  getTableCell () {
    const el = document.createElement('td')
    return el
  }

  /**
   *
   * @param {string} text
   */
  getErrorMessage (text) {
    const el = document.createElement('p')
    el.style = el.style || {}
    el.style.color = 'red'
    el.appendChild(document.createTextNode(text))
    return el
  }

  /**
   * Adds an error message to the specified input element.
   *
   * @param {HTMLElement} input The input element that caused the error.
   * @param {string} text The error message.
   */
  addInputError (input, text) {
  }

  /**
   * Removes any error message from the specified input element.
   *
   * @param {HTMLElement} input The input element that previously caused the error.
   */
  removeInputError (input) {
  }

  /**
   *
   * @param {HTMLElement} row
   */
  addTableRowError (row) {
  }

  /**
   *
   * @param {HTMLElement} row
   */
  removeTableRowError (row) {
  }

  /**
   *
   * @param {string} propertyName
   */
  getTabHolder (propertyName) {
    const pName = (typeof propertyName === 'undefined') ? '' : propertyName
    const el = document.createElement('div')
    el.innerHTML = `<div class='je-tabholder tabs'></div><div class='content' id='${pName}'></div><div class='je-tabholder--clear'></div>`
    return el
  }

  /**
   *
   * @param {string} propertyName
   */
  getTopTabHolder (propertyName) {
    const pName = (typeof propertyName === 'undefined') ? '' : propertyName
    const el = document.createElement('div')
    el.innerHTML = `<div class='tabs je-tabholder--top'></div><div class='je-tabholder--clear'></div><div class='content' id='${pName}'></div>`
    return el
  }

  /**
   *
   * @param {HTMLElement} el
   * @param {{ [key:string]: string }} styles
   */
  applyStyles (el, styles) {
    Object.keys(styles).forEach(i => (el.style[i] = styles[i]))
  }

  closest (elem, selector) {
    while (elem && elem !== document) {
      if (elem[matchKey]) {
        if (elem[matchKey](selector)) {
          return elem
        } else {
          elem = elem.parentNode
        }
      } else {
        return false
      }
    }
    return false
  }

  /**
   *
   * @param {HTMLElement} tab
   * @param {HTMLElement} newTabsHolder
   */
  insertBasicTopTab (tab, newTabsHolder) {
    newTabsHolder.firstChild.insertBefore(tab, newTabsHolder.firstChild.firstChild)
  }

  /**
   *
   * @param {HTMLElement} span
   * @param {string} tabId
   */
  getTab (span, tabId) {
    const el = document.createElement('div')
    el.appendChild(span)
    el.id = tabId
    el.classList.add('je-tab')
    return el
  }

  /**
   *
   * @param {HTMLElement} span
   * @param {string} tabId
   */
  getTopTab (span, tabId) {
    const el = document.createElement('div')
    el.appendChild(span)
    el.id = tabId
    el.classList.add('je-tab--top')
    return el
  }

  /**
   * Returns the element that holds the tab contents.
   *
   * @param {HTMLElement} tabHolder The full tab holder element.
   * @returns {HTMLElement} The content element inside specified tab holder.
   */
  getTabContentHolder (tabHolder) {
    return tabHolder.children[1]
  }

  /**
   *
   * @param {HTMLElement} tabHolder
   * @returns {HTMLElement}
   */
  getTopTabContentHolder (tabHolder) {
    return tabHolder.children[1]
  }

  /**
   * Creates and returns a tab content element.
   *
   * @returns {HTMLElement} The new tab content element.
   */
  getTabContent () {
    return this.getIndentedPanel()
  }

  getTopTabContent () {
    return this.getTopIndentedPanel()
  }

  /**
   *
   * @param {HTMLElement} row
   */
  markTabActive (row) {
    this.applyStyles(row.tab, {
      opacity: 1,
      background: 'white'
    })
    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = ''
    } else {
      row.container.style.display = ''
    }
  }

  /**
   *
   * @param {HTMLElement} row
   */
  markTabInactive (row) {
    this.applyStyles(row.tab, {
      opacity: 0.5,
      background: ''
    })
    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = 'none'
    } else {
      row.container.style.display = 'none'
    }
  }

  /**
   *
   * @param {HTMLElement} holder
   * @param {HTMLElement} tab
   */
  addTab (holder, tab) {
    holder.children[0].appendChild(tab)
  }

  /**
   *
   * @param {HTMLElement} holder
   * @param {HTMLElement} tab
   */
  addTopTab (holder, tab) {
    holder.children[0].appendChild(tab)
  }

  getBlockLink () {
    const link = document.createElement('a')
    link.classList.add('je-block-link')
    return link
  }

  /**
   * @returns {HTMLElement}
   */
  getBlockLinkHolder () {
    const el = document.createElement('div')
    return el
  }

  /**
   * @returns {HTMLElement}
   */
  getLinksHolder () {
    const el = document.createElement('div')
    return el
  }

  /**
   *
   * @param {HTMLElement} holder
   * @param {HTMLElement} link
   * @param {HTMLElement} media
   */
  createMediaLink (holder, link, media) {
    holder.appendChild(link)
    media.classList.add('je-media')
    holder.appendChild(media)
  }

  /**
   *
   * @param {HTMLElement} holder
   * @param {HTMLElement} link
   * @param {HTMLElement} image
   */
  createImageLink (holder, link, image) {
    holder.appendChild(link)
    link.appendChild(image)
  }

  /**
   *
   * @param {HTMLElement} holder
   */
  getFirstTab (holder) {
    return holder.firstChild.firstChild
  }

  /**
   *
   * @param {HTMLElement} input
   * @param {HTMLElement[]} buttons
   */
  getInputGroup (input, buttons) {
    return undefined
  }

  /**
   *
   * @param {string} txt
   */
  cleanText (txt) {
    /* Clean out HTML tags from txt */
    const tmp = document.createElement('div')
    tmp.innerHTML = txt
    return (tmp.textContent || tmp.innerText)
  }

  /**
   *
   * @param {string} text
   */
  getDropZone (text) {
    const el = document.createElement('div')
    el.setAttribute('data-text', text)
    el.classList.add('je-dropzone')
    return el
  }

  /* file is an object with properties: name, type, mimeType, size amd formattedSize */
  getUploadPreview (file, uploadButton, data) {
    const preview = document.createElement('div')
    preview.classList.add('je-upload-preview')

    if (file.mimeType.substr(0, 5) === 'image') {
      const img = document.createElement('img')
      img.src = data
      preview.appendChild(img)
    }
    const info = document.createElement('div')
    info.innerHTML += `<strong>Name:</strong> ${file.name}<br><strong>Type:</strong> ${file.type}<br><strong>Size:</strong> ${file.formattedSize}`
    preview.appendChild(info)

    preview.appendChild(uploadButton)

    const clear = document.createElement('div')
    clear.style.clear = 'left'
    preview.appendChild(clear)

    return preview
  }

  getProgressBar () {
    const max = 100; const start = 0

    const progressBar = document.createElement('progress')
    progressBar.setAttribute('max', max)
    progressBar.setAttribute('value', start)
    return progressBar
  }

  /**
   *
   * @param {HTMLElement} progressBar
   * @param {number} progress
   */
  updateProgressBar (progressBar, progress) {
    if (!progressBar) return
    progressBar.setAttribute('value', progress)
  }

  /**
   *
   * @param {HTMLElement} progressBar
   */
  updateProgressBarUnknown (progressBar) {
    if (!progressBar) return
    progressBar.removeAttribute('value')
  }
}
