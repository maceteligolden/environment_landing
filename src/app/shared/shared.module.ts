import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './components/topnav/topnav.component';
import { GreenbuttonComponent } from './components/greenbutton/greenbutton.component';
import { OurmissioncardsComponent } from './components/ourmissioncards/ourmissioncards.component';
import { ProjectcardComponent } from './components/projectcard/projectcard.component';
import { WhiteborderbuttonComponent } from './components/whiteborderbutton/whiteborderbutton.component';
import { BlogcardComponent } from './components/blogcard/blogcard.component';
import { TextfieldComponent } from './components/textfield/textfield.component';

@NgModule({
  declarations: [
    TopnavComponent,
    GreenbuttonComponent,
    OurmissioncardsComponent,
    ProjectcardComponent,
    WhiteborderbuttonComponent,
    BlogcardComponent,
    TextfieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopnavComponent,
    GreenbuttonComponent,
    OurmissioncardsComponent,
    ProjectcardComponent,
    WhiteborderbuttonComponent,
    BlogcardComponent,
    TextfieldComponent
  ]
})
export class SharedModule { }
