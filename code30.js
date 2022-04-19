gdjs.Intermission1Code = {};
gdjs.Intermission1Code.GDportalVersusObjects1= [];
gdjs.Intermission1Code.GDportalVersusObjects2= [];
gdjs.Intermission1Code.GDportalVersusObjects3= [];
gdjs.Intermission1Code.GDportalVersusObjects4= [];
gdjs.Intermission1Code.GDbackgroundObjects1= [];
gdjs.Intermission1Code.GDbackgroundObjects2= [];
gdjs.Intermission1Code.GDbackgroundObjects3= [];
gdjs.Intermission1Code.GDbackgroundObjects4= [];
gdjs.Intermission1Code.GDresumeObjects1= [];
gdjs.Intermission1Code.GDresumeObjects2= [];
gdjs.Intermission1Code.GDresumeObjects3= [];
gdjs.Intermission1Code.GDresumeObjects4= [];
gdjs.Intermission1Code.GDlevelObjects1= [];
gdjs.Intermission1Code.GDlevelObjects2= [];
gdjs.Intermission1Code.GDlevelObjects3= [];
gdjs.Intermission1Code.GDlevelObjects4= [];
gdjs.Intermission1Code.GDmenuObjects1= [];
gdjs.Intermission1Code.GDmenuObjects2= [];
gdjs.Intermission1Code.GDmenuObjects3= [];
gdjs.Intermission1Code.GDmenuObjects4= [];
gdjs.Intermission1Code.GDPause1Objects1= [];
gdjs.Intermission1Code.GDPause1Objects2= [];
gdjs.Intermission1Code.GDPause1Objects3= [];
gdjs.Intermission1Code.GDPause1Objects4= [];
gdjs.Intermission1Code.GDPause2Objects1= [];
gdjs.Intermission1Code.GDPause2Objects2= [];
gdjs.Intermission1Code.GDPause2Objects3= [];
gdjs.Intermission1Code.GDPause2Objects4= [];
gdjs.Intermission1Code.GDflashObjects1= [];
gdjs.Intermission1Code.GDflashObjects2= [];
gdjs.Intermission1Code.GDflashObjects3= [];
gdjs.Intermission1Code.GDflashObjects4= [];

gdjs.Intermission1Code.conditionTrue_0 = {val:false};
gdjs.Intermission1Code.condition0IsTrue_0 = {val:false};
gdjs.Intermission1Code.condition1IsTrue_0 = {val:false};
gdjs.Intermission1Code.condition2IsTrue_0 = {val:false};
gdjs.Intermission1Code.condition3IsTrue_0 = {val:false};
gdjs.Intermission1Code.conditionTrue_1 = {val:false};
gdjs.Intermission1Code.condition0IsTrue_1 = {val:false};
gdjs.Intermission1Code.condition1IsTrue_1 = {val:false};
gdjs.Intermission1Code.condition2IsTrue_1 = {val:false};
gdjs.Intermission1Code.condition3IsTrue_1 = {val:false};


gdjs.Intermission1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
gdjs.Intermission1Code.condition1IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}if ( gdjs.Intermission1Code.condition0IsTrue_0.val ) {
{
gdjs.Intermission1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.Intermission1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
gdjs.Intermission1Code.condition1IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}if ( gdjs.Intermission1Code.condition0IsTrue_0.val ) {
{
gdjs.Intermission1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.Intermission1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


};gdjs.Intermission1Code.mapOfGDgdjs_46Intermission1Code_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.Intermission1Code.GDmenuObjects1});gdjs.Intermission1Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if (gdjs.Intermission1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Intermission1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.Intermission1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.Intermission1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.Intermission1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Intermission1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.Intermission1Code.GDmenuObjects1);

gdjs.Intermission1Code.condition0IsTrue_0.val = false;
gdjs.Intermission1Code.condition1IsTrue_0.val = false;
gdjs.Intermission1Code.condition2IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Intermission1Code.mapOfGDgdjs_46Intermission1Code_46GDmenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Intermission1Code.condition0IsTrue_0.val ) {
{
gdjs.Intermission1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Intermission1Code.condition1IsTrue_0.val ) {
{
{gdjs.Intermission1Code.conditionTrue_1 = gdjs.Intermission1Code.condition2IsTrue_0;
gdjs.Intermission1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22877204);
}
}}
}
if (gdjs.Intermission1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


};gdjs.Intermission1Code.eventsList2 = function(runtimeScene) {

{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
{
{gdjs.Intermission1Code.conditionTrue_1 = gdjs.Intermission1Code.condition0IsTrue_0;
gdjs.Intermission1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22879316);
}
}if (gdjs.Intermission1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beginTime");
}}

}


};gdjs.Intermission1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Intermission1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("flash"), gdjs.Intermission1Code.GDflashObjects2);
{for(var i = 0, len = gdjs.Intermission1Code.GDflashObjects2.length ;i < len;++i) {
    gdjs.Intermission1Code.GDflashObjects2[i].setPosition(0,0);
}
}{runtimeScene.getVariables().get("beginAnim").setNumber(0);
}
{ //Subevents
gdjs.Intermission1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
gdjs.Intermission1Code.condition1IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "beginTime"));
}if ( gdjs.Intermission1Code.condition0IsTrue_0.val ) {
{
gdjs.Intermission1Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("beginAnim")) == 0;
}}
if (gdjs.Intermission1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("flash"), gdjs.Intermission1Code.GDflashObjects2);
{for(var i = 0, len = gdjs.Intermission1Code.GDflashObjects2.length ;i < len;++i) {
    gdjs.Intermission1Code.GDflashObjects2[i].setOpacity(gdjs.Intermission1Code.GDflashObjects2[i].getOpacity() - (10));
}
}}

}


{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
gdjs.Intermission1Code.condition1IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "beginTime");
}if ( gdjs.Intermission1Code.condition0IsTrue_0.val ) {
{
gdjs.Intermission1Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("beginAnim")) == 0;
}}
if (gdjs.Intermission1Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("beginAnim").setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beginTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "beginTime");
}}

}


};gdjs.Intermission1Code.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.Intermission1Code.condition0IsTrue_0.val = false;
{
gdjs.Intermission1Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Intermission1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}}

}


{


gdjs.Intermission1Code.eventsList1(runtimeScene);
}


{


gdjs.Intermission1Code.eventsList3(runtimeScene);
}


};

gdjs.Intermission1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intermission1Code.GDportalVersusObjects1.length = 0;
gdjs.Intermission1Code.GDportalVersusObjects2.length = 0;
gdjs.Intermission1Code.GDportalVersusObjects3.length = 0;
gdjs.Intermission1Code.GDportalVersusObjects4.length = 0;
gdjs.Intermission1Code.GDbackgroundObjects1.length = 0;
gdjs.Intermission1Code.GDbackgroundObjects2.length = 0;
gdjs.Intermission1Code.GDbackgroundObjects3.length = 0;
gdjs.Intermission1Code.GDbackgroundObjects4.length = 0;
gdjs.Intermission1Code.GDresumeObjects1.length = 0;
gdjs.Intermission1Code.GDresumeObjects2.length = 0;
gdjs.Intermission1Code.GDresumeObjects3.length = 0;
gdjs.Intermission1Code.GDresumeObjects4.length = 0;
gdjs.Intermission1Code.GDlevelObjects1.length = 0;
gdjs.Intermission1Code.GDlevelObjects2.length = 0;
gdjs.Intermission1Code.GDlevelObjects3.length = 0;
gdjs.Intermission1Code.GDlevelObjects4.length = 0;
gdjs.Intermission1Code.GDmenuObjects1.length = 0;
gdjs.Intermission1Code.GDmenuObjects2.length = 0;
gdjs.Intermission1Code.GDmenuObjects3.length = 0;
gdjs.Intermission1Code.GDmenuObjects4.length = 0;
gdjs.Intermission1Code.GDPause1Objects1.length = 0;
gdjs.Intermission1Code.GDPause1Objects2.length = 0;
gdjs.Intermission1Code.GDPause1Objects3.length = 0;
gdjs.Intermission1Code.GDPause1Objects4.length = 0;
gdjs.Intermission1Code.GDPause2Objects1.length = 0;
gdjs.Intermission1Code.GDPause2Objects2.length = 0;
gdjs.Intermission1Code.GDPause2Objects3.length = 0;
gdjs.Intermission1Code.GDPause2Objects4.length = 0;
gdjs.Intermission1Code.GDflashObjects1.length = 0;
gdjs.Intermission1Code.GDflashObjects2.length = 0;
gdjs.Intermission1Code.GDflashObjects3.length = 0;
gdjs.Intermission1Code.GDflashObjects4.length = 0;

gdjs.Intermission1Code.eventsList4(runtimeScene);
return;

}

gdjs['Intermission1Code'] = gdjs.Intermission1Code;
