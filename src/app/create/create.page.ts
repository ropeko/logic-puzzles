import { Component } from '@angular/core';
import { PuzzleType } from '../common/enums/puzzle-type.enum';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-create',
    templateUrl: 'create.page.html'
})
export class CreatePage {

    PuzzleType = PuzzleType;

    puzzleType: PuzzleType;

    grid: {
        columns: number,
        rows: number
    };

    constructor(private navController: NavController) {
        this.grid = {
            columns: undefined,
            rows: undefined
        };
    }

    onChangeColumns(event: CustomEvent): void {
        const input: string = event.detail.value;
        if (this.isNumberBetween1And100(input)) {
            this.grid.columns = Number(input);
            console.log('updated grid size:', this.grid);
        }
    }

    onChangePuzzleType(event: CustomEvent): void {
        this.puzzleType = event.detail.value;
        console.log('selected puzzle type:', this.puzzleType);
    }

    onChangeRows(event: CustomEvent): void {
        const input: string = event.detail.value;
        if (this.isNumberBetween1And100(input)) {
            this.grid.rows = Number(input);
            console.log('updated grid size:', this.grid);
        }
    }

    onClick(): void {
        console.log('generate button clicked');
        this.navController.navigateForward('/create/sudoku');
    }

    private isNumberBetween1And100(number: string): boolean {
        const regex1To100 = new RegExp('^[1-9]{1}[0-9]{0,1}$');
        return regex1To100.test(number);
    }

}
