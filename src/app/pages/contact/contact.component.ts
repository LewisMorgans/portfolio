import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { wysiwyg } from 'src/app/config/wysiwyg/wysiwyg.component';
import { SnackBarComponent } from 'src/app/components/snackBar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from 'src/app/services/snack-bar.service';

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
  public snackBarRef;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _http: HttpClient,
    private _snackBar: MatSnackBar,
    private readonly _snackBarService: SnackBarService
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
    // this.contactForm.valid;
  }

  public submitForm(): void {
    this.send = true;
    this.spinner = false;
    let payload = {
      ...this.contactForm.value
    };

    this._http.post<Response>('/api/mail', payload) //http://dixienormus.local/8080/api/mail
      .subscribe(resp => {
        if (resp.httpCode !== 200) {
          console.log(resp)
          this.send = false;
          this.spinner = true;
          this._snackBarService.openSnackBar('Message failed to send, please try again', 'X')
        } else {
          this.send = false;
          this.spinner = true;
          this._snackBarService.openSnackBar('Message Sent', 'X')
          this.intialiseForm();
        }
      });
  }
}
