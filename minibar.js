/**
 * Created by steyer on 01.03.2016.
 */
System.register([], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var MiniBar /* implements IMiniBar */, QuotaMinibar;
    return {
        setters:[],
        execute: function() {
            MiniBar /* implements IMiniBar */ = (function () {
                function MiniBar /* implements IMiniBar */() {
                    this._betrag = 0;
                    this.entnommen = function (anzahl) { };
                }
                MiniBar /* implements IMiniBar */.prototype.entnehmen = function (anzahl) {
                    this._betrag += anzahl * 3;
                    this.entnommen(anzahl);
                };
                MiniBar /* implements IMiniBar */.prototype.bezahlen = function () {
                    console.debug("Betrag bezahlt!");
                    this._betrag = 0;
                };
                Object.defineProperty(MiniBar /* implements IMiniBar */.prototype, "betrag", {
                    get: function () {
                        return this._betrag;
                    },
                    enumerable: true,
                    configurable: true
                });
                return MiniBar /* implements IMiniBar */;
            })();
            exports_1("MiniBar /* implements IMiniBar */", MiniBar /* implements IMiniBar */);
            QuotaMinibar = (function (_super) {
                __extends(QuotaMinibar, _super);
                function QuotaMinibar(quota) {
                    _super.call(this);
                    this.quota = quota;
                }
                QuotaMinibar.prototype.entnehmen = function (anzahl) {
                    var neuerBetrag = this._betrag + anzahl * 3;
                    if (neuerBetrag > this.quota) {
                        throw new Error("Quota überschritten");
                    }
                    _super.prototype.entnehmen.call(this, anzahl);
                };
                return QuotaMinibar;
            })(MiniBar);
            exports_1("QuotaMinibar", QuotaMinibar);
        }
    }
});
//# sourceMappingURL=minibar.js.map