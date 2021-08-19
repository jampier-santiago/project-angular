import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InfoUserComponent } from './pages/info-user/info-user.component';
import { CardsComponent } from './components/cards/cards.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { ModalComponent } from './components/modal/modal.component';
import { CrudService } from './services/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    UsersComponent,
    CreateUserComponent,
    PageNotFoundComponent,
    InfoUserComponent,
    CardsComponent,
    TableUsersComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
