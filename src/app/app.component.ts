import { Component } from '@angular/core';
import { AngularFileUploaderConfig } from 'angular-file-uploader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-file-uploader';

  resetUpload1!: boolean;

  afuConfig: AngularFileUploaderConfig = {
    id: 112233,
    
    multiple: true,
    maxSize: 200,
    formatsAllowed: 'image/*',
    //formatsAllowed: 'video/*',
    autoUpload: false,
    // uploadAPI: {
    //   url: 'https://slack.com/api/files.upload',
    // },

    uploadAPI:  {
      url:"https://slack.com/api/files.upload",
      method:"POST",
      headers: {
     //"Content-Type" : "multipart/form-data",
     //"Authorization" : `Bearer ${token}`
      },
      params: {
        'page': '1',
        'name': 'eqwrerewrer',
        'werfwerwr':'mgfog'
      },
      responseType: 'json',
      withCredentials: false,
    },
   
  };


  constructor() {}

  docUpload(event: any) {
    console.log('ApiResponse -> docUpload -> Event: ', event);
  }

}
