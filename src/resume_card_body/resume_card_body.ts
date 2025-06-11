import { Component, Input } from "@angular/core";

@Component({
    selector: 'resume_card_body',
    templateUrl: 'resume_card_body.html',
    styleUrl: 'resume_card_body.scss' 
})
export class resume_card_body{
    @Input()
    body_title_text : string = "Title";
    @Input()
    body_main_text : string = "Body";
    @Input()
    body_footer_text : string = "Footer";
}