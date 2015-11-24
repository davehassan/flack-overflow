var UsersApiUtil = {
  createUser: function (credentials, success) {
    $.ajax({
      url: "api/users",
      type: "POST",
      dataType: "json",
      data: {user: credentials},
      success: function (currentUser) {
         
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      },
    });
  },
};
