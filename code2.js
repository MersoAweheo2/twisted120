gdjs.ShowControlsCode = {};
gdjs.ShowControlsCode.GDportalVersusObjects1= [];
gdjs.ShowControlsCode.GDportalVersusObjects2= [];
gdjs.ShowControlsCode.GDportalVersusObjects3= [];
gdjs.ShowControlsCode.GDNewObjectObjects1= [];
gdjs.ShowControlsCode.GDNewObjectObjects2= [];
gdjs.ShowControlsCode.GDNewObjectObjects3= [];
gdjs.ShowControlsCode.GDCopyOfcontrolsObjects1= [];
gdjs.ShowControlsCode.GDCopyOfcontrolsObjects2= [];
gdjs.ShowControlsCode.GDCopyOfcontrolsObjects3= [];

gdjs.ShowControlsCode.conditionTrue_0 = {val:false};
gdjs.ShowControlsCode.condition0IsTrue_0 = {val:false};
gdjs.ShowControlsCode.condition1IsTrue_0 = {val:false};
gdjs.ShowControlsCode.condition2IsTrue_0 = {val:false};
gdjs.ShowControlsCode.condition3IsTrue_0 = {val:false};
gdjs.ShowControlsCode.conditionTrue_1 = {val:false};
gdjs.ShowControlsCode.condition0IsTrue_1 = {val:false};
gdjs.ShowControlsCode.condition1IsTrue_1 = {val:false};
gdjs.ShowControlsCode.condition2IsTrue_1 = {val:false};
gdjs.ShowControlsCode.condition3IsTrue_1 = {val:false};


gdjs.ShowControlsCode.eventsList0 = function(runtimeScene) {

{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
gdjs.ShowControlsCode.condition1IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}if ( gdjs.ShowControlsCode.condition0IsTrue_0.val ) {
{
gdjs.ShowControlsCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.ShowControlsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
gdjs.ShowControlsCode.condition1IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}if ( gdjs.ShowControlsCode.condition0IsTrue_0.val ) {
{
gdjs.ShowControlsCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.ShowControlsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


};gdjs.ShowControlsCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if (gdjs.ShowControlsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShowControlsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.ShowControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.ShowControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.ShowControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShowControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShowControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "splashWait");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "splashWait");
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.ShowControlsCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.ShowControlsCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.ShowControlsCode.GDNewObjectObjects1[i].setOpacity(gdjs.ShowControlsCode.GDNewObjectObjects1[i].getOpacity() - (10));
}
}}

}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
gdjs.ShowControlsCode.condition1IsTrue_0.val = false;
gdjs.ShowControlsCode.condition2IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}if ( gdjs.ShowControlsCode.condition0IsTrue_0.val ) {
{
{gdjs.ShowControlsCode.conditionTrue_1 = gdjs.ShowControlsCode.condition1IsTrue_0;
gdjs.ShowControlsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22998700);
}
}if ( gdjs.ShowControlsCode.condition1IsTrue_0.val ) {
{
gdjs.ShowControlsCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "splashWait") > 0.0001;
}}
}
if (gdjs.ShowControlsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
gdjs.ShowControlsCode.condition1IsTrue_0.val = false;
gdjs.ShowControlsCode.condition2IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ShowControlsCode.condition0IsTrue_0.val ) {
{
gdjs.ShowControlsCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "splashWait") > 0.0001;
}if ( gdjs.ShowControlsCode.condition1IsTrue_0.val ) {
{
{gdjs.ShowControlsCode.conditionTrue_1 = gdjs.ShowControlsCode.condition2IsTrue_0;
gdjs.ShowControlsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11991852);
}
}}
}
if (gdjs.ShowControlsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{


gdjs.ShowControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ShowControlsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShowControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{



}


};

gdjs.ShowControlsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShowControlsCode.GDportalVersusObjects1.length = 0;
gdjs.ShowControlsCode.GDportalVersusObjects2.length = 0;
gdjs.ShowControlsCode.GDportalVersusObjects3.length = 0;
gdjs.ShowControlsCode.GDNewObjectObjects1.length = 0;
gdjs.ShowControlsCode.GDNewObjectObjects2.length = 0;
gdjs.ShowControlsCode.GDNewObjectObjects3.length = 0;
gdjs.ShowControlsCode.GDCopyOfcontrolsObjects1.length = 0;
gdjs.ShowControlsCode.GDCopyOfcontrolsObjects2.length = 0;
gdjs.ShowControlsCode.GDCopyOfcontrolsObjects3.length = 0;

gdjs.ShowControlsCode.eventsList1(runtimeScene);
return;

}

gdjs['ShowControlsCode'] = gdjs.ShowControlsCode;
