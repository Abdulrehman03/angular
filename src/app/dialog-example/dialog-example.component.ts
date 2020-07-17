import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
  url = '';
  constructor() { }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      console.log(event)
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result as string;
      }
    }
  }
  onClick(){
    const fileUpload = document.getElementById('input-file-id') as HTMLInputElement;
    fileUpload.click();
  }
  ngOnInit(): void {
  }

}
