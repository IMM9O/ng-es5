(function (app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'template/app.component.html'
        }).Class({
            constructor: function () {
                this.someProperty = 'Initial value';
            }
        });
})(window.app || (window.app = {}));
