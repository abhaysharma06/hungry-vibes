function auth(req, res, next) {
  // when user try to login with authenticate info then move toward ordering and futher
  if (req.isAuthenticated()) {
    return next();
  }
  // else redirect to login page
  return res.redirect("/login");
}

module.exports = auth;
