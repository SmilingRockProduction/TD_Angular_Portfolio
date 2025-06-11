import { Component } from "@angular/core";
import { portfolio_header } from "../header/portfolio_header";
import { sliding_textfield } from "../sliding_resume_textfield/sliding_textfield";

@Component({
    selector: 'resume',
    imports:[portfolio_header, sliding_textfield],
    templateUrl: 'resume.html',
    styleUrl: 'resume.scss' 
})
export class resume{
    json = require('./JSON/resume.json');
    
    personalInformation = this.json["information_personelle"];
    scholarParcours = this.json["parcours_scolaire"];
    professionalXp = this.json["experience_pro"];

}