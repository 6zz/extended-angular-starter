class controller {
  /*@ngInject*/
  constructor ($window) {
    this._window = $window;
    this.title = 'contact us';
    this.email = '';
    this.text = '';
    this.maxTextCount = 300;
    this.minTextCount = 10;
    this.availableTextCount = this.maxTextCount;
    this.textClasses = this.setValidity();
  }

  updateTextCount() {
    let count = (this.text) ? this.text.length : 0;
    this.availableTextCount = this.maxTextCount - count;

    console.log('avail:', this.availableTextCount, 'curr:', count);
    if (this.availableTextCount < 0 || count < this.minTextCount) {
      this.textClasses = this.setValidity(false);
    } else {
      this.textClasses = this.setValidity(true);
    }
    console.log(this.textClasses);
  }

  handleSubmit() {
    console.log('form error', this.contactForm.$error);
    this._window.alert(this.text);
  }

  setValidity(valid=true) {
    return {
      'ng-valid': valid,
      'ng-invalid': !valid
    }
  }
}

export default {
  template: require('./contact.html'),
  controller
}
