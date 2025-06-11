import { Component, Input } from "@angular/core";

@Component({
    selector: 'resume_presentation_card',
    templateUrl: 'resume_presentation_card.html',
    styleUrl: 'resume_presentation_card.scss' 
})
export class resume_presentation_card{
    @Input()
    body_title_text : string = "Title";
    @Input()
    body_name_text : string = "Name";
    @Input()
    body_birthdate_text : string = "Birthdate";
    @Input()
    body_living_text : string = "Addresses";
    @Input()
    body_hobbies_text : string = "Hobbies";
}