"use strict";
exports.__esModule = true;
var AdvancedRemote_1 = require("./Remote/AdvancedRemote");
var Radio_1 = require("./Devices/Radio");
var radio = new Radio_1["default"](), remote = new AdvancedRemote_1["default"](radio);
remote.toggle();
remote.volumeUp();
remote.mute();
remote.toggle();
