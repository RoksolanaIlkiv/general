import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnChanges {
  data = input('');
  childData = signal<string>('Initial data of the child');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.childData.set(this.data());
    }
  }

  onChildDataUpdate() {
    this.childData.set('Updated data of the child');
  }

  checkTemplateUpdate() {
    alert('Changes detected! The first child component has been updated!');
  }
}
