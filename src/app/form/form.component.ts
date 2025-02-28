import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent implements OnInit{
  formContact!: FormGroup;

  constructor(private form: FormBuilder){
    this.formContact = this.form.group({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/)]),
      birthdate: new FormControl('', [Validators.required, this.validarMayorEdad])
    });
   }

  ngOnInit(): void {
  }

  validarMayorEdad(control: AbstractControl):ValidationErrors | null{
    if(!control.value) return null;

    const birthdate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiference = today.getMonth() - birthdate.getMonth();
    const dayDiference = today.getDate() - birthdate.getDate();

    const realAge = monthDiference > 0 || (monthDiference === 0 && dayDiference >= 0) ? age : age - 1;
    return realAge >= 18 ? null : { isMenor: true };
  }

  onSubmit(){
    console.log("Formulario enviado: ", this.formContact.value.name + " " + this.formContact.value.lastname + " " + this.formContact.value.birthdate);
    alert(this.formContact.value.name + " " + this.formContact.value.lastname + " " + this.formContact.value.birthdate);
  }

}
