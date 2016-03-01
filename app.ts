
import { QuotaMinibar, MiniBar} from './minibar';
import { IMiniBar } from './minibar';

var qMinibar: IMiniBar = new QuotaMinibar(10);
qMinibar.entnehmen(3);

try {
    qMinibar.entnehmen(3);
}
catch(e) {
    console.debug("Bei Rezeption anrufen ...");
    console.debug(e);
}
finally  {
    console.debug("Alles wieder gut!");
}


