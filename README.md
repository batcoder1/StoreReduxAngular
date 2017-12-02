# Control de estados con Redux en Angular.

Cuando creamos proyectos en Angular podemos controlar los estados fácilmente, por ejemplo. con un bus de observable, donde te puedes subscribir y conocer el estado de la aplicación. Desgraciadamente, esto solo sirve cuando el proyecto es pequeño, xuando el proyecto es grande y se necesitan controlar estados de muchos objetos, no podemos hacer un observable para cada objeto a controlar, eso seria un caos y muy costoso de mantener. Aquí es donde entra Redux en acción. 
Redux dispone de un “store” donde podemos guardar los estados de los objetos de la aplicación, estos se guardaran en un solo objeto.
Primero vamos a comentar las partes de Redux que nos hace falta conocer y después aplicaremos lo aprendido a un proyecto sencillo de Angular mediante el uso de la librería redux.


---

## Redux
Redux es un contenedor de estado predecible para aplicaciones en JavaScript. El estado completo de su aplicación se almacena en un árbol de objetos dentro de una sola tienda . Se caracteriza por:
Un único almacén de datos inmutables.
Flujo de datos unidireccional
Basado en funciones puras y un flujo de acciones.

La unica forma de cambiar un estado es a traves de la emision de una accion. Para realizar esto, necesitamos los reductores.
Reductores
Los reductores son funciones puras que deciden como cambian el estado en función de la acción de entrada. Cogen el estado anterior y una acción, y devuelve el siguiente estado.
Es muy importante que el reductor se mantenga puro. Nunca puedes hacer que tu reductor mute sus argumentos, realice efectos secundarios (llamadas a servicios, APIS…) y realice llamadas a funciones no puras.
El reductor al ser una funcion puera, siempre devolverá el mismo estado para los mismo argumentos de entrada, sin sorpresas.
Store
Es el objeto que une las acciones y los reductores. El store debe mantener el estado de la aplicación, también debe permitir conocer el estado actual, para ello dispone del método getstate(). El estado únicamente se puede actualizar mediante la llamada al método dispatch(action). Por otro lado, para registrar a los oyentes hay que usar método subcribe(listener). 
```
import { createStore } from 'redux'
 import todoApp from './reducers'

 this.store = createStore(todoApp)
```
Una vez que conocemos, un poco la teoría, vamos a integrar esto en una aplicación Angular.

## Coding
Vamos a hacer una pequeña aplicación de lista de compra, donde el store guarde los items a comprar y un check con su estado, también guardaremos la vista, que podrá ser “mostrar todos” o “mostrar completados”. 
Podéis descargar el proyecto desde mi repo en github o seguir los pasos.
Lo primero que vamos a hacer es generar un proyecto con angular-cli

ng new mystore

Entramos en el proyecto e instalamos redux
```
npm install -s redux
```
Creamos las interfaces necesarias para nuestra app

```
export interface Action {
   type: string; 
   payload?: any;
}
export interface Todo {
   id: number;
   text: string;
   completed: Boolean;
}
export interface AppState {
   todos: Todo[];
}
```

Tenemos una interface “Item”, donde guardaremos la información de cada item de la compra. AppState guardará un array de los items.
La otra interface, es la acción que debe tener un tipo y un payload, opcional.
Ahora vamos con los reducer. Tenemos dos, como ya dijimos, uno para el filtro de visibilidad y otro para los items.
El primero únicamente settea el filtro que le pasamos. Y el segundo en ADD_ITEM, añade el item que lo pasamos a través de la acción a los estados

```
export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
export const items = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
         id: action.id,
         text: action.text,
         completed: false
        }
      ];
    case 'TOGGLE_ITEM':
      return state.map(item =>
        (item.id === action.id)
          ? {...item, completed: !item.completed}
       : item
     );
    default:
      return state;
  }
};
```

Finalmente declaramos el reducer combinando estos dos reducer con “combineReducers” , funcion disponible en la libreria redux.
export const reducer: Reducer<AppState> = combineReducers({ visibilityFilter, items });
Esto es todo lo que tendriamos que hacer en nuestro fichero reduce.ts
No olvidemos el fichero actions.ts, aqui es donde declaramos las acciones posibles.

```
// acción añadir item
export const addItem = text => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++, 
    text
  };
};
```

Ahora vamos a declarar nuestro store en el componente, en este caso, app.component.ts.

```
store: Store<AppState>;
```

También declaramos un array de items que será informado por el store.

```
items: Item[];
```

Iniciamos el store en el metodo ngOnInit, para que arranque al iniciar la aplicación.

```
ngOnInit() {
  this.store = createStore<AppState>(reducer);
  
 ...
```

Para poder añadir items a nuestra lista de la compra, usamos el método dispatch, pasándole la acción addItem, lo que nos permite añadir un nuevo item a la lista de la compra.

```
addTodo(task: string) {
  this.store.dispatch(addItem(task));
}
```

Para poder poner a completado el item tendremos otra función que será invocada cuando se pulse el checkbox del item. 

```
complete(item: Item) {
  this.store.dispatch(toggleItem(item.id));
}
```

## Filtros
Para manejar los filtros, tenemos que hacer tres cosas.
1.- Añadir los link para poder seleccionar un filtro u otro.
2.- Añadir la funcion que llama al store y cambia el estado del filtro.
3.- Filtrar la respuesta del store para que segun el filtro que seleccionemos rellene el array con los items que deben mostrarse.

```
...
const unsubscribe = this.store.subscribe(() => {
  const filter = this.store.getState().visibilityFilter;
  if (filter === VisibilityFilters.SHOW_COMPLETED) {
    this.items = this.store.getState().items.filter(t => t.completed);
    }else {
      if (filter === VisibilityFilters.SHOW_ACTIVE) {
        this.items = this.store.getState().items.filter(t => !t.completed);
      }else {
        this.items = this.store.getState().items;
     }
   }
this.filter = filter;
});
```

Cuando se haga click en uno de los filtros llamara a esta funcion.

```
changeFilter(id: number) {
  this.store.dispatch(setVisibilityFilter(this.filters[id]));
}
```

Que activa, en el store, el filtro que hayamos seleccionado. 

## Acabando

Después de haber aprendido a usar el store de Redux en Angular, puedo decir, que el manejo de estados es cosa de niños. Es facil de implentar y ademas nos proporciona un control total sobre el estado del store, por tanto, de la aplicación.
Creo que no me dejo nada. Si tenéis dudas, algo no esta claro o si veis algún error, no dudéis en dejar un comentario.

Un saludo.

Kike.