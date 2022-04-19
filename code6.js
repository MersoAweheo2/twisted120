gdjs.MultiplayerPreviewCode = {};
gdjs.MultiplayerPreviewCode.GDportalVersusObjects1= [];
gdjs.MultiplayerPreviewCode.GDportalVersusObjects2= [];
gdjs.MultiplayerPreviewCode.GDportalVersusObjects3= [];
gdjs.MultiplayerPreviewCode.GDbackgroundObjects1= [];
gdjs.MultiplayerPreviewCode.GDbackgroundObjects2= [];
gdjs.MultiplayerPreviewCode.GDbackgroundObjects3= [];
gdjs.MultiplayerPreviewCode.GDresumeObjects1= [];
gdjs.MultiplayerPreviewCode.GDresumeObjects2= [];
gdjs.MultiplayerPreviewCode.GDresumeObjects3= [];
gdjs.MultiplayerPreviewCode.GDlevelObjects1= [];
gdjs.MultiplayerPreviewCode.GDlevelObjects2= [];
gdjs.MultiplayerPreviewCode.GDlevelObjects3= [];
gdjs.MultiplayerPreviewCode.GDPause1Objects1= [];
gdjs.MultiplayerPreviewCode.GDPause1Objects2= [];
gdjs.MultiplayerPreviewCode.GDPause1Objects3= [];
gdjs.MultiplayerPreviewCode.GDPause2Objects1= [];
gdjs.MultiplayerPreviewCode.GDPause2Objects2= [];
gdjs.MultiplayerPreviewCode.GDPause2Objects3= [];
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects1= [];
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects2= [];
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects3= [];

gdjs.MultiplayerPreviewCode.conditionTrue_0 = {val:false};
gdjs.MultiplayerPreviewCode.condition0IsTrue_0 = {val:false};
gdjs.MultiplayerPreviewCode.condition1IsTrue_0 = {val:false};
gdjs.MultiplayerPreviewCode.condition2IsTrue_0 = {val:false};
gdjs.MultiplayerPreviewCode.conditionTrue_1 = {val:false};
gdjs.MultiplayerPreviewCode.condition0IsTrue_1 = {val:false};
gdjs.MultiplayerPreviewCode.condition1IsTrue_1 = {val:false};
gdjs.MultiplayerPreviewCode.condition2IsTrue_1 = {val:false};


gdjs.MultiplayerPreviewCode.eventsList0 = function(runtimeScene) {

{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}if ( gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val ) {
{
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}if ( gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val ) {
{
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


};gdjs.MultiplayerPreviewCode.mapOfGDgdjs_46MultiplayerPreviewCode_46GDresumeObjects1Objects = Hashtable.newFrom({"resume": gdjs.MultiplayerPreviewCode.GDresumeObjects1});gdjs.MultiplayerPreviewCode.eventsList1 = function(runtimeScene) {

{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
{gdjs.MultiplayerPreviewCode.conditionTrue_1 = gdjs.MultiplayerPreviewCode.condition0IsTrue_0;
gdjs.MultiplayerPreviewCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21826060);
}
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.MultiplayerPreviewCode.eventsList2 = function(runtimeScene) {

{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
{gdjs.MultiplayerPreviewCode.conditionTrue_1 = gdjs.MultiplayerPreviewCode.condition0IsTrue_0;
gdjs.MultiplayerPreviewCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21824772);
}
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Delay Your Dreams.wav", 1, true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}
{ //Subevents
gdjs.MultiplayerPreviewCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MultiplayerPreviewCode.mapOfGDgdjs_46MultiplayerPreviewCode_46GDCopyOfresumeObjects1Objects = Hashtable.newFrom({"CopyOfresume": gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects1});gdjs.MultiplayerPreviewCode.eventsList3 = function(runtimeScene) {

{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
{gdjs.MultiplayerPreviewCode.conditionTrue_1 = gdjs.MultiplayerPreviewCode.condition0IsTrue_0;
gdjs.MultiplayerPreviewCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21830164);
}
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.MultiplayerPreviewCode.eventsList4 = function(runtimeScene) {

{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
{gdjs.MultiplayerPreviewCode.conditionTrue_1 = gdjs.MultiplayerPreviewCode.condition0IsTrue_0;
gdjs.MultiplayerPreviewCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21828884);
}
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Delay Your Dreams.wav", 1, true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}
{ //Subevents
gdjs.MultiplayerPreviewCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.MultiplayerPreviewCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}}

}


{



}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MultiplayerPreviewCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("resume"), gdjs.MultiplayerPreviewCode.GDresumeObjects1);

gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val ) {
{
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MultiplayerPreviewCode.mapOfGDgdjs_46MultiplayerPreviewCode_46GDresumeObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}{runtimeScene.getGame().getVariables().get("skipless").setNumber(0);
}{runtimeScene.getVariables().get("cred").setNumber(0);
}{runtimeScene.getGame().getVariables().get("player2Score").setNumber(0);
}{runtimeScene.getGame().getVariables().get("player1Score").setNumber(0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.MultiplayerPreviewCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopyOfresume"), gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects1);

gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val ) {
{
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MultiplayerPreviewCode.mapOfGDgdjs_46MultiplayerPreviewCode_46GDCopyOfresumeObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}{runtimeScene.getGame().getVariables().get("skipless").setNumber(1);
}{runtimeScene.getVariables().get("cred").setNumber(0);
}{runtimeScene.getGame().getVariables().get("player2Score").setNumber(0);
}{runtimeScene.getGame().getVariables().get("player1Score").setNumber(0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.MultiplayerPreviewCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.MultiplayerPreviewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MultiplayerPreviewCode.GDportalVersusObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDportalVersusObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDportalVersusObjects3.length = 0;
gdjs.MultiplayerPreviewCode.GDbackgroundObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDbackgroundObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDbackgroundObjects3.length = 0;
gdjs.MultiplayerPreviewCode.GDresumeObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDresumeObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDresumeObjects3.length = 0;
gdjs.MultiplayerPreviewCode.GDlevelObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDlevelObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDlevelObjects3.length = 0;
gdjs.MultiplayerPreviewCode.GDPause1Objects1.length = 0;
gdjs.MultiplayerPreviewCode.GDPause1Objects2.length = 0;
gdjs.MultiplayerPreviewCode.GDPause1Objects3.length = 0;
gdjs.MultiplayerPreviewCode.GDPause2Objects1.length = 0;
gdjs.MultiplayerPreviewCode.GDPause2Objects2.length = 0;
gdjs.MultiplayerPreviewCode.GDPause2Objects3.length = 0;
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects3.length = 0;

gdjs.MultiplayerPreviewCode.eventsList5(runtimeScene);
return;

}

gdjs['MultiplayerPreviewCode'] = gdjs.MultiplayerPreviewCode;
