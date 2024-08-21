import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharcterComponent } from './components/add-charcter/add-charcter.component';



@NgModule({
  declarations: [MainPageComponent,
    ListComponent,
    AddCharcterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MainPageComponent]
})
export class DbzModule { }
