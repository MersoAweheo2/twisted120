gdjs.CreditScreenCode = {};
gdjs.CreditScreenCode.GDportalVersusObjects1= [];
gdjs.CreditScreenCode.GDportalVersusObjects2= [];
gdjs.CreditScreenCode.GDportalVersusObjects3= [];
gdjs.CreditScreenCode.GDbackgroundObjects1= [];
gdjs.CreditScreenCode.GDbackgroundObjects2= [];
gdjs.CreditScreenCode.GDbackgroundObjects3= [];
gdjs.CreditScreenCode.GDresumeObjects1= [];
gdjs.CreditScreenCode.GDresumeObjects2= [];
gdjs.CreditScreenCode.GDresumeObjects3= [];
gdjs.CreditScreenCode.GDlevelObjects1= [];
gdjs.CreditScreenCode.GDlevelObjects2= [];
gdjs.CreditScreenCode.GDlevelObjects3= [];
gdjs.CreditScreenCode.GDPause1Objects1= [];
gdjs.CreditScreenCode.GDPause1Objects2= [];
gdjs.CreditScreenCode.GDPause1Objects3= [];
gdjs.CreditScreenCode.GDPause2Objects1= [];
gdjs.CreditScreenCode.GDPause2Objects2= [];
gdjs.CreditScreenCode.GDPause2Objects3= [];

gdjs.CreditScreenCode.conditionTrue_0 = {val:false};
gdjs.CreditScreenCode.condition0IsTrue_0 = {val:false};
gdjs.CreditScreenCode.condition1IsTrue_0 = {val:false};
gdjs.CreditScreenCode.condition2IsTrue_0 = {val:false};
gdjs.CreditScreenCode.condition3IsTrue_0 = {val:false};
gdjs.CreditScreenCode.conditionTrue_1 = {val:false};
gdjs.CreditScreenCode.condition0IsTrue_1 = {val:false};
gdjs.CreditScreenCode.condition1IsTrue_1 = {val:false};
gdjs.CreditScreenCode.condition2IsTrue_1 = {val:false};
gdjs.CreditScreenCode.condition3IsTrue_1 = {val:false};


gdjs.CreditScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
gdjs.CreditScreenCode.condition1IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}if ( gdjs.CreditScreenCode.condition0IsTrue_0.val ) {
{
gdjs.CreditScreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.CreditScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
gdjs.CreditScreenCode.condition1IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}if ( gdjs.CreditScreenCode.condition0IsTrue_0.val ) {
{
gdjs.CreditScreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.CreditScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


};gdjs.CreditScreenCode.mapOfGDgdjs_46CreditScreenCode_46GDresumeObjects1Objects = Hashtable.newFrom({"resume": gdjs.CreditScreenCode.GDresumeObjects1});gdjs.CreditScreenCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}}

}


{



}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CreditScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("resume"), gdjs.CreditScreenCode.GDresumeObjects1);

gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
gdjs.CreditScreenCode.condition1IsTrue_0.val = false;
gdjs.CreditScreenCode.condition2IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.CreditScreenCode.condition0IsTrue_0.val ) {
{
gdjs.CreditScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditScreenCode.mapOfGDgdjs_46CreditScreenCode_46GDresumeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditScreenCode.conditionTrue_1 = gdjs.CreditScreenCode.condition2IsTrue_0;
gdjs.CreditScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21784900);
}
}}
}
if (gdjs.CreditScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


};

gdjs.CreditScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditScreenCode.GDportalVersusObjects1.length = 0;
gdjs.CreditScreenCode.GDportalVersusObjects2.length = 0;
gdjs.CreditScreenCode.GDportalVersusObjects3.length = 0;
gdjs.CreditScreenCode.GDbackgroundObjects1.length = 0;
gdjs.CreditScreenCode.GDbackgroundObjects2.length = 0;
gdjs.CreditScreenCode.GDbackgroundObjects3.length = 0;
gdjs.CreditScreenCode.GDresumeObjects1.length = 0;
gdjs.CreditScreenCode.GDresumeObjects2.length = 0;
gdjs.CreditScreenCode.GDresumeObjects3.length = 0;
gdjs.CreditScreenCode.GDlevelObjects1.length = 0;
gdjs.CreditScreenCode.GDlevelObjects2.length = 0;
gdjs.CreditScreenCode.GDlevelObjects3.length = 0;
gdjs.CreditScreenCode.GDPause1Objects1.length = 0;
gdjs.CreditScreenCode.GDPause1Objects2.length = 0;
gdjs.CreditScreenCode.GDPause1Objects3.length = 0;
gdjs.CreditScreenCode.GDPause2Objects1.length = 0;
gdjs.CreditScreenCode.GDPause2Objects2.length = 0;
gdjs.CreditScreenCode.GDPause2Objects3.length = 0;

gdjs.CreditScreenCode.eventsList1(runtimeScene);
return;

}

gdjs['CreditScreenCode'] = gdjs.CreditScreenCode;
