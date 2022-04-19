gdjs.EndMultiplayerCode = {};
gdjs.EndMultiplayerCode.GDportalVersusObjects1= [];
gdjs.EndMultiplayerCode.GDportalVersusObjects2= [];
gdjs.EndMultiplayerCode.GDportalVersusObjects3= [];
gdjs.EndMultiplayerCode.GDportalVersusObjects4= [];
gdjs.EndMultiplayerCode.GDbackgroundObjects1= [];
gdjs.EndMultiplayerCode.GDbackgroundObjects2= [];
gdjs.EndMultiplayerCode.GDbackgroundObjects3= [];
gdjs.EndMultiplayerCode.GDbackgroundObjects4= [];
gdjs.EndMultiplayerCode.GDresumeObjects1= [];
gdjs.EndMultiplayerCode.GDresumeObjects2= [];
gdjs.EndMultiplayerCode.GDresumeObjects3= [];
gdjs.EndMultiplayerCode.GDresumeObjects4= [];
gdjs.EndMultiplayerCode.GDlevelObjects1= [];
gdjs.EndMultiplayerCode.GDlevelObjects2= [];
gdjs.EndMultiplayerCode.GDlevelObjects3= [];
gdjs.EndMultiplayerCode.GDlevelObjects4= [];
gdjs.EndMultiplayerCode.GDmenuObjects1= [];
gdjs.EndMultiplayerCode.GDmenuObjects2= [];
gdjs.EndMultiplayerCode.GDmenuObjects3= [];
gdjs.EndMultiplayerCode.GDmenuObjects4= [];
gdjs.EndMultiplayerCode.GDPause1Objects1= [];
gdjs.EndMultiplayerCode.GDPause1Objects2= [];
gdjs.EndMultiplayerCode.GDPause1Objects3= [];
gdjs.EndMultiplayerCode.GDPause1Objects4= [];
gdjs.EndMultiplayerCode.GDPause2Objects1= [];
gdjs.EndMultiplayerCode.GDPause2Objects2= [];
gdjs.EndMultiplayerCode.GDPause2Objects3= [];
gdjs.EndMultiplayerCode.GDPause2Objects4= [];
gdjs.EndMultiplayerCode.GDflashObjects1= [];
gdjs.EndMultiplayerCode.GDflashObjects2= [];
gdjs.EndMultiplayerCode.GDflashObjects3= [];
gdjs.EndMultiplayerCode.GDflashObjects4= [];

gdjs.EndMultiplayerCode.conditionTrue_0 = {val:false};
gdjs.EndMultiplayerCode.condition0IsTrue_0 = {val:false};
gdjs.EndMultiplayerCode.condition1IsTrue_0 = {val:false};
gdjs.EndMultiplayerCode.condition2IsTrue_0 = {val:false};
gdjs.EndMultiplayerCode.condition3IsTrue_0 = {val:false};
gdjs.EndMultiplayerCode.conditionTrue_1 = {val:false};
gdjs.EndMultiplayerCode.condition0IsTrue_1 = {val:false};
gdjs.EndMultiplayerCode.condition1IsTrue_1 = {val:false};
gdjs.EndMultiplayerCode.condition2IsTrue_1 = {val:false};
gdjs.EndMultiplayerCode.condition3IsTrue_1 = {val:false};


gdjs.EndMultiplayerCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.EndMultiplayerCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.EndMultiplayerCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


};gdjs.EndMultiplayerCode.mapOfGDgdjs_46EndMultiplayerCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.EndMultiplayerCode.GDmenuObjects1});gdjs.EndMultiplayerCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if (gdjs.EndMultiplayerCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EndMultiplayerCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.EndMultiplayerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.EndMultiplayerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.EndMultiplayerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndMultiplayerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.EndMultiplayerCode.GDmenuObjects1);

gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition2IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndMultiplayerCode.mapOfGDgdjs_46EndMultiplayerCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.EndMultiplayerCode.condition1IsTrue_0.val ) {
{
{gdjs.EndMultiplayerCode.conditionTrue_1 = gdjs.EndMultiplayerCode.condition2IsTrue_0;
gdjs.EndMultiplayerCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22889540);
}
}}
}
if (gdjs.EndMultiplayerCode.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("SavingData", "LevelLoad", 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


};gdjs.EndMultiplayerCode.eventsList2 = function(runtimeScene) {

{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
{
{gdjs.EndMultiplayerCode.conditionTrue_1 = gdjs.EndMultiplayerCode.condition0IsTrue_0;
gdjs.EndMultiplayerCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22891652);
}
}if (gdjs.EndMultiplayerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beginTime");
}}

}


};gdjs.EndMultiplayerCode.eventsList3 = function(runtimeScene) {

{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndMultiplayerCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("flash"), gdjs.EndMultiplayerCode.GDflashObjects2);
{for(var i = 0, len = gdjs.EndMultiplayerCode.GDflashObjects2.length ;i < len;++i) {
    gdjs.EndMultiplayerCode.GDflashObjects2[i].setPosition(0,0);
}
}{runtimeScene.getVariables().get("beginAnim").setNumber(0);
}
{ //Subevents
gdjs.EndMultiplayerCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("winner")) == 3);
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}}
if (gdjs.EndMultiplayerCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pause2"), gdjs.EndMultiplayerCode.GDPause2Objects2);
{for(var i = 0, len = gdjs.EndMultiplayerCode.GDPause2Objects2.length ;i < len;++i) {
    gdjs.EndMultiplayerCode.GDPause2Objects2[i].setString("Player 1 Score ~ " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("player1Score")) + gdjs.evtTools.string.newLine() + "Player 2 Score ~ " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("player2Score")) + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "The Winner is Player " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("winner")) + "!" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Thanks for playing!");
}
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "beginTime"));
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("beginAnim")) == 0;
}}
if (gdjs.EndMultiplayerCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("flash"), gdjs.EndMultiplayerCode.GDflashObjects2);
{for(var i = 0, len = gdjs.EndMultiplayerCode.GDflashObjects2.length ;i < len;++i) {
    gdjs.EndMultiplayerCode.GDflashObjects2[i].setOpacity(gdjs.EndMultiplayerCode.GDflashObjects2[i].getOpacity() - (10));
}
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "beginTime");
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("beginAnim")) == 0;
}}
if (gdjs.EndMultiplayerCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("beginAnim").setNumber(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "beginTime");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "beginTime");
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("player1Score")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("player2Score"));
}}
if (gdjs.EndMultiplayerCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("winner").setNumber(1);
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("player1Score")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("player2Score"));
}}
if (gdjs.EndMultiplayerCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("winner").setNumber(2);
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("winner")) == 3;
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}}
if (gdjs.EndMultiplayerCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pause2"), gdjs.EndMultiplayerCode.GDPause2Objects2);
{for(var i = 0, len = gdjs.EndMultiplayerCode.GDPause2Objects2.length ;i < len;++i) {
    gdjs.EndMultiplayerCode.GDPause2Objects2[i].setString("Player 1 Score ~ " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("player1Score")) + gdjs.evtTools.string.newLine() + "Player 2 Score ~ " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("player2Score")) + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "The results are tied!" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Thanks for playing!");
}
}}

}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.EndMultiplayerCode.condition0IsTrue_0.val ) {
{
gdjs.EndMultiplayerCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("player1Score")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("player2Score"));
}}
if (gdjs.EndMultiplayerCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("winner").setNumber(3);
}}

}


};gdjs.EndMultiplayerCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.EndMultiplayerCode.condition0IsTrue_0.val = false;
{
gdjs.EndMultiplayerCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.EndMultiplayerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}}

}


{


gdjs.EndMultiplayerCode.eventsList1(runtimeScene);
}


{


gdjs.EndMultiplayerCode.eventsList3(runtimeScene);
}


};

gdjs.EndMultiplayerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndMultiplayerCode.GDportalVersusObjects1.length = 0;
gdjs.EndMultiplayerCode.GDportalVersusObjects2.length = 0;
gdjs.EndMultiplayerCode.GDportalVersusObjects3.length = 0;
gdjs.EndMultiplayerCode.GDportalVersusObjects4.length = 0;
gdjs.EndMultiplayerCode.GDbackgroundObjects1.length = 0;
gdjs.EndMultiplayerCode.GDbackgroundObjects2.length = 0;
gdjs.EndMultiplayerCode.GDbackgroundObjects3.length = 0;
gdjs.EndMultiplayerCode.GDbackgroundObjects4.length = 0;
gdjs.EndMultiplayerCode.GDresumeObjects1.length = 0;
gdjs.EndMultiplayerCode.GDresumeObjects2.length = 0;
gdjs.EndMultiplayerCode.GDresumeObjects3.length = 0;
gdjs.EndMultiplayerCode.GDresumeObjects4.length = 0;
gdjs.EndMultiplayerCode.GDlevelObjects1.length = 0;
gdjs.EndMultiplayerCode.GDlevelObjects2.length = 0;
gdjs.EndMultiplayerCode.GDlevelObjects3.length = 0;
gdjs.EndMultiplayerCode.GDlevelObjects4.length = 0;
gdjs.EndMultiplayerCode.GDmenuObjects1.length = 0;
gdjs.EndMultiplayerCode.GDmenuObjects2.length = 0;
gdjs.EndMultiplayerCode.GDmenuObjects3.length = 0;
gdjs.EndMultiplayerCode.GDmenuObjects4.length = 0;
gdjs.EndMultiplayerCode.GDPause1Objects1.length = 0;
gdjs.EndMultiplayerCode.GDPause1Objects2.length = 0;
gdjs.EndMultiplayerCode.GDPause1Objects3.length = 0;
gdjs.EndMultiplayerCode.GDPause1Objects4.length = 0;
gdjs.EndMultiplayerCode.GDPause2Objects1.length = 0;
gdjs.EndMultiplayerCode.GDPause2Objects2.length = 0;
gdjs.EndMultiplayerCode.GDPause2Objects3.length = 0;
gdjs.EndMultiplayerCode.GDPause2Objects4.length = 0;
gdjs.EndMultiplayerCode.GDflashObjects1.length = 0;
gdjs.EndMultiplayerCode.GDflashObjects2.length = 0;
gdjs.EndMultiplayerCode.GDflashObjects3.length = 0;
gdjs.EndMultiplayerCode.GDflashObjects4.length = 0;

gdjs.EndMultiplayerCode.eventsList4(runtimeScene);
return;

}

gdjs['EndMultiplayerCode'] = gdjs.EndMultiplayerCode;
