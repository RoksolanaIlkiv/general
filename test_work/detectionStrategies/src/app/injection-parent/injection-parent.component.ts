import { Component } from '@angular/core';
import { ChildService } from '../services/child.service';
import { ParentService } from '../services/parent.service';
import { RootService } from '../services/root.service';

@Component({
  selector: 'app-injection-parent',
  templateUrl: './injection-parent.component.html',
  providers: [
    { provide: ChildService, useValue: { test: 'set from parent' } },
    { provide: ParentService, useValue: { test: 'set from parent' } },
  ],
})
export class InjectionParentComponent {
  rootServiceText = '';
  parentServiceText = '';
  childServiceText = '';

  constructor(
    private service: ParentService,
    private child: ChildService,
    private root: RootService
  ) {
    this.rootServiceText = this.root.test;
    this.parentServiceText = this.service.test;
    this.childServiceText = this.child.test;
  }
}
