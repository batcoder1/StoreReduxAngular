import { addItem, toggleItem, setVisibilityFilter, VisibilityFilters } from './actions';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { createStore , Store} from 'redux';
import { AppState, reducer, visibilityFilter, Item, items } from './reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  store: Store<AppState>;
  items: Item[];
  tarea = '';
  filters: string[] = ['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'];
  filter = this.filters[0];

  ngOnInit() {

    this.store = createStore<AppState>(reducer);

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
      console.log(this.store.getState());
      this.filter = filter;
    });


  }
  addItem(task: string) {
    this.store.dispatch(addItem(task));
    this.tarea = '';
  }

  complete(item: Item) {
    this.store.dispatch(toggleItem(item.id));
  }
  changeFilter(id: number) {
    this.store.dispatch(setVisibilityFilter(this.filters[id]));
  }
 
}
