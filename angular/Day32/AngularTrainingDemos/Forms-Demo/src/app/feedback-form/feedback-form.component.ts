import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})

export class FeedbackFormComponent implements OnInit {
    feedbackForm = new FormGroup({
      trgName: new FormControl(null, Validators.required),
      feedback: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ])
  })


  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit():void {
    console.log('Feedback Given...', this.feedbackForm)
  }
}
