import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private productService: ProductService) { }
  uploadedFiles: any[] = [];

  isUploadSuccess: boolean = false;
  alertType: string;
  alertMsg: string;

  ngOnInit() {
  }

  fileChange(event) {
    const formData = new FormData();

    //let fileList: FileList = event.target.files[0];

    formData.append('file', event.target.files[0]);

    this.productService.fileUpload(formData).subscribe(data => {
      this.alertType = 'success';
      this.alertMsg = 'File Uploaded Successfully.'
      this.isUploadSuccess = true;
    });
  }

  closeAlert() {
    this.isUploadSuccess = false;
  }
}
