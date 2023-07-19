import { Component, OnInit } from '@angular/core';
import { WordGeneratorService } from 'src/app/services/word-generator.service';

@Component({
  selector: 'app-word-container',
  templateUrl: './word-container.component.html',
  styleUrls: ['./word-container.component.scss']
})
export class WordContainerComponent implements OnInit {

  constructor(private wordService: WordGeneratorService) { }

  ngOnInit(): void {
  }

  word = " - ";

}
