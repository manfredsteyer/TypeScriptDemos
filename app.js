System.register(['./minibar'], function(exports_1) {
    var minibar_1;
    var qMinibar, e;
    return {
        setters:[
            function (minibar_1_1) {
                minibar_1 = minibar_1_1;
            }],
        execute: function() {
            qMinibar = new minibar_1.QuotaMinibar(10);
            qMinibar.entnehmen(3);
            try {
                qMinibar.entnehmen(3);
            }
            catch (e) {
                console.debug("Bei Rezeption anrufen ...");
                console.debug(e);
            }
            finally {
                console.debug("Alles wieder gut!");
            }
        }
    }
});
//# sourceMappingURL=app.js.map