import {
  Component,
  input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
})
export class SecondChildComponent implements OnChanges {
  data = input('');
  childData = signal<string>('Initial data of the second child');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.childData.set(this.data());
    }
  }

  onChildDataUpdate() {
    this.childData.set('Updated data of the second child');
  }

  checkTemplateUpdate() {
    alert('Changes detected! The Second child component has been updated!');
  }
}
