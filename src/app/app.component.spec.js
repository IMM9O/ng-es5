ng.platform.browser.BrowserDomAdapter.makeCurrent();



ng.testing.describe('Component building', function () {
    ng.testing.it('should detect when a property changes',
        ng.testing.inject([ng.testing.TestComponentBuilder], function (tcb) {
            tcb
                .overrideTemplate(app.AppComponent, '<div>{{someProperty}}</div>')
                .createAsync(app.AppComponent)
                .then(function (fixture) {
                    // Trigger change detection
                    fixture.detectChanges();
                    expect(fixture.componentInstance.someProperty).toEqual('Initial value');
                    expect(fixture.nativeElement.innerText).toEqual('Initial value');

                    // Change property's value and chek if it changed in dom and js object
                    fixture.componentInstance.someProperty = 'New value';

                    fixture.detectChanges();
                    expect(fixture.componentInstance.someProperty).toEqual('New value');
                    expect(fixture.nativeElement.innerText).toEqual('New value');
                });
        }));
});
