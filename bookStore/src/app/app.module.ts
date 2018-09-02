import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BookStoreService } from '././shared/services/book-store.service'
import { registerContentQuery } from '../../node_modules/@angular/core/src/render3/instructions';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
<<<<<<< HEAD

const appRoutes: Routes = [
  { path: 'bookStore/home', component:HomeComponent  },

  { path: 'bookStore/myAccount', component:AccountComponent  },
  { path: '', component:HomeComponent },
   { path: 'bookStore', component:HomeComponent },
  
   {path: 'bookStore/myAccount',
    component: AccountComponent,
},
  { path: 'bookStore/myAccount/login', component: LoginComponent }, // url: about/
  { path: 'bookStore/myAccount/register', component: RegisterComponent } ,// url: about/item
  { path: 'bookStore/products', component:ProductsComponent  },
 { path: 'bookStore/myCart', component:CartComponent  },
=======
const appRoutes: Routes = [
  { path: 'bookStore/home', component: HomeComponent },
  { path: 'bookStore/myAccount', component: AccountComponent },
  { path: '', component: HomeComponent },
  { path: 'bookStore', component: HomeComponent },
  { path: 'bookStore/myAccount', component: AccountComponent },
  { path: 'bookStore/myAccount/login', component: LoginComponent }, // url: about/
  { path: 'bookStore/myAccount/register', component: RegisterComponent },// url: about/item
  { path: 'bookStore/products', component: ProductsComponent },
  { path: 'bookStore/myCart', component: CartComponent },
>>>>>>> 75f143f0dadaf58ce3f73bef804a2eb62098109a

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    HomeComponent,
    AccountComponent,
    CartComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule, 
     RouterModule.forRoot( appRoutes ),
     ReactiveFormsModule, 
    FormsModule,],

=======
    BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, FormsModule],
>>>>>>> 75f143f0dadaf58ce3f73bef804a2eb62098109a
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
