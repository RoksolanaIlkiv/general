import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  signalParentData = signal('Initial parent data');
  data = signal('Simple data');

  onParentDataUpdate() {
    this.signalParentData.set('Updated parent data');
  }

  onParentDataChange() {
    console.log('onParentDataChange');

    if (this.signalParentData() === 'Initial parent data') {
      this.signalParentData.set('Updated parent data');
    } else {
      this.signalParentData.set('Initial parent data');
    }
  }

  onOnlyParentDataUpdate() {
    this.data.set('Simple data changed!');
  }

  checkTemplateUpdate() {
    alert('Changes detected! Parent component has been updated!');
  }
}
