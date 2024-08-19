import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { InjectionChildComponent } from './injection-child/injection-child.component';
import { InjectionParentComponent } from './injection-parent/injection-parent.component';
import { ParentComponent } from './detection-parent/parent.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SecondChildComponent,
    InjectionParentComponent,
    InjectionChildComponent,
    ContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
