gdjs.ChooseControlsCode = {};
gdjs.ChooseControlsCode.GDportalVersusObjects1= [];
gdjs.ChooseControlsCode.GDportalVersusObjects2= [];
gdjs.ChooseControlsCode.GDportalVersusObjects3= [];
gdjs.ChooseControlsCode.GDButton2Objects1= [];
gdjs.ChooseControlsCode.GDButton2Objects2= [];
gdjs.ChooseControlsCode.GDButton2Objects3= [];
gdjs.ChooseControlsCode.GDButtonObjects1= [];
gdjs.ChooseControlsCode.GDButtonObjects2= [];
gdjs.ChooseControlsCode.GDButtonObjects3= [];
gdjs.ChooseControlsCode.GDinfomashun2Objects1= [];
gdjs.ChooseControlsCode.GDinfomashun2Objects2= [];
gdjs.ChooseControlsCode.GDinfomashun2Objects3= [];
gdjs.ChooseControlsCode.GDinfomashunObjects1= [];
gdjs.ChooseControlsCode.GDinfomashunObjects2= [];
gdjs.ChooseControlsCode.GDinfomashunObjects3= [];

gdjs.ChooseControlsCode.conditionTrue_0 = {val:false};
gdjs.ChooseControlsCode.condition0IsTrue_0 = {val:false};
gdjs.ChooseControlsCode.condition1IsTrue_0 = {val:false};
gdjs.ChooseControlsCode.condition2IsTrue_0 = {val:false};
gdjs.ChooseControlsCode.condition3IsTrue_0 = {val:false};
gdjs.ChooseControlsCode.condition4IsTrue_0 = {val:false};
gdjs.ChooseControlsCode.conditionTrue_1 = {val:false};
gdjs.ChooseControlsCode.condition0IsTrue_1 = {val:false};
gdjs.ChooseControlsCode.condition1IsTrue_1 = {val:false};
gdjs.ChooseControlsCode.condition2IsTrue_1 = {val:false};
gdjs.ChooseControlsCode.condition3IsTrue_1 = {val:false};
gdjs.ChooseControlsCode.condition4IsTrue_1 = {val:false};


gdjs.ChooseControlsCode.eventsList0 = function(runtimeScene) {

{


gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition1IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}if ( gdjs.ChooseControlsCode.condition0IsTrue_0.val ) {
{
gdjs.ChooseControlsCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.ChooseControlsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition1IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}if ( gdjs.ChooseControlsCode.condition0IsTrue_0.val ) {
{
gdjs.ChooseControlsCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.ChooseControlsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


};gdjs.ChooseControlsCode.mapOfGDgdjs_46ChooseControlsCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.ChooseControlsCode.GDButtonObjects1});gdjs.ChooseControlsCode.mapOfGDgdjs_46ChooseControlsCode_46GDButton2Objects1Objects = Hashtable.newFrom({"Button2": gdjs.ChooseControlsCode.GDButton2Objects1});gdjs.ChooseControlsCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if (gdjs.ChooseControlsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ChooseControlsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.ChooseControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.ChooseControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.ChooseControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ChooseControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ChooseControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "splashWait");
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.ChooseControlsCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.ChooseControlsCode.GDButton2Objects1);
{for(var i = 0, len = gdjs.ChooseControlsCode.GDButton2Objects1.length ;i < len;++i) {
    gdjs.ChooseControlsCode.GDButton2Objects1[i].setOpacity(gdjs.ChooseControlsCode.GDButton2Objects1[i].getOpacity() - (10));
}
}{for(var i = 0, len = gdjs.ChooseControlsCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.ChooseControlsCode.GDButtonObjects1[i].setOpacity(gdjs.ChooseControlsCode.GDButtonObjects1[i].getOpacity() - (10));
}
}}

}


{


gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition1IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition2IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}if ( gdjs.ChooseControlsCode.condition0IsTrue_0.val ) {
{
{gdjs.ChooseControlsCode.conditionTrue_1 = gdjs.ChooseControlsCode.condition1IsTrue_0;
gdjs.ChooseControlsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10962324);
}
}if ( gdjs.ChooseControlsCode.condition1IsTrue_0.val ) {
{
gdjs.ChooseControlsCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "splashWait") > 0.0001;
}}
}
if (gdjs.ChooseControlsCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ShowControls", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.ChooseControlsCode.GDButtonObjects1);

gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition1IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition2IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition3IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ChooseControlsCode.condition0IsTrue_0.val ) {
{
gdjs.ChooseControlsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseControlsCode.mapOfGDgdjs_46ChooseControlsCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ChooseControlsCode.condition1IsTrue_0.val ) {
{
{gdjs.ChooseControlsCode.conditionTrue_1 = gdjs.ChooseControlsCode.condition2IsTrue_0;
gdjs.ChooseControlsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12209068);
}
}if ( gdjs.ChooseControlsCode.condition2IsTrue_0.val ) {
{
gdjs.ChooseControlsCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "splashWait") > 0.0001;
}}
}
}
if (gdjs.ChooseControlsCode.condition3IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(4);
}{runtimeScene.getGame().getVariables().get("gamePlatformChange").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.ChooseControlsCode.GDButton2Objects1);

gdjs.ChooseControlsCode.condition0IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition1IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition2IsTrue_0.val = false;
gdjs.ChooseControlsCode.condition3IsTrue_0.val = false;
{
gdjs.ChooseControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ChooseControlsCode.condition0IsTrue_0.val ) {
{
gdjs.ChooseControlsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseControlsCode.mapOfGDgdjs_46ChooseControlsCode_46GDButton2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.ChooseControlsCode.condition1IsTrue_0.val ) {
{
{gdjs.ChooseControlsCode.conditionTrue_1 = gdjs.ChooseControlsCode.condition2IsTrue_0;
gdjs.ChooseControlsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9841932);
}
}if ( gdjs.ChooseControlsCode.condition2IsTrue_0.val ) {
{
gdjs.ChooseControlsCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "splashWait") > 0.0001;
}}
}
}
if (gdjs.ChooseControlsCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ShowControls", false);
}}

}


};

gdjs.ChooseControlsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChooseControlsCode.GDportalVersusObjects1.length = 0;
gdjs.ChooseControlsCode.GDportalVersusObjects2.length = 0;
gdjs.ChooseControlsCode.GDportalVersusObjects3.length = 0;
gdjs.ChooseControlsCode.GDButton2Objects1.length = 0;
gdjs.ChooseControlsCode.GDButton2Objects2.length = 0;
gdjs.ChooseControlsCode.GDButton2Objects3.length = 0;
gdjs.ChooseControlsCode.GDButtonObjects1.length = 0;
gdjs.ChooseControlsCode.GDButtonObjects2.length = 0;
gdjs.ChooseControlsCode.GDButtonObjects3.length = 0;
gdjs.ChooseControlsCode.GDinfomashun2Objects1.length = 0;
gdjs.ChooseControlsCode.GDinfomashun2Objects2.length = 0;
gdjs.ChooseControlsCode.GDinfomashun2Objects3.length = 0;
gdjs.ChooseControlsCode.GDinfomashunObjects1.length = 0;
gdjs.ChooseControlsCode.GDinfomashunObjects2.length = 0;
gdjs.ChooseControlsCode.GDinfomashunObjects3.length = 0;

gdjs.ChooseControlsCode.eventsList1(runtimeScene);
return;

}

gdjs['ChooseControlsCode'] = gdjs.ChooseControlsCode;
