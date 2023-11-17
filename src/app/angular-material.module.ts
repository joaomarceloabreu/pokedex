import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  exports: [
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatInputModule
  ],
})
export class AngularMaterialModule { }
