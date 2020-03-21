import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  public contactForm: FormGroup

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.intialiseForm();
  }

  private intialiseForm(): void {
    this.contactForm = this._fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.contactForm.valid;
  }

  public submitForm(): void {

    let payload = { ...this.contactForm.value };

    this._http.post('/api/mail', payload)
      .subscribe(resp => {
        this.contactForm.reset();
        // add error handling here
      });
  }
}
