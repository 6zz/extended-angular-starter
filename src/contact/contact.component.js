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
  }

  handleSubmit() {
    console.log('form error', this.contactForm.$error);
    this._window.alert(this.text);
  }

}

export default {
  template: require('./contact.html'),
  controller
}
