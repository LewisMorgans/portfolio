import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { wysiwyg } from 'src/app/config/wysiwyg/wysiwyg.component';

type Response = {
  httpCode: number,
  errorReason: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  public wysiwyg = new wysiwyg();
  public send = false;
  public spinner = true;

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
    this.send = true;
    this.spinner = false;
    let payload = {
      ...this.contactForm.value
    };

    this._http.post<Response>('/api/mail', payload)
      .subscribe(resp => {
        if (resp.httpCode !== 200) {
          this.send = false;
          this.spinner = true;
          console.log(resp);
        } else {
          this.send = false;
          this.spinner = true;
          console.log('Message Sent');
          this.intialiseForm();
        }
      });
  }
}
