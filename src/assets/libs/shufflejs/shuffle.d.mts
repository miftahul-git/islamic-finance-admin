//#region src/tiny-emitter.d.ts
/**
* @fileoverview copy of `tiny-emitter` on npm, but converted to ESM
*/
declare class TinyEmitter {
  handlers?: Record<string, {
    fn: Function & {
      onceCb?: Function;
    };
    ctx?: any;
  }[]>;
  on(event: string, callback: Function, ctx?: any): this;
  once(event: string, callback: Function, ctx?: any): this;
  emit(event: string, ...args: any[]): this;
  off(event: string, callback?: Function): this;
}
//#endregion
//#region src/point.d.ts
declare class Point {
  x: number;
  y: number;
  /**
  * Represents a coordinate pair.
  * @param x X coordinate.
  * @param y Y coordinate.
  */
  constructor(x?: number | string, y?: number | string);
  /**
  * Whether two points are equal.
  * @param pointA Point A.
  * @param pointB Point B.
  * @return Whether the points are equal.
  */
  static equals(pointA: Point, pointB: Point): boolean;
}
//#endregion
//#region src/rect.d.ts
declare class Rect {
  id: number;
  left: number;
  top: number;
  width: number;
  height: number;
  /**
  * Class for representing rectangular regions.
  * https://github.com/google/closure-library/blob/master/closure/goog/math/rect.js
  * @param x Left.
  * @param y Top.
  * @param width Width.
  * @param height Height.
  * @param id Identifier.
  */
  constructor(x: number, y: number, width: number, height: number, id: number);
  /**
  * Returns whether two rectangles intersect.
  * @param rectA A rectangle.
  * @param rectB A rectangle.
  * @return Whether a and b intersect.
  */
  static intersects(rectA: Rect, rectB: Rect): boolean;
}
//#endregion
//#region src/types.d.ts
interface JqueryLike {
  [index: number]: HTMLElement;
  length: number;
  jquery: string;
}
type ElementOption = Element | HTMLElement | string | JqueryLike;
type FilterModeOptions = "any" | "all";
interface ShuffleOptions {
  /**
  * Useful for percentage based heights when they might not always be exactly
  * the same (in pixels).
  */
  buffer?: number;
  /**
  * Reading the width of elements isn't precise enough and can cause columns to
  * jump between values.
  */
  columnThreshold?: number;
  /**
  * A static number or function that returns a number which determines
  * how wide the columns are (in pixels).
  */
  columnWidth?: number | ((containerWidth: number) => number);
  /**
  * If your group is not json, and is comma delimited, you could set delimiter to ','.
  */
  delimiter?: string | null;
  /**
  * CSS easing function to use.
  */
  easing?: string;
  /**
  * Affects using an array with filter. e.g. `filter(['one', 'two'])`. With "any",
  * the element passes the test if any of its groups are in the array. With "all",
  * the element only passes if all groups are in the array.
  */
  filterMode?: FilterModeOptions;
  /**
  * Initial filter group.
  */
  group?: string;
  /**
  * A static number or function that determines how wide the gutters
  * between columns are (in pixels).
  */
  gutterWidth?: number | ((containerWidth: number) => number);
  /**
  * Shuffle can be initialized with a sort object. It is the same object
  * given to the sort method.
  */
  initialSort?: SortOptions | null;
  /**
  * Whether to center grid items in the row with the leftover space.
  */
  isCentered?: boolean;
  /**
  * Whether to align grid items to the right in the row.
  */
  isRTL?: boolean;
  /**
  * e.g. '.picture-item'.
  */
  itemSelector?: string;
  /**
  * Whether to round pixel values used in translate(x, y). This usually avoids blurriness.
  */
  roundTransforms?: boolean;
  /**
  * Element or selector string. Use an element to determine the size of columns and gutters.
  */
  sizer?: ElementOption | null;
  /**
  * Transition/animation speed (milliseconds).
  */
  speed?: number;
  /**
  * Transition delay offset for each item in milliseconds.
  */
  staggerAmount?: number;
  /**
  * Maximum stagger delay in milliseconds.
  */
  staggerAmountMax?: number;
  /**
  * Whether to use transforms or absolute positioning.
  */
  useTransforms?: boolean;
}
interface SortOptions {
  reverse?: boolean;
  by?: ((element: HTMLElement) => any) | null;
  compare?: ((itemA: ShuffleItem, itemB: ShuffleItem) => number) | null;
  randomize?: boolean;
  key?: keyof ShuffleItem;
}
type InlineCssStyles = Record<string, string | number>;
interface ShuffleItemCss {
  INITIAL: InlineCssStyles;
  DIRECTION: {
    ltr: InlineCssStyles;
    rtl: InlineCssStyles;
  };
  VISIBLE: {
    before: InlineCssStyles;
    after: InlineCssStyles;
  };
  HIDDEN: {
    before: InlineCssStyles;
    after: InlineCssStyles;
  };
}
type FilterFunction = (this: HTMLElement, element: HTMLElement, shuffle: Shuffle) => boolean;
type FilterArg = string | string[] | FilterFunction;
interface RemovedEventType {
  collection: HTMLElement[];
  type: "shuffle:removed";
}
interface LayoutEventType {
  type: "shuffle:layout";
}
interface ShuffleEventMap {
  "shuffle:removed": RemovedEventType & {
    shuffle: Shuffle;
  };
  "shuffle:layout": LayoutEventType & {
    shuffle: Shuffle;
  };
}
/**
* Union of all event data types.
* Automatically derived from ShuffleEventMap.
*/
type ShuffleEventData = ShuffleEventMap[keyof ShuffleEventMap];
/**
* Generic callback type that accepts any event data.
* Automatically derived from ShuffleEventMap.
*/
type ShuffleEventCallback = (data: ShuffleEventData) => void;
//#endregion
//#region src/shuffle-item.d.ts
declare class ShuffleItem {
  id: number;
  element: HTMLElement;
  isRTL: boolean;
  isVisible: boolean;
  isHidden: boolean;
  scale: number;
  point: Point;
  constructor(element: HTMLElement, isRTL?: boolean);
  show(): void;
  hide(): void;
  init(): void;
  addClasses(classes: string[]): void;
  removeClasses(classes: string[]): void;
  applyCss(obj: InlineCssStyles): void;
  dispose(): void;
  static Css: ShuffleItemCss;
  static Scale: {
    VISIBLE: number;
    HIDDEN: number;
  };
}
//#endregion
//#region src/constants.d.ts
declare const Classes: {
  readonly BASE: "shuffle";
  readonly SHUFFLE_ITEM: "shuffle-item";
  readonly VISIBLE: "shuffle-item--visible";
  readonly HIDDEN: "shuffle-item--hidden";
};
declare const FilterMode: {
  ANY: "any";
  ALL: "all";
};
declare const EventType: {
  LAYOUT: "shuffle:layout";
  REMOVED: "shuffle:removed";
};
declare const DEFAULT_OPTIONS: ShuffleOptions;
//#endregion
//#region src/helpers.d.ts
/**
* Returns the outer width of an element, optionally including its margins.
*
* There are a few different methods for getting the width of an element, none of
* which work perfectly for all Shuffle's use cases.
*
* 1. getBoundingClientRect() `left` and `right` properties.
*   - Accounts for transform scaled elements, making it useless for Shuffle
*   elements which have shrunk.
* 2. The `offsetWidth` property.
*   - This value stays the same regardless of the elements transform property,
*   however, it does not return subpixel values.
* 3. getComputedStyle()
*   - This works great Chrome, Firefox, Safari, but IE<=11 does not include
*   padding and border when box-sizing: border-box is set, requiring a feature
*   test and extra work to add the padding back for IE and other browsers which
*   follow the W3C spec here.
*
* @param element The element.
* @param includeMargins Whether to include margins.
* @return The width and height.
*/
declare function getSize(element: HTMLElement, includeMargins?: boolean): {
  width: number;
  height: number;
};
//#endregion
//#region src/shuffle.d.ts
declare class Shuffle extends TinyEmitter {
  #private;
  element: HTMLElement;
  sizer: HTMLElement | null;
  options: ShuffleOptions;
  lastSort: SortOptions | null;
  group: FilterArg;
  lastFilter: FilterArg;
  isEnabled: boolean;
  isDestroyed: boolean;
  isInitialized: boolean;
  isTransitioning: boolean;
  id: string;
  items: ShuffleItem[];
  sortedItems: ShuffleItem[];
  visibleItems: number;
  cols: number;
  colWidth: number;
  containerWidth: number;
  positions: number[];
  /**
  * Categorize, sort, and filter a responsive grid of items.
  *
  * @param element An element which is the parent container for the grid items.
  * @param options Options object.
  * @constructor
  */
  constructor(element: ElementOption, options?: Partial<ShuffleOptions>);
  on<EventName extends keyof ShuffleEventMap>(event: EventName, callback: (data: ShuffleEventMap[EventName]) => void, context?: any): this;
  on(event: string, callback: ShuffleEventCallback, context?: any): this;
  once<EventName extends keyof ShuffleEventMap>(event: EventName, callback: (data: ShuffleEventMap[EventName]) => void, context?: any): this;
  once(event: string, callback: ShuffleEventCallback, context?: any): this;
  emit<EventName extends keyof ShuffleEventMap>(event: EventName, data: ShuffleEventMap[EventName]): this;
  off(event: string, callback?: ShuffleEventCallback): this;
  /**
  * Sets css transform transition on a group of elements. This is not executed
  * at the same time as `item.init` so that transitions don't occur upon
  * initialization of a new Shuffle instance.
  * @param items Shuffle items to set transitions on.
  * @protected
  */
  setItemTransitions(items: ShuffleItem[]): void;
  /**
  * Mutate positions before they're applied.
  * @param itemRects Item data objects.
  * @param containerWidth Width of the containing element.
  * @protected
  */
  getTransformedPositions(itemRects: Rect[], containerWidth: number): Point[];
  /**
  * Returns styles which will be applied to the an item for a transition.
  * @param item Item to get styles for. Should have updated scale and point properties.
  * @param styleObject Extra styles that will be used in the transition.
  * @return Transforms for transitions, left/top for animate.
  */
  protected getStylesForTransition(item: ShuffleItem, styleObject: InlineCssStyles): InlineCssStyles;
  /**
  * The magic. This is what makes the plugin 'shuffle'
  * @param category Category to filter by. Can be a function, string, or array of strings.
  * @param sortOptions A sort object which can sort the visible set
  */
  filter(category?: FilterArg, sortOptions?: SortOptions | null): void;
  /**
  * Gets the visible elements, sorts them, and passes them to layout.
  * @param sortOptions The options object to pass to `sorter`.
  */
  sort(sortOptions?: SortOptions | null): void;
  /**
  * Reposition everything.
  * @param options options object
  * @param options.recalculateSizes Whether to calculate column, gutter, and container widths again.
  * @param options.force By default, `update` does nothing if the instance is disabled. Setting this
  *    to true forces the update to happen regardless.
  */
  update({
    recalculateSizes,
    force
  }?: {
    recalculateSizes?: boolean;
    force?: boolean;
  }): void;
  /**
  * Use this instead of `update()` if you don't need the columns and gutters updated
  * Maybe an image inside `shuffle` loaded (and now has a height), which means calculations
  * could be off.
  */
  layout(): void;
  /**
  * New items have been appended to shuffle. Mix them in with the current
  * filter or sort status.
  * @param newItems Collection of new items.
  */
  add(newItems: HTMLElement[]): void;
  /**
  * Disables shuffle from updating dimensions and layout on resize
  */
  disable(): void;
  /**
  * Enables shuffle again
  * @param isUpdateLayout if undefined, shuffle will update columns and gutters
  */
  enable(isUpdateLayout?: boolean): void;
  /**
  * Remove 1 or more shuffle items.
  * @param elements An array containing one or more elements in shuffle
  */
  remove(elements: HTMLElement[]): void;
  /**
  * Retrieve a shuffle item by its element.
  * @param element Element to look for.
  * @return A shuffle item or undefined if it's not found.
  */
  getItemByElement(element: HTMLElement): ShuffleItem | undefined;
  /**
  * Dump the elements currently stored and reinitialize all child elements which
  * match the `itemSelector`.
  */
  resetItems(): void;
  /**
  * Destroys shuffle, removes events, styles, and classes
  */
  destroy(): void;
  static getSize: typeof getSize;
  static ShuffleItem: typeof ShuffleItem;
  static ALL_ITEMS: string;
  static FILTER_ATTRIBUTE_KEY: string;
  static EventType: typeof EventType;
  static Classes: typeof Classes;
  static FilterMode: typeof FilterMode;
  static options: typeof DEFAULT_OPTIONS;
  static Point: typeof Point;
  static Rect: typeof Rect;
}
//#endregion
export { type FilterArg, type FilterFunction, type InlineCssStyles, type ShuffleEventCallback, type ShuffleEventData, type ShuffleOptions, type SortOptions, Shuffle as default };
//# sourceMappingURL=shuffle.d.mts.map