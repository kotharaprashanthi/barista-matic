// src/app/loading-modal/loading-modal.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  standalone: false,
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent {
  @Input() isLoading: boolean = false;
}
