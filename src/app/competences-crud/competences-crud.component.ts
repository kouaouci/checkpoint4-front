import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompetenceService } from '../shared/service/competence.service';
import {environment} from 'src/environments/environment';
import { CompetencesComponent } from '../competences/competences.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-competences-crud',
  templateUrl: './competences-crud.component.html',
  styleUrls: ['./competences-crud.component.css']
})
export class CompetencesCrudComponent implements OnInit {
  private formData: FormData;
  createCompetencesForm = this.fb.group({
    type: ['', Validators.required],
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    description: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
   
  });

 


  constructor(private fb:FormBuilder,
    private competencesService: CompetenceService) { 
    this.formData= new FormData();
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.formData.append('type', this.createCompetencesForm.value.type);
    this.formData.append('name', this.createCompetencesForm.value.name);
    this.formData.append('description', this.createCompetencesForm.value.description);
    this.competencesService.postCompetences(this.formData).subscribe({
      next: ()=>{
     alert('la competences est bien créé')
      },
      error :(error) =>{
     alert('error')
      }
    });
  }

}
