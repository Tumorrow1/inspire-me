import { Img } from './models/Img.js'
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
  /**
   * @type {Img}
   */
  img = null

  date = null
  wether = null
}

export const AppState = createObservableProxy(new ObservableAppState())