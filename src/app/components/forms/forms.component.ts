import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';

@Component({
  selector: 'app-forms',
  standalone: false,
  
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements CanComponentDeactivate{

  name = ''
  unsavedChanges = false;
  canDeactivate(): boolean {
    if (this.unsavedChanges) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true; // Allow navigation if there are no unsaved changes
  }
}
