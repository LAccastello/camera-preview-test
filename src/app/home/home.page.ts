import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { CameraPreview } = Plugins;
// import { CameraPreviewOptions } from '@capacitor-community/camera-preview';
import { CameraPreviewOptions } from '@capacitor-community/camera-preview';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {
    CameraPreview.start({ parent: 'cameraPreview' })
      .then(() => {
        const video = <HTMLVideoElement>document.getElementById('video');
        video.setAttribute('playsinline', '');
        video.play();
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  }

  capture() {
    CameraPreview.capture().then((a) => console.log(JSON.stringify(a)));
  }
}
