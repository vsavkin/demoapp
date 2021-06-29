import { Component } from '@angular/core';
import { formatTitle } from '@happyorg/shared/utils'

@Component({
  selector: 'happyorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'admin';
  subtitle = formatTitle('subtitle')
}
