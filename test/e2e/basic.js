
describe('basic', function(){

    it('test', async function(){

        await browser.url(storybook('basic'));
        let el = await $('.ax-grid');
        await el.waitForExist();
    });
});