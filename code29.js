gdjs.Level21Code = {};
gdjs.Level21Code.GDportalVersusObjects1= [];
gdjs.Level21Code.GDportalVersusObjects2= [];
gdjs.Level21Code.GDbackObjects1= [];
gdjs.Level21Code.GDbackObjects2= [];

gdjs.Level21Code.conditionTrue_0 = {val:false};
gdjs.Level21Code.condition0IsTrue_0 = {val:false};
gdjs.Level21Code.condition1IsTrue_0 = {val:false};
gdjs.Level21Code.condition2IsTrue_0 = {val:false};


gdjs.Level21Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level21Code.condition0IsTrue_0.val = false;
gdjs.Level21Code.condition1IsTrue_0.val = false;
{
gdjs.Level21Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Level21Code.condition0IsTrue_0.val ) {
{
gdjs.Level21Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.Level21Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intermission1", false);
}}

}


{


gdjs.Level21Code.condition0IsTrue_0.val = false;
gdjs.Level21Code.condition1IsTrue_0.val = false;
{
gdjs.Level21Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
}if ( gdjs.Level21Code.condition0IsTrue_0.val ) {
{
gdjs.Level21Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.Level21Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndMultiplayer", false);
}}

}


};

gdjs.Level21Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level21Code.GDportalVersusObjects1.length = 0;
gdjs.Level21Code.GDportalVersusObjects2.length = 0;
gdjs.Level21Code.GDbackObjects1.length = 0;
gdjs.Level21Code.GDbackObjects2.length = 0;

gdjs.Level21Code.eventsList0(runtimeScene);
return;

}

gdjs['Level21Code'] = gdjs.Level21Code;
