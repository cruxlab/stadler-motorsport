/**
 * Created by infcle on 23.04.2014.
 */
describe('hello protractor',function(){
    var prot = protractor.getInstance();

    describe('index', function(){
        it('it should show title stadler-motorsport', function(){
            prot.get('/');
            expect(prot.getTitle()).toBe('stadler-motorsport');
        });
    });

    describe('index', function(){
        it('it should include main.html in content-ui', function(){
            prot.get('/');
            expect(prot.document.getElementsByClassName('content-main'));
        })
    })

});
