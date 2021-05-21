// Generated by dts-bundle-generator v5.9.0

declare class AbstractTheme {
	/**
	 *
	 * @param {JSONEditor} jsoneditor
	 * @param {{[key:string]:Json}} options
	 */
	constructor(jsoneditor: JSONEditor, options?: {
		[key: string]: any;
	});
	jsoneditor: JSONEditor;
	options: {
		[key: string]: any;
	};
	/**
	 * @returns {HTMLElement}
	 */
	getContainer(): HTMLElement;
	/**
	 * @returns {HTMLElement}
	 */
	getFloatRightLinkHolder(): HTMLElement;
	/**
	 * @returns {HTMLElement}
	 */
	getModal(): HTMLElement;
	/**
	 * @returns {HTMLElement}
	 */
	getGridContainer(): HTMLElement;
	/**
	 * @returns {HTMLElement}
	 */
	getGridRow(): HTMLElement;
	/**
	 * @returns {HTMLElement}
	 */
	getGridColumn(): HTMLElement;
	/**
	 * Applies grid size to specified element.
	 *
	 * @param {HTMLElement} el The DOM element to have specified size applied.
	 * @param {number} size The grid column size.
	 */
	setGridColumnSize(el: HTMLElement, size: number): void;
	/**
	 *
	 * @param {string} text
	 */
	getLink(text: string): HTMLAnchorElement;
	/**
	 *
	 * @param {HTMLElement} header
	 */
	disableHeader(header: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} label
	 */
	disableLabel(label: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} header
	 */
	enableHeader(header: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} label
	 */
	enableLabel(label: HTMLElement): void;
	/**
	 *
	 * @param {string} text
	 */
	getInfoButton(text: string): HTMLSpanElement;
	/**
	 *
	 * @param {string} text
	 * @param {boolean} req
	 */
	getFormInputLabel(text: string, req: boolean): HTMLLabelElement;
	/**
	 * Gets a header element.
	 *
	 * @param {string|HTMLElement} text The header text or element.
	 * @param {number} pathDepth
	 * @returns {HTMLElement} The header element.
	 */
	getHeader(text: string | HTMLElement, pathDepth: number): HTMLElement;
	getCheckbox(): HTMLInputElement;
	/**
	 *
	 * @param {string} text
	 * @param {boolean} req
	 */
	getCheckboxLabel(text: string, req: boolean): HTMLLabelElement;
	/**
	 *
	 * @param {{ [key:string]:HTMLElement }} controls
	 * @param {HTMLElement} label
	 * @param {HTMLElement} description
	 * @param {string} infoText
	 */
	getMultiCheckboxHolder(controls: {
		[key: string]: HTMLElement;
	}, label: HTMLElement, description: HTMLElement, infoText: string): HTMLDivElement;
	/**
	 *
	 * @param {HTMLElement} label
	 * @param {HTMLElement} input
	 * @param {boolean|undefined} compact
	 */
	getFormCheckboxControl(label: HTMLElement, input: HTMLElement, compact: boolean | undefined): HTMLDivElement;
	/**
	 *
	 * @param {{[key:string]:string}} attributes
	 */
	getFormRadio(attributes: {
		[key: string]: string;
	}): HTMLInputElement;
	/**
	 *
	 * @param {string} text
	 * @param {boolean|undefined} req
	 */
	getFormRadioLabel(text: string, req: boolean | undefined): HTMLLabelElement;
	/**
	 *
	 * @param {HTMLElement} label
	 * @param {HTMLInputElement} input
	 * @param {boolean|undefined} compact
	 */
	getFormRadioControl(label: HTMLElement, input: HTMLInputElement, compact: boolean | undefined): HTMLDivElement;
	/**
	 *
	 * @param {string[]} options
	 * @param {boolean} multiple
	 */
	getSelectInput(options: string[], multiple: boolean): HTMLSelectElement;
	/**
	 *
	 * @param {string[]} options
	 */
	getSwitcher(options: string[]): HTMLSelectElement;
	/**
	 *
	 * @param {HTMLElement} switcher
	 */
	getSwitcherOptions(switcher: HTMLElement): HTMLCollectionOf<HTMLOptionElement>;
	setSwitcherOptions(switcher: any, options: any, titles: any): void;
	/**
	 *
	 * @param {HTMLElement} select
	 * @param {string[]} options
	 * @param {string[]} titles
	 */
	setSelectOptions(select: HTMLElement, options: string[], titles?: string[]): void;
	getTextareaInput(): HTMLTextAreaElement;
	/**
	 *
	 * @param {number} min
	 * @param {number} max
	 * @param {number} step
	 */
	getRangeInput(min: number, max: number, step: number): HTMLInputElement;
	/**
	 *
	 * @param {HTMLElement} input
	 */
	getStepperButtons(input: HTMLElement): HTMLDivElement;
	/**
	 *
	 * @param {HTMLInputElement} input
	 * @param {number?} startvalue
	 */
	getRangeOutput(input: HTMLInputElement, startvalue: number | null): HTMLOutputElement;
	/**
	 *
	 * @param {HTMLElement} input
	 * @param {HTMLElement} output
	 * @return {HTMLElement}
	 */
	getRangeControl(input: HTMLElement, output: HTMLElement): HTMLElement;
	/**
	 *
	 * @param {string} type
	 */
	getFormInputField(type: string): HTMLInputElement;
	/**
	 *
	 * @param {HTMLElement} input
	 */
	afterInputReady(input: HTMLElement): void;
	/**
	 * Gets a form control object consisiting of several sub objects.
	 *
	 * @param {HTMLElement} label The label element.
	 * @param {HTMLElement} input The input element.
	 * @param {string} description The element description.
	 * @param {string} infoText The element information text.
	 * @returns {HTMLElement} The assembled DOM element.
	 */
	getFormControl(label: HTMLElement, input: HTMLElement, description: string, infoText: string): HTMLElement;
	/**
	 * @return {HTMLElement}
	 */
	getIndentedPanel(): HTMLElement;
	/**
	 * @return {HTMLElement}
	 */
	getTopIndentedPanel(): HTMLElement;
	/**
	 * @return {HTMLElement}
	 */
	getChildEditorHolder(): HTMLElement;
	/**
	 *
	 * @param {string} text
	 */
	getDescription(text: string): HTMLParagraphElement;
	/**
	 *
	 * @param {string} text
	 */
	getCheckboxDescription(text: string): HTMLParagraphElement;
	/**
	 *
	 * @param {string} text
	 */
	getFormInputDescription(text: string): HTMLParagraphElement;
	/**
	 *
	 * @returns {HTMLElement}
	 */
	getButtonHolder(): HTMLElement;
	/**
	 * @return {HTMLElement}
	 */
	getHeaderButtonHolder(): HTMLElement;
	/**
	 *
	 * @param {string} buttonAlign
	 */
	getFormButtonHolder(buttonAlign: string): HTMLElement;
	/**
	 * Gets a single button element.
	 *
	 * @param {string} text The button text.
	 * @param {HTMLElement} icon The icon object.
	 * @param {string} title The button title.
	 * @returns {HTMLElement} The button object.
	 */
	getButton(text: string, icon: HTMLElement, title: string): HTMLElement;
	/**
	 * Gets a single button element.
	 *
	 * @param {string} text The button text.
	 * @param {HTMLElement} icon The icon object.
	 * @param {string} title The button title.
	 * @returns {HTMLElement} The button object.
	 */
	getFormButton(text: string, icon: HTMLElement, title: string): HTMLElement;
	/**
	 *
	 * @param {HTMLElement} button
	 * @param {string} text
	 * @param {HTMLElement} icon
	 * @param {string} title
	 */
	setButtonText(button: HTMLElement, text: string, icon: HTMLElement, title: string): void;
	getTable(): HTMLTableElement;
	getTableRow(): HTMLTableRowElement;
	getTableHead(): HTMLTableSectionElement;
	getTableBody(): HTMLTableSectionElement;
	/**
	 *
	 * @param {string} text
	 */
	getTableHeaderCell(text: string): HTMLTableHeaderCellElement;
	getTableCell(): HTMLTableDataCellElement;
	/**
	 *
	 * @param {string} text
	 */
	getErrorMessage(text: string): HTMLParagraphElement;
	/**
	 * Adds an error message to the specified input element.
	 *
	 * @param {HTMLElement} input The input element that caused the error.
	 * @param {string} text The error message.
	 */
	addInputError(input: HTMLElement, text: string): void;
	/**
	 * Removes any error message from the specified input element.
	 *
	 * @param {HTMLElement} input The input element that previously caused the error.
	 */
	removeInputError(input: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} row
	 */
	addTableRowError(row: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} row
	 */
	removeTableRowError(row: HTMLElement): void;
	/**
	 *
	 * @param {string} propertyName
	 */
	getTabHolder(propertyName: string): HTMLDivElement;
	/**
	 *
	 * @param {string} propertyName
	 */
	getTopTabHolder(propertyName: string): HTMLDivElement;
	/**
	 *
	 * @param {HTMLElement} el
	 * @param {{ [key:string]: string }} styles
	 */
	applyStyles(el: HTMLElement, styles: {
		[key: string]: string;
	}): void;
	closest(elem: any, selector: any): any;
	/**
	 *
	 * @param {HTMLElement} tab
	 * @param {HTMLElement} newTabsHolder
	 */
	insertBasicTopTab(tab: HTMLElement, newTabsHolder: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} span
	 * @param {string} tabId
	 */
	getTab(span: HTMLElement, tabId: string): HTMLDivElement;
	/**
	 *
	 * @param {HTMLElement} span
	 * @param {string} tabId
	 */
	getTopTab(span: HTMLElement, tabId: string): HTMLDivElement;
	/**
	 * Returns the element that holds the tab contents.
	 *
	 * @param {HTMLElement} tabHolder The full tab holder element.
	 * @returns {HTMLElement} The content element inside specified tab holder.
	 */
	getTabContentHolder(tabHolder: HTMLElement): HTMLElement;
	/**
	 *
	 * @param {HTMLElement} tabHolder
	 * @returns {HTMLElement}
	 */
	getTopTabContentHolder(tabHolder: HTMLElement): HTMLElement;
	/**
	 * Creates and returns a tab content element.
	 *
	 * @returns {HTMLElement} The new tab content element.
	 */
	getTabContent(): HTMLElement;
	getTopTabContent(): HTMLElement;
	/**
	 *
	 * @param {HTMLElement} row
	 */
	markTabActive(row: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} row
	 */
	markTabInactive(row: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} holder
	 * @param {HTMLElement} tab
	 */
	addTab(holder: HTMLElement, tab: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} holder
	 * @param {HTMLElement} tab
	 */
	addTopTab(holder: HTMLElement, tab: HTMLElement): void;
	getBlockLink(): HTMLAnchorElement;
	/**
	 * @returns {HTMLElement}
	 */
	getBlockLinkHolder(): HTMLElement;
	/**
	 * @returns {HTMLElement}
	 */
	getLinksHolder(): HTMLElement;
	/**
	 *
	 * @param {HTMLElement} holder
	 * @param {HTMLElement} link
	 * @param {HTMLElement} media
	 */
	createMediaLink(holder: HTMLElement, link: HTMLElement, media: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} holder
	 * @param {HTMLElement} link
	 * @param {HTMLElement} image
	 */
	createImageLink(holder: HTMLElement, link: HTMLElement, image: HTMLElement): void;
	/**
	 *
	 * @param {HTMLElement} holder
	 */
	getFirstTab(holder: HTMLElement): ChildNode | null;
	/**
	 *
	 * @param {HTMLElement} input
	 * @param {HTMLElement[]} buttons
	 */
	getInputGroup(input: HTMLElement, buttons: HTMLElement[]): undefined;
	/**
	 *
	 * @param {string} txt
	 */
	cleanText(txt: string): string;
	/**
	 *
	 * @param {string} text
	 */
	getDropZone(text: string): HTMLDivElement;
	getUploadPreview(file: any, uploadButton: any, data: any): HTMLDivElement;
	getProgressBar(): HTMLProgressElement;
	/**
	 *
	 * @param {HTMLElement} progressBar
	 * @param {number} progress
	 */
	updateProgressBar(progressBar: HTMLElement, progress: number): void;
	/**
	 *
	 * @param {HTMLElement} progressBar
	 */
	updateProgressBarUnknown(progressBar: HTMLElement): void;
}
declare class AbstractEditor {
	constructor(options: any, defaults: any);
	defaults: any;
	/** @type  {JSONEditor} */
	jsoneditor: JSONEditor;
	theme: AbstractTheme;
	template_engine: string | TemplateEngine;
	iconlib: AbstractIconLib;
	translate: (key: string, variables?: string[] | undefined) => string;
	translateProperty: (key: string, variables?: string[] | undefined) => string;
	/** @private */
	private original_schema;
	schema: Schema;
	active: boolean;
	options: any;
	/** @type {string} */
	formname: string;
	/** @type {string} */
	path: string;
	/** @type {AbstractEditor} */
	parent: AbstractEditor;
	/** @type {string} */
	key: string;
	link_watchers: any[];
	watchLoop: boolean;
	/**
	 *
	 * @param {AbstractEditor} editor
	 */
	onChildEditorChange(editor: AbstractEditor): void;
	notify(): void;
	change(): void;
	/**
	 *
	 * @param {boolean} bubble
	 */
	onChange(bubble: boolean): void;
	register(): void;
	unregister(): void;
	getNumColumns(): number;
	isActive(): boolean;
	activate(): void;
	deactivate(): void;
	registerDependencies(): void;
	/** @type {boolean} */
	dependenciesFulfilled: boolean | undefined;
	evaluateDependencies(): void;
	/**
	 *
	 * @param {string} path
	 * @param {*} choices
	 */
	checkDependency(path: string, choices: any): void;
	/**
	 *
	 * @param {HTMLElement} container
	 */
	setContainer(container: HTMLElement): void;
	container: HTMLElement | null | undefined;
	/**
	 *
	 * @param {HTMLElement} header
	 */
	setOptInCheckbox(header: HTMLElement): void;
	optInCheckbox: HTMLInputElement | undefined;
	preBuild(): void;
	build(): void;
	postBuild(): void;
	setupWatchListeners(): void;
	watched: {} | null | undefined;
	watched_values: {} | null | undefined;
	watch_listener: (() => void) | null | undefined;
	header_template: ((context: Json) => string) | null | undefined;
	addLinks(): void;
	link_holder: HTMLElement | undefined;
	onMove(): void;
	/**
	 *
	 * @param {string} text
	 * @param {string} icon
	 * @param {string} title
	 * @param {string[]} args
	 */
	getButton(text: string, icon: string, title: string, args?: string[]): HTMLElement;
	/**
	 *
	 * @param {HTMLElement} button
	 * @param {string} text
	 * @param {string} icon
	 * @param {string} title
	 * @param {string[]} args
	 */
	setButtonText(button: HTMLElement, text: string, icon: string, title: string, args?: string[]): void;
	/**
	 *
	 * @param {HTMLElement} link
	 */
	addLink(link: HTMLElement): void;
	getLink(data: any): HTMLElement;
	refreshWatchedFieldValues(): boolean | undefined;
	getWatchedFieldValues(): {} | null | undefined;
	updateHeaderText(): void;
	/**
	 *
	 * @param {boolean} titleOnly
	 */
	getHeaderText(titleOnly: boolean): string;
	getPathDepth(): number;
	/**
	 *
	 * @param {string} txt
	 */
	cleanText(txt: string): string;
	onWatchedFieldChange(): void;
	/** @type {string|null} */
	header_text: string | null | undefined;
	/**
	 *
	 * @param {Json} value
	 */
	setValue(value: Json): void;
	value: Json | undefined;
	getValue(): Json | undefined;
	refreshValue(): void;
	getChildEditors(): boolean;
	destroy(): void;
	isDefaultRequired(): boolean;
	getDefault(): any;
	/** @returns {string} */
	getTitle(): string;
	enable(): void;
	disabled: boolean | undefined;
	disable(): void;
	isEnabled(): boolean;
	isRequired(): boolean;
	getDisplayText(arr: any): any[];
	/**
	 * Replace space(s) with "-" to create valid id value
	 * @param {string?} id
	 */
	getValidId(id: string | null): string;
	/**
	 *
	 * @param {string} inputAttribute
	 */
	setInputAttributes(inputAttribute: string): void;
	/**
	 *
	 * @param {string} scope
	 * @param {{[key:string]: any}} options
	 */
	expandCallbacks(scope: string, options: {
		[key: string]: any;
	}): {
		[key: string]: any;
	};
	/**
	 *
	 * @param {Error[]} errors
	 */
	showValidationErrors(errors: Error[]): void;
}
declare const defaults: Defaults;
export type Languages = {
	[lang: string]: {
		[key: string]: string;
	};
};
export interface DefaultOptions {
	upload: Function;
	prompt_before_delete: boolean;
	use_default_values: boolean;
	max_depth: number;
}
export interface Defaults {
	iconlib?: AbstractIconLib;
	options: DefaultOptions;
	theme: string;
	template: string | TemplateEngine;
	themes: {
		[key: string]: AbstractTheme;
	};
	callbacks: any;
	templates: {
		[key: string]: TemplateEngine;
	};
	iconlibs: {
		[key: string]: AbstractIconLib;
	};
	editors: {
		[key: string]: AbstractEditor;
	};
	languages: Languages;
	resolvers: ((schema: Schema) => string)[];
	custom_validators: Function[];
	default_language: string;
	language: string;
	translate: (key: string, variables?: string[]) => string;
	translateProperty: (key: string, variables?: string[]) => string;
}
export interface IconlibMapping {
	collapse: string;
	expand: string;
	delete: string;
	edit: string;
	add: string;
	cancel: string;
	save: string;
	moveup: string;
	movedown: string;
}
export interface TemplateEngine {
	compile(template: string): (context: Json) => string;
}
export interface Schema {
	[property: string]: any;
	type: string;
	options?: {
		[property: string]: Json;
	};
}
export declare type Json = string | number | boolean | null | {
	[property: string]: Json;
} | Json[];
export declare type Error = {
	path: string;
	property: string;
	message: string;
};
declare class AbstractIconLib {
	constructor(iconPrefix?: string, mapping?: IconlibMapping);
	mapping: IconlibMapping;
	icon_prefix: string;
	/**
	 *
	 * @param {string} key
	 */
	getIconClass(key: string): string | null;
	/**
	 *
	 * @param {string} key
	 */
	getIcon(key: string): HTMLElement | null;
}
declare class Validator {
	/**
	 *
	 * @param {JSONEditor} jsoneditor
	 * @param {Schema} schema
	 * @param {{ custom_validators?: Function[] }} options
	 * @param {Defaults} defaults
	 */
	constructor(jsoneditor: JSONEditor, schema: Schema, options: {
		custom_validators?: Function[];
	}, defaults: Defaults);
	jsoneditor: JSONEditor;
	schema: Schema;
	options: {
		custom_validators?: Function[] | undefined;
	};
	translate: (key: string, variables?: string[] | undefined) => string;
	translateProperty: (key: string, variables?: string[] | undefined) => string;
	defaults: Defaults;
	/** @private */
	private _validateSubSchema;
	/** @private */
	private _validateNumberSubSchema;
	/** @private */
	private _validateStringSubSchema;
	/** @private */
	private _validateArraySubSchema;
	/** @private */
	private _validateObjectSubSchema;
	/** @private */
	private _validateObjectSubSchema2;
	/**
	 *
	 * @param {Json} value
	 * @param {Schema} givenSchema
	 * @param {number} weight
	 */
	fitTest(value: Json, givenSchema: Schema, weight?: number): {
		match: number;
		extra: number;
	};
	/** @private */
	private _getSchema;
	/**
	 * @param {Json} value
	 * @returns {Error[]}
	 */
	validate(value: Json): Error[];
	/** @private */
	private _validateSchema;
	/** @private */
	private _expandSchemaLink;
	/** @private */
	private _validateV3Required;
	/** @private */
	private _validateByValueType;
	/** @private */
	private _validateUUIDSchema;
	/** @private */
	private _validateNumberSubSchemaMultipleDivisible;
	/** @private */
	private _validateDateTimeSubSchema;
	/** @private */
	private _validateCustomValidator;
	/** @private */
	private _removeDuplicateErrors;
	/** @private */
	private _checkType;
}
export class JSONEditor {
	/**
	 *
	 * @param {HTMLElement} element
	 * @param {*} options
	 */
	constructor(element: HTMLElement, options?: any);
	element: HTMLElement;
	options: any;
	ready: boolean;
	copyClipboard: any;
	/** @type {Schema} */
	schema: Schema;
	/** @type {string|TemplateEngine} */
	template: string | TemplateEngine;
	/** @type {(key: string, variables?: string[]) => string} */
	translate: (key: string, variables?: string[] | undefined) => string;
	/** @type {(key: string, variables?: string[]) => string} */
	translateProperty: (key: string, variables?: string[] | undefined) => string;
	uuid: number;
	/**
	 * @private
	 */
	private __data;
	/** @type { AbstractTheme } */
	theme: AbstractTheme;
	/** @type {AbstractIconLib} */
	iconlib: AbstractIconLib;
	root_container: HTMLElement;
	/** @type {(schema: Schema, fileBase: string) => Schema} */
	expandSchema: (schema: Schema, fileBase: string) => Schema;
	expandRefs: (schema: any, fileBase: any) => any;
	refs: any;
	validator: Validator;
	root: AbstractEditor;
	validation_results: Error[];
	/**
	 * @returns {Json}
	 */
	getValue(): Json;
	/**
	 * @param {Json} value
	 */
	setValue(value: Json): JSONEditor;
	/**
	 * @param {Json} value
	 */
	validate(value: Json, ...args: any[]): Error[];
	destroy(): void;
	destroyed: boolean | undefined;
	/**
	 *
	 * @param {string} event
	 * @param {Function} callback
	 */
	on(event: string, callback: Function): JSONEditor;
	callbacks: any;
	/**
	 *
	 * @param {string} event
	 * @param {Function} callback
	 */
	off(event: string, callback: Function): JSONEditor;
	trigger(event: any, editor: any): JSONEditor;
	setOption(option: any, value: any): JSONEditor;
	getEditorsRules(): any;
	getEditorClass(schema: any): AbstractEditor;
	/**
	 *
	 * @param {*} editorClass
	 * @param {*} options
	 * @param {*} depthCounter
	 * @returns {AbstractEditor}
	 */
	createEditor(editorClass: any, options: any, depthCounter?: any): AbstractEditor;
	onChange(): JSONEditor | undefined;
	firing_change: boolean | undefined;
	/**
	 *
	 * @param {string} template
	 * @param {string|TemplateEngine} name
	 */
	compileTemplate(template: string, name?: string | TemplateEngine): (context: Json) => string;
	/**
	   * @private
	   */
	private _data;
	/**
	 *
	 * @param {AbstractEditor} editor
	 */
	registerEditor(editor: AbstractEditor): JSONEditor;
	/** @type {{[path:string]:AbstractEditor}} */
	editors: {
		[path: string]: AbstractEditor;
	} | undefined;
	/**
	 *
	 * @param {AbstractEditor} editor
	 */
	unregisterEditor(editor: AbstractEditor): JSONEditor;
	/**
	 *
	 * @param {string} path
	 * @returns {AbstractEditor}
	 */
	getEditor(path: string): AbstractEditor;
	/**
	 *
	 * @param {string} path
	 * @param {Function} callback
	 */
	watch(path: string, callback: Function): JSONEditor;
	/** @type {{[path:string]:Function[]}} */
	watchlist: {
		[path: string]: Function[];
	} | undefined;
	/**
	 *
	 * @param {string} path
	 * @param {Function} callback
	 */
	unwatch(path: string, callback: Function): JSONEditor;
	/**
	 *
	 * @param {string} path
	 */
	notifyWatchers(path: string): JSONEditor | undefined;
	isEnabled(): boolean;
	enable(): void;
	disable(): void;
	setCopyClipboardContents(value: any): void;
	getCopyClipboardContents(): any;
	/**
	 * @private
	 * @param {string} themeName
	 * @param {*} rules
	 */
	private addNewStyleRules;
	/**
	 * @private
	 * @param {string} themeName
	 * @param {*} rules
	 * @param {*} shadowRoot
	 */
	private addNewStyleRulesToShadowRoot;
}
export namespace JSONEditor {
	export { defaults };
	export { AbstractEditor };
	export { AbstractTheme };
	export { AbstractIconLib };
}

export {};