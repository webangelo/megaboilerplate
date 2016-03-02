app.get('/signup', user.signupGet);
app.post('/signup', user.signupPost);
app.get('/login', user.loginGet);
app.post('/login', user.loginPost);
app.get('/forgot', user.forgotGet);
app.post('/forgot', user.forgotPost);
app.get('/reset/:token', user.resetGet);
app.post('/reset/:token', user.resetPost);
