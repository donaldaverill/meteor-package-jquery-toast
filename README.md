# Toast for Meteor (jQuery)

An extension of [chrismbeckett:toastr](https://atmospherejs.com/chrismbeckett/toastr) with a new namespace, defaults and removal from `window`.

### Install
`meteor add fourquet:jquery-toast`

### Usage
Example:
```js
if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Toast.info('Toast!!!!');
    }
  });
}
```
### Defaults
```js
Toast.options = {
  closeButton: true,
  progressBar: true,
  positionClass: 'toast-bottom-full-width',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
  timeOut: 1500,
};
```
#### Version
2.1.2_1

#### License
MIT
