import { Component } from '@angular/core';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmMenuComponent, HlmMenuImports } from '@spartan-ng/ui-menu-helm';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BrnMenuTriggerDirective, HlmMenuImports, HlmMenuComponent],
  template: `
    <button [brnMenuTriggerFor]="template">Button</button>
    <ng-template #template> </ng-template>
  `,
})
export class AppComponent {}
