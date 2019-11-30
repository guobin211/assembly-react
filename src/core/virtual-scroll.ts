/**
 * VirtualScroll
 * @author guobin211
 * @date 2019-11-30
 * @version 0.0.1
 */
import {
  BaseVirtualScroll,
  ClickEvent,
  EventTypes,
  ScrollEnd,
  ScrollEvent,
  VirtualScrollOptions,
} from '../base/base-virtual-scroll'
import { EventBus } from '../event/event-bus'
import { isHTMLDivElement, isSafeStepNumber } from '../utils/check'

export default class VirtualScroll<T> implements BaseVirtualScroll<T> {
  $viewport: HTMLDivElement
  $list: HTMLDivElement
  $data: T[]
  $index: number
  $step: number
  $event: EventBus
  on(eventType: EventTypes, callbackFn: (ev: ScrollEnd | ScrollEvent | ClickEvent) => void) {
    this.$event.register(eventType, callbackFn)
  }
  scrollTo(i: number) {}
  init() {}
  render() {}

  constructor(options: VirtualScrollOptions<T>) {
    if (Array.isArray(options.data)) {
      this.$data = options.data
      this.$event = new EventBus()
      this.$index = 0
      if (isSafeStepNumber(options.step)) {
        this.$step = Number(options.step)
        if (isHTMLDivElement(options.el)) {
          this.$viewport =
            typeof options.el === 'string'
              ? (document.getElementById(options.el) as HTMLDivElement)
              : options.el
        } else {
          throw new Error(`options.el must get a HTMLDivElement`)
        }
      } else {
        throw new Error(`options.step must be Positive Int`)
      }
    } else {
      throw new Error(`options.data must be Array`)
    }
  }
}
