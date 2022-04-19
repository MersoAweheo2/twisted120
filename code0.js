gdjs.SplashscreenCode = {};
gdjs.SplashscreenCode.GDportalVersusObjects1= [];
gdjs.SplashscreenCode.GDportalVersusObjects2= [];
gdjs.SplashscreenCode.GDportalVersusObjects3= [];
gdjs.SplashscreenCode.GDcontrolsObjects1= [];
gdjs.SplashscreenCode.GDcontrolsObjects2= [];
gdjs.SplashscreenCode.GDcontrolsObjects3= [];
gdjs.SplashscreenCode.GDNewObjectObjects1= [];
gdjs.SplashscreenCode.GDNewObjectObjects2= [];
gdjs.SplashscreenCode.GDNewObjectObjects3= [];
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1= [];
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects2= [];
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects3= [];
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1= [];
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects2= [];
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects3= [];

gdjs.SplashscreenCode.conditionTrue_0 = {val:false};
gdjs.SplashscreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition1IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition2IsTrue_0 = {val:false};
gdjs.SplashscreenCode.conditionTrue_1 = {val:false};
gdjs.SplashscreenCode.condition0IsTrue_1 = {val:false};
gdjs.SplashscreenCode.condition1IsTrue_1 = {val:false};
gdjs.SplashscreenCode.condition2IsTrue_1 = {val:false};


gdjs.SplashscreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashscreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.SplashscreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashscreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.SplashscreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


};gdjs.SplashscreenCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SplashscreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "splashWait");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "splashWait");
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "splashWait");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.SplashscreenCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.SplashscreenCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDNewObjectObjects1[i].setOpacity(gdjs.SplashscreenCode.GDNewObjectObjects1[i].getOpacity() - (10));
}
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
{gdjs.SplashscreenCode.conditionTrue_1 = gdjs.SplashscreenCode.condition1IsTrue_0;
gdjs.SplashscreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21716828);
}
}}
if (gdjs.SplashscreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ChooseControls", false);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
{gdjs.SplashscreenCode.conditionTrue_1 = gdjs.SplashscreenCode.condition1IsTrue_0;
gdjs.SplashscreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21719228);
}
}}
if (gdjs.SplashscreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ChooseControls", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.SplashscreenCode.GDNewObjectObjects1);

gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashscreenCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.SplashscreenCode.GDNewObjectObjects1[i].getOpacity() == 0 ) {
        gdjs.SplashscreenCode.condition0IsTrue_0.val = true;
        gdjs.SplashscreenCode.GDNewObjectObjects1[k] = gdjs.SplashscreenCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.SplashscreenCode.GDNewObjectObjects1.length = k;}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ChooseControls", false);
}}

}


};

gdjs.SplashscreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashscreenCode.GDportalVersusObjects1.length = 0;
gdjs.SplashscreenCode.GDportalVersusObjects2.length = 0;
gdjs.SplashscreenCode.GDportalVersusObjects3.length = 0;
gdjs.SplashscreenCode.GDcontrolsObjects1.length = 0;
gdjs.SplashscreenCode.GDcontrolsObjects2.length = 0;
gdjs.SplashscreenCode.GDcontrolsObjects3.length = 0;
gdjs.SplashscreenCode.GDNewObjectObjects1.length = 0;
gdjs.SplashscreenCode.GDNewObjectObjects2.length = 0;
gdjs.SplashscreenCode.GDNewObjectObjects3.length = 0;
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1.length = 0;
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects2.length = 0;
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects3.length = 0;
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1.length = 0;
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects2.length = 0;
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects3.length = 0;

gdjs.SplashscreenCode.eventsList1(runtimeScene);
return;

}

gdjs['SplashscreenCode'] = gdjs.SplashscreenCode;
