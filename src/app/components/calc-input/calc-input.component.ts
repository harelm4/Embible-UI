import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeIn } from 'animations';
import { ApiService } from 'src/app/api.service';
import { ITextPrediction } from 'src/interfaces/icalc-result';

@Component({
  selector: 'app-calc-input',
  templateUrl: './calc-input.component.html',
  styleUrls: ['./calc-input.component.css'],
  animations: [fadeIn],
})
export class CalcInputComponent implements OnInit {
  textPreds: ITextPrediction[] | undefined;
  inputText: string = '';
  loading: boolean = false;
  fileName: string = '';
  constructor(public router: Router, private apiService: ApiService) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(['']);
  }
  calc() {
    this.textPreds = [{ text: '...אנא המתן', predictions: undefined }];

    this.apiService.calc(this.inputText).subscribe({
      next: (res: ITextPrediction[]) => {
        this.textPreds = res;
      },
    });
  }
  onInputTextChange() {
    this.fileName = '';
  }
  onFileSelected(event: Event) {
    this.loading = true;
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    const file: File = fileList?.item(0)!;
    this.fileName = file?.name ?? '';
    if (fileList && fileList.item(0)?.type == 'text/plain') {
      const reader = new FileReader();
      reader.onload = e => {
        this.inputText = reader.result?.toString().trim() ?? 'reading problem';
        this.loading = false;
      };
      reader.readAsText(file);
    }
  }
}
