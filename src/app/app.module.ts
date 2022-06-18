import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ParentComponent } from './components/lifecycle/parent/parent.component';
import { ChildComponent } from './components/lifecycle/child/child.component';
import { CurrencyInputDirective } from './shared/directives/currency-input.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DeactivateGuard } from './shared/guards/deactivate.guard';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { SqrootPipe } from './shared/pipes/sqroot.pipe';
import { GenderPipe } from './shared/pipes/gender.pipe';
import { CategoryPipe } from './shared/pipes/category.pipe';
import { ObservableComponent } from './components/observable/observable.component';
import { observable } from 'rxjs';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormV2Component } from './components/reactive-form-v2/reactive-form-v2.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CommonInterceptor } from './shared/interceptors/common.interceptor';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



const routes: Routes = [
  {
    path: '',
    redirectTo : 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'ft-list',
    component: FeaturedListComponent,
    canActivate : [AuthGuard],
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'parent',
    component: ParentComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'post-list',
    component: PostsComponent,
  },
  {
    path: 'post-list/:id',
    component: PostDetailComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'post-details',
    component: PostDetailComponent,
    canActivate : [AuthGuard]
  },

  {
    path: 'pipes',
    component: PipesExampleComponent
  },
{
  path: 'observable',
  component: ObservableComponent,
},
{
  path: 'template-driven-form',
  component: ReactiveFormComponent,
},
{
  path: 'reactive-form',
  component: ReactiveFormV2Component,
},
{
  path: 'invoice',
  component: InvoiceComponent,
},
{
  path: 'customer',
  component: CustomerComponent,
},
{
  path: 'user-reg',
  component: UserRegistrationComponent,
},

  {
    path: '**',
    component: ChildComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    FeaturedListComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    CurrencyInputDirective,
    PostsComponent,
    PostDetailComponent,
    LoginComponent,
    PipesExampleComponent,
    ReversePipe,
    SqrootPipe,
    GenderPipe,
    CategoryPipe,
    ObservableComponent,
    ReactiveFormComponent,
    ReactiveFormV2Component,
    InvoiceComponent,
    UserRegistrationComponent,
    CustomerComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbPaginationModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
