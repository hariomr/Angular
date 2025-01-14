import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTodoComponent } from './components/my-todo/my-todo.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';
import { StyleDirective } from './directives/style.directive';
import { FooterComponent } from './components/footer/footer.component';
import { JokeServiceService } from './services/joke-service.service';
import { LinkComponent } from './components/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTodoComponent,
    CapitalizeFirstPipe,
    TodoSearchComponent,
    StyleDirective,
    FooterComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [JokeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule{ }
