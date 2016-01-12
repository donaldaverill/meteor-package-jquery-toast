if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Toast.info('Toast!!!!');
    }
  });
}
