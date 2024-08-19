import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildService } from '../services/child.service';
import { ParentService } from '../services/parent.service';
import { RootService } from '../services/root.service';

@Component({
  selector: 'app-injection-child',
  templateUrl: './injection-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ChildService, useValue: { test: 'set from child' } }],
})
export class InjectionChildComponent {
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
