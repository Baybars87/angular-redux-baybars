import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [ 
      BrowserModule, 
      FormsModule,
      NgReduxModule 
    ],
  declarations: [ AppComponent, HelloComponent, TodoOverviewComponent, TodoListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
