import { EventTypes } from '../base/base-virtual-scroll'

export class EventBus {

  private readonly _eventMap: Map<EventTypes, Function[]>

  constructor() {
    this._eventMap = new Map()
  }

  /**
   * register callback fn
   * @param event
   * @param fn
   */
  register(event: EventTypes, fn: Function) {
    if (this._eventMap.get(event)) {
      if (this._eventMap.get(event).includes(fn)) {
        throw new Error(`${event} already has ${fn.name}`)
      } else {
        this._eventMap.get(event).push(fn)
      }
    } else {
      this._eventMap.set(event, [fn])
    }
  }

  /**
   * clear all event
   */
  clearAll() {
    for (const key in this._eventMap) {
      this.clearEvent(key as EventTypes);
    }
  }

  /**
   * clear by eventType
   * @param event
   */
  clearEvent(event: EventTypes) {
    this._eventMap.set(event, [])
  }

  /**
   * remove by fn in one eventType
   * @param event
   * @param fn
   */
  remove(event: EventTypes, fn: Function) {
    this._eventMap.get(event)?.splice(this._eventMap.get(event).indexOf(fn), 1)
  }

  /**
   * remove by fn in all eventTypes
   * @param fn
   */
  removeAll(fn: Function) {
    for (const key in this._eventMap) {
      this._eventMap.get(key as EventTypes)?.splice(this._eventMap.get(key as EventTypes).indexOf(fn), 1)
    }
  }

  /**
   * send data by eventType
   * @param event
   * @param data
   */
  dispatch(event: EventTypes, data: any) {
    this._eventMap.get(event)?.forEach(fn => fn(data))
  }

}
