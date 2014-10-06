var messageShow = Handlebars.compile($('#message').html());
var messageForm = Handlebars.compile($('#message-form').html())
var userForm = Handlebars.compile($('#user-form').html());

function addMessage(data, callback) {
  $('.messages').append(messageShow(data));
  callback();
}

function showMessageForm() {
  $('body').append(messageForm());
}

function hideUserForm(callback) {
  $('#user-form-wrap').hide();
  callback();
}

(function() {
  $('body').append(userForm);
})();

// https://gist.github.com/ryndel/3886867
Handlebars.registerHelper('linkify', function (text) {
    return new Handlebars.SafeString(
      text.replace(/(http|ftp|https):\/\/([\w-]+(.[\w-]+)+)([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/gi, function (s) {
        return '<a href="' + s + '">' + s + '</a>';
      }).replace(/(^|)@(\w+)/gi, function (s) {
        return '<a href="http://twitter.com/' + s + '">' + s + '</a>';
      }).replace(/(^|)#(\w+)/gi, function (s) {
        return '<a href="http://search.twitter.com/search?q=' + s.replace(/#/,'%23') + '">' + s + '</a>';
      });
    );
});
