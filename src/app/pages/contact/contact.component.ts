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
    const message = JSON.stringify(this.contactForm.get('message'));
    let payload = {
      ...this.contactForm.value,
      message
    };

    this._http.post<Response>('/api/mail', payload)
      .subscribe(resp => {
        if (resp.httpCode !== 200) {
          alert(resp.errorReason);
        } else {
          alert('Message Sent');
          this.intialiseForm();
        }
      });
  }
}
