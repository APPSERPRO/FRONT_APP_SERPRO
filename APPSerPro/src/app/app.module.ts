import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PROJECT COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  RouterModule} from '@angular/router';
import { IcfesModulesListComponent } from './serpro-components/icfes-modules-list/icfes-modules-list.component';
import { ModulesTestListComponent } from './serpro-components/modules-test-list/modules-test-list.component';
import { IcfesTestComponent } from './serpro-components/modules-test-list/icfes-test/icfes-test.component';
import { MultipleSelectionQuestionComponent } from './serpro-components/modules-test-list/questions/multiple-selection-question/multiple-selection-question.component';

// MATERIAL COMPONENTS
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
//Componente Header
import { HeaderComponent } from './serpro-components/header/header.component';

//services
import { QuestionsService } from './services/question.service';
import { SummaryTestComponent } from './serpro-components/icfes-modules-list/summary-test/summary-test.component'



@NgModule({
  declarations: [
    AppComponent,
    IcfesModulesListComponent,
    ModulesTestListComponent,
    IcfesTestComponent,
    MultipleSelectionQuestionComponent,
    HeaderComponent,
    SummaryTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatRadioModule,
    FormsModule,
    MatExpansionModule,
    RouterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
