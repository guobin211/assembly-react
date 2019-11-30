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

export default class VirtualScroll<T> implements BaseVirtualScroll<T> {
  $data: T[]
  $index: number
  $step: number
  $event: EventBus
  on(eventType: EventTypes, callbackFn: (ev?: ScrollEnd | ScrollEvent | ClickEvent) => void) {
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
      this.$step = options.step
    } else {
      throw new Error(`options.data must be Array`)
    }
  }
}
