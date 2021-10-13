import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { Forms1Component } from './components/forms1/forms1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CustomPipe1Pipe } from './custom-pipe1.pipe';
import { CheckPipesComponent } from './components/check-pipes/check-pipes.component';
import { FilterPipe } from './filter.pipe';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PassGeneratorComponent } from './components/pass-generator/pass-generator.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PicCardComponent } from './components/pic-card/pic-card.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [
    AppComponent,
    CustomCounterComponent,
    Forms1Component,
    CustomPipe1Pipe,
    CheckPipesComponent,
    FilterPipe,
    PassGeneratorComponent,
    PicCardComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,NzButtonModule,NzFormModule,NzLayoutModule,NzBreadCrumbModule,NzIconModule,
    AppRoutingModule,DragDropModule,NzTableModule,
    AppRoutingModule,ScrollingModule,NzInputModule,
    HttpClientModule,NzSelectModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
