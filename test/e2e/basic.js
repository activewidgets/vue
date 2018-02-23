
describe('basic', function(){

    it('test', function(){
        browser.url(storybook('basic'));
        browser.waitForExist('.ax-grid');
    });
});