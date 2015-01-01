if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://127.0.0.1'
});
  Posts.insert({
    title: 'Meteor',
    url: 'http://127.0.0.1'
  });

  Posts.insert({
    title: 'Discover Meteor',
    url: 'http://127.0.0.1'
  });
}
