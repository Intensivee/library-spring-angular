import { JwtHttpIntercepterService } from './service/security/jwt-http-intercepter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AbsoluteValuePipe } from './pipes/absolute-value.pipe';
import { OverdueCopiesComponent } from './components/overdue-copies/overdue-copies.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MatDialogModule } from '@angular/material/dialog';
import { CopyComponent } from './components/copy/copy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { AuthorComponent } from './components/author/author.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

const MAT_MODULES = [
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSortModule,
  MatSelectModule,
  NgxMatSelectSearchModule,
  MatButtonModule,
  MatIconModule
];

const PIPES = [
  AbsoluteValuePipe
];

@NgModule({
  declarations: [
    PIPES,
    AppComponent,
    AsideMenuComponent,
    BookListComponent,
    NavBarComponent,
    SearchComponent,
    BookDetailsComponent,
    AuthorDetailsComponent,
    UserListComponent,
    UserDetailsComponent,
    OverdueCopiesComponent,
    CopyComponent,
    CategoriesComponent,
    AuthorComponent,
    BookAddComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    MAT_MODULES,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtHttpIntercepterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
