import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { resume_card_body } from "../resume_card_body/resume_card_body";
import { resume_presentation_card } from "../resume_presentation_card/resume_presentation_card";

@Component({
    selector: 'sliding_textfield',
    imports:[
        resume_card_body,
        resume_presentation_card,
        CommonModule
    ],
    templateUrl: 'sliding_textfield.html',
    styleUrl: 'sliding_textfield.scss' 
})
export class sliding_textfield{
    @Input()
    header_presentation_text : string = "Card Header";
    @Input()
    header_scholar_text : string = "Card Header";
    @Input()
    header_pro_text : string = "Card Header";
    @Input()
    personalInformation!: any; 
    @Input()
    scholarParcours!: any[];
    @Input()
    professionalXp!: any[];
}