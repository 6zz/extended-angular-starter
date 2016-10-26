class controller {
  /*@ngInject*/
  constructor () {
    this.title = 'contact us';
    this.email = '';
    this.text = '';
  }
}

export default {
  template: require('./contact.html'),
  controller,
  controllerAs: 'contactCtrl'
}
