import { Todo } from './models/Todo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /**
   * @type {Todo[]}
   */
  todos = []
  /**
   * @type {import("./Auth/Identity.js").Identity}
   */
  identity = null



  Imgs = []
}

export const AppState = createObservableProxy(new ObservableAppState())