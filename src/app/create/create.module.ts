import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreatePage } from "./create.page";
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateSudokuPage } from './sudoku/sudoku.page';

@NgModule({
    declarations: [
        CreatePage,
        CreateSudokuPage
    ],
    imports: [
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: CreatePage
            },
            {
                path: 'sudoku',
                component: CreateSudokuPage
            }
        ])
    ]
})
export class CreateModule { }
