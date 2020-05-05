describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://www.facebook.com/')
				
		const emailField = $('#email');
		const loginButton = $('[value="Log In"]');
		const passwordField = $('#pass');

		browser.pause(1000)	
		emailField.setValue('muzahid@dummymail.com');	
		browser.pause(1000)	
		passwordField.setValue('this_is_my_dummy_password');
		browser.pause(1000);
		loginButton.click();	
		browser.pause(1000);

		expect(browser).toHaveUrl('https://www.facebook.com/')

		browser.pause(20000)
    })
})