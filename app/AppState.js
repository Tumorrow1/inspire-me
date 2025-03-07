import { Todo } from './models/Todo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**
   * @type {Todo[]}
   */
  todo = []
  /**
   * @type {import("./Auth/Identity.js").Identity}
   */
  identity = null
}

export const AppState = createObservableProxy(new ObservableAppState())