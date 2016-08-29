import { autoinject } from 'aurelia-framework';
import { MdToastService } from 'aurelia-materialize-bridge';

@autoinject
export class App {
  message = 'Hello World!';

  constructor(private toast: MdToastService) {}

  showToast(toastText) {
    this.toast.show(toastText, 2000);
  }
}
