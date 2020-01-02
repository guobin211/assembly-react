import { EventBus } from '../event/event-bus'

export interface VirtualScrollOptions<T> {
  el: string | HTMLDivElement
  data: T[]
  step?: number | string
}

export enum EventTypes {
  SCROLL = 'scroll',
  SCROLL_BEFORE = 'scrollBefore',
  SCROLL_END = 'scrollEnd',
  CLICK = 'click'
}

export interface PointPosition {
  x: number;
  y: number;
}

export interface ScrollEvent {
  point: PointPosition,
  timestamp: number
}

export interface ScrollEnd {
  point: PointPosition,
  timestamp: number,
  item: HTMLDivElement | any
}

export interface ClickEvent {
  point: PointPosition,
  item: HTMLDivElement | any
}


export interface BaseVirtualScroll<T> {
  /**
   * viewport
   */
  $viewport: HTMLDivElement
  /**
   * scroll list
   */
  $list: HTMLDivElement
  /**
   * event listener
   */
  $event: EventBus
  /**
   * list data
   */
  $data: T[]
  /**
   * current index
   */
  $index: number
  /**
   * step size default 20 or data.length
   */
  $step: number
  /**
   * 初始化
   */
  init: () => void
  /**
   * scroll to index
   * @param i
   */
  scrollTo: (i: number) => void


  /**
   * dom render
   */
  render: () => void
  /**
   * event callback
   * @param eventType
   * @param callback
   */
  on: (eventType: EventTypes, callbackFn: (ev: ScrollEnd | ScrollEvent | ClickEvent) => void) => void
}
