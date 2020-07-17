import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

const MaterialCOmponents = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatExpansionModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
];

@NgModule({
  imports: [MaterialCOmponents],
  exports: [MaterialCOmponents],
})
export class MaterialModule {}
