var SessionApiUtil = {
  login: function (credentials, success) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      dataType: "json",
      data: credentials,
      success: function (currentUser) {
        CurrrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      },
    });
  },

  logout: function () {
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        CurrrentUserActions.receiveCurrentUser({});
      },
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: 'api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        CurrrentUserActions.receiveCurrentUser(currentUser);
      }
    });
  },
};
