gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.GDportalVersusObjects1= [];
gdjs.TitleScreenCode.GDportalVersusObjects2= [];
gdjs.TitleScreenCode.GDportalVersusObjects3= [];
gdjs.TitleScreenCode.GDportalVersusObjects4= [];
gdjs.TitleScreenCode.GDportalVersusObjects5= [];
gdjs.TitleScreenCode.GDbackgroundObjects1= [];
gdjs.TitleScreenCode.GDbackgroundObjects2= [];
gdjs.TitleScreenCode.GDbackgroundObjects3= [];
gdjs.TitleScreenCode.GDbackgroundObjects4= [];
gdjs.TitleScreenCode.GDbackgroundObjects5= [];
gdjs.TitleScreenCode.GDlogoObjects1= [];
gdjs.TitleScreenCode.GDlogoObjects2= [];
gdjs.TitleScreenCode.GDlogoObjects3= [];
gdjs.TitleScreenCode.GDlogoObjects4= [];
gdjs.TitleScreenCode.GDlogoObjects5= [];
gdjs.TitleScreenCode.GDBeginObjects1= [];
gdjs.TitleScreenCode.GDBeginObjects2= [];
gdjs.TitleScreenCode.GDBeginObjects3= [];
gdjs.TitleScreenCode.GDBeginObjects4= [];
gdjs.TitleScreenCode.GDBeginObjects5= [];
gdjs.TitleScreenCode.GDCreditsObjects1= [];
gdjs.TitleScreenCode.GDCreditsObjects2= [];
gdjs.TitleScreenCode.GDCreditsObjects3= [];
gdjs.TitleScreenCode.GDCreditsObjects4= [];
gdjs.TitleScreenCode.GDCreditsObjects5= [];
gdjs.TitleScreenCode.GDWallObjects1= [];
gdjs.TitleScreenCode.GDWallObjects2= [];
gdjs.TitleScreenCode.GDWallObjects3= [];
gdjs.TitleScreenCode.GDWallObjects4= [];
gdjs.TitleScreenCode.GDWallObjects5= [];
gdjs.TitleScreenCode.GDnoMistakeObjects1= [];
gdjs.TitleScreenCode.GDnoMistakeObjects2= [];
gdjs.TitleScreenCode.GDnoMistakeObjects3= [];
gdjs.TitleScreenCode.GDnoMistakeObjects4= [];
gdjs.TitleScreenCode.GDnoMistakeObjects5= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects1= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects2= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects3= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects4= [];
gdjs.TitleScreenCode.GDmistakeScoreObjects5= [];
gdjs.TitleScreenCode.GDgameversionObjects1= [];
gdjs.TitleScreenCode.GDgameversionObjects2= [];
gdjs.TitleScreenCode.GDgameversionObjects3= [];
gdjs.TitleScreenCode.GDgameversionObjects4= [];
gdjs.TitleScreenCode.GDgameversionObjects5= [];
gdjs.TitleScreenCode.GDgameidObjects1= [];
gdjs.TitleScreenCode.GDgameidObjects2= [];
gdjs.TitleScreenCode.GDgameidObjects3= [];
gdjs.TitleScreenCode.GDgameidObjects4= [];
gdjs.TitleScreenCode.GDgameidObjects5= [];
gdjs.TitleScreenCode.GDVersusObjects1= [];
gdjs.TitleScreenCode.GDVersusObjects2= [];
gdjs.TitleScreenCode.GDVersusObjects3= [];
gdjs.TitleScreenCode.GDVersusObjects4= [];
gdjs.TitleScreenCode.GDVersusObjects5= [];

gdjs.TitleScreenCode.conditionTrue_0 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_0 = {val:false};
gdjs.TitleScreenCode.conditionTrue_1 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_1 = {val:false};


gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), true);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "muteMusic") > 0.0001;
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 75);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("musicMute"), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


};gdjs.TitleScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects4);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDnoMistakeObjects4.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDnoMistakeObjects4[i].getX() > 350 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDnoMistakeObjects4[k] = gdjs.TitleScreenCode.GDnoMistakeObjects4[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDnoMistakeObjects4.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingMistake").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects4);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDnoMistakeObjects4.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDnoMistakeObjects4[i].getX() < 320 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDnoMistakeObjects4[k] = gdjs.TitleScreenCode.GDnoMistakeObjects4[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDnoMistakeObjects4.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingMistake").setNumber(1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingMistake")) == 1;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects4);
{for(var i = 0, len = gdjs.TitleScreenCode.GDnoMistakeObjects4.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDnoMistakeObjects4[i].setX(gdjs.TitleScreenCode.GDnoMistakeObjects4[i].getX() + (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingMistake")) == 0;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDnoMistakeObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDnoMistakeObjects3[i].setX(gdjs.TitleScreenCode.GDnoMistakeObjects3[i].getX() - (0.25));
}
}}

}


};gdjs.TitleScreenCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects3);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDnoMistakeObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDnoMistakeObjects3[i].getX() > 175 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDnoMistakeObjects3[k] = gdjs.TitleScreenCode.GDnoMistakeObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDnoMistakeObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingMistake").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects3);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDnoMistakeObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDnoMistakeObjects3[i].getX() < 155 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDnoMistakeObjects3[k] = gdjs.TitleScreenCode.GDnoMistakeObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDnoMistakeObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingMistake").setNumber(1);
}}

}


{

gdjs.copyArray(gdjs.TitleScreenCode.GDVersusObjects2, gdjs.TitleScreenCode.GDVersusObjects3);


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDVersusObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDVersusObjects3[i].getX() > 538 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDVersusObjects3[k] = gdjs.TitleScreenCode.GDVersusObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDVersusObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingMistake2").setNumber(1);
}}

}


{

gdjs.copyArray(gdjs.TitleScreenCode.GDVersusObjects2, gdjs.TitleScreenCode.GDVersusObjects3);


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDVersusObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDVersusObjects3[i].getX() < 518 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDVersusObjects3[k] = gdjs.TitleScreenCode.GDVersusObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDVersusObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingMistake2").setNumber(0);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingMistake")) == 1;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDnoMistakeObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDnoMistakeObjects3[i].setX(gdjs.TitleScreenCode.GDnoMistakeObjects3[i].getX() + (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingMistake")) == 0;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDnoMistakeObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDnoMistakeObjects3[i].setX(gdjs.TitleScreenCode.GDnoMistakeObjects3[i].getX() - (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingMistake2")) == 0;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.TitleScreenCode.GDVersusObjects2, gdjs.TitleScreenCode.GDVersusObjects3);

{for(var i = 0, len = gdjs.TitleScreenCode.GDVersusObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVersusObjects3[i].setX(gdjs.TitleScreenCode.GDVersusObjects3[i].getX() + (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingMistake2")) == 1;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleScreenCode.GDVersusObjects2 */
{for(var i = 0, len = gdjs.TitleScreenCode.GDVersusObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVersusObjects2[i].setX(gdjs.TitleScreenCode.GDVersusObjects2[i].getX() - (0.25));
}
}}

}


};gdjs.TitleScreenCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Begin"), gdjs.TitleScreenCode.GDBeginObjects3);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDBeginObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDBeginObjects3[i].getY() < 240 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDBeginObjects3[k] = gdjs.TitleScreenCode.GDBeginObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDBeginObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingBegin").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Begin"), gdjs.TitleScreenCode.GDBeginObjects3);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDBeginObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDBeginObjects3[i].getY() > 260 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDBeginObjects3[k] = gdjs.TitleScreenCode.GDBeginObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDBeginObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingBegin").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitleScreenCode.GDCreditsObjects3);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDCreditsObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDCreditsObjects3[i].getY() < 230 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDCreditsObjects3[k] = gdjs.TitleScreenCode.GDCreditsObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDCreditsObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingCredits").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitleScreenCode.GDCreditsObjects3);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TitleScreenCode.GDCreditsObjects3.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDCreditsObjects3[i].getY() > 250 ) {
        gdjs.TitleScreenCode.condition0IsTrue_0.val = true;
        gdjs.TitleScreenCode.GDCreditsObjects3[k] = gdjs.TitleScreenCode.GDCreditsObjects3[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDCreditsObjects3.length = k;}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingCredits").setNumber(1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingBegin")) == 0;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Begin"), gdjs.TitleScreenCode.GDBeginObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDBeginObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDBeginObjects3[i].setY(gdjs.TitleScreenCode.GDBeginObjects3[i].getY() - (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingBegin")) == 1;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Begin"), gdjs.TitleScreenCode.GDBeginObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDBeginObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDBeginObjects3[i].setY(gdjs.TitleScreenCode.GDBeginObjects3[i].getY() + (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingCredits")) == 0;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitleScreenCode.GDCreditsObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDCreditsObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDCreditsObjects3[i].setY(gdjs.TitleScreenCode.GDCreditsObjects3[i].getY() + (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("movingCredits")) == 1;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitleScreenCode.GDCreditsObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDCreditsObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDCreditsObjects3[i].setY(gdjs.TitleScreenCode.GDCreditsObjects3[i].getY() - (0.25));
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 4;
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Begin"), gdjs.TitleScreenCode.GDBeginObjects3);
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitleScreenCode.GDCreditsObjects3);
gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDBeginObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDBeginObjects3[i].setPosition(48,250);
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDnoMistakeObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDnoMistakeObjects3[i].setPosition(339,372);
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDCreditsObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDCreditsObjects3[i].setPosition(643,240);
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Begin"), gdjs.TitleScreenCode.GDBeginObjects3);
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitleScreenCode.GDCreditsObjects3);
gdjs.copyArray(runtimeScene.getObjects("Versus"), gdjs.TitleScreenCode.GDVersusObjects3);
gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDBeginObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDBeginObjects3[i].setPosition(63,250);
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDnoMistakeObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDnoMistakeObjects3[i].setPosition(165,387);
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDVersusObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVersusObjects3[i].setPosition(528,375.5);
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDCreditsObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDCreditsObjects3[i].setPosition(659,240);
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 4;
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Versus"), gdjs.TitleScreenCode.GDVersusObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDVersusObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVersusObjects3[i].hide();
}
}
{ //Subevents
gdjs.TitleScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Versus"), gdjs.TitleScreenCode.GDVersusObjects2);
{for(var i = 0, len = gdjs.TitleScreenCode.GDVersusObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDVersusObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.TitleScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDBeginObjects3Objects = Hashtable.newFrom({"Begin": gdjs.TitleScreenCode.GDBeginObjects3});gdjs.TitleScreenCode.eventsList4 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21751772);
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Delay Your Dreams.wav", 2, true, 100, 1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition1IsTrue_0;
gdjs.TitleScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21752644);
}
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(0)), false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) + 1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition1IsTrue_0;
gdjs.TitleScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21754124);
}
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


};gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDnoMistakeObjects3Objects = Hashtable.newFrom({"noMistake": gdjs.TitleScreenCode.GDnoMistakeObjects3});gdjs.TitleScreenCode.eventsList5 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21757148);
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Delay Your Dreams.wav", 2, true, 100, 1);
}}

}


};gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDCreditsObjects3Objects = Hashtable.newFrom({"Credits": gdjs.TitleScreenCode.GDCreditsObjects3});gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDVersusObjects2Objects = Hashtable.newFrom({"Versus": gdjs.TitleScreenCode.GDVersusObjects2});gdjs.TitleScreenCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Begin"), gdjs.TitleScreenCode.GDBeginObjects3);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDBeginObjects3Objects, runtimeScene, true, false);
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getVariables().get("cred").setNumber(0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "LevelLoad", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.TitleScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("noMistake"), gdjs.TitleScreenCode.GDnoMistakeObjects3);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDnoMistakeObjects3Objects, runtimeScene, true, false);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}
{ //Subevents
gdjs.TitleScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.TitleScreenCode.GDCreditsObjects3);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDCreditsObjects3Objects, runtimeScene, true, false);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("cred").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CreditScreen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Versus"), gdjs.TitleScreenCode.GDVersusObjects2);

gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_46TitleScreenCode_46GDVersusObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MultiplayerPreview", false);
}}

}


};gdjs.TitleScreenCode.eventsList7 = function(runtimeScene) {

{



}


};gdjs.TitleScreenCode.eventsList8 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gameid"), gdjs.TitleScreenCode.GDgameidObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDgameidObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDgameidObjects3[i].setString("");
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
gdjs.TitleScreenCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cred")) == 0;
}}
if (gdjs.TitleScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Menu.wav", 1, true, 100, 1);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.TitleScreenCode.GDbackgroundObjects3);
{for(var i = 0, len = gdjs.TitleScreenCode.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDbackgroundObjects3[i].rotate(20, runtimeScene);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("mistakeScore"), gdjs.TitleScreenCode.GDmistakeScoreObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("SavingData", "noMistakeScore", runtimeScene, runtimeScene.getVariables().get("mistakeTemp"));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("mistakeTemp")));
}{for(var i = 0, len = gdjs.TitleScreenCode.GDmistakeScoreObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDmistakeScoreObjects2[i].setString("NO MISTAKES HIGH SCORE: LEVEL " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}
{ //Subevents
gdjs.TitleScreenCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.TitleScreenCode.eventsList9 = function(runtimeScene) {

{


gdjs.TitleScreenCode.eventsList3(runtimeScene);
}


{


gdjs.TitleScreenCode.eventsList6(runtimeScene);
}


{


gdjs.TitleScreenCode.eventsList8(runtimeScene);
}


{



}


};gdjs.TitleScreenCode.eventsList10 = function(runtimeScene) {

{



}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F9");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TitleScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "muteMusic");
}}

}


{



}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}}

}


{


gdjs.TitleScreenCode.eventsList9(runtimeScene);
}


};

gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDportalVersusObjects1.length = 0;
gdjs.TitleScreenCode.GDportalVersusObjects2.length = 0;
gdjs.TitleScreenCode.GDportalVersusObjects3.length = 0;
gdjs.TitleScreenCode.GDportalVersusObjects4.length = 0;
gdjs.TitleScreenCode.GDportalVersusObjects5.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects1.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects2.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects3.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects4.length = 0;
gdjs.TitleScreenCode.GDbackgroundObjects5.length = 0;
gdjs.TitleScreenCode.GDlogoObjects1.length = 0;
gdjs.TitleScreenCode.GDlogoObjects2.length = 0;
gdjs.TitleScreenCode.GDlogoObjects3.length = 0;
gdjs.TitleScreenCode.GDlogoObjects4.length = 0;
gdjs.TitleScreenCode.GDlogoObjects5.length = 0;
gdjs.TitleScreenCode.GDBeginObjects1.length = 0;
gdjs.TitleScreenCode.GDBeginObjects2.length = 0;
gdjs.TitleScreenCode.GDBeginObjects3.length = 0;
gdjs.TitleScreenCode.GDBeginObjects4.length = 0;
gdjs.TitleScreenCode.GDBeginObjects5.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects1.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects2.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects3.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects4.length = 0;
gdjs.TitleScreenCode.GDCreditsObjects5.length = 0;
gdjs.TitleScreenCode.GDWallObjects1.length = 0;
gdjs.TitleScreenCode.GDWallObjects2.length = 0;
gdjs.TitleScreenCode.GDWallObjects3.length = 0;
gdjs.TitleScreenCode.GDWallObjects4.length = 0;
gdjs.TitleScreenCode.GDWallObjects5.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects1.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects2.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects3.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects4.length = 0;
gdjs.TitleScreenCode.GDnoMistakeObjects5.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects1.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects2.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects3.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects4.length = 0;
gdjs.TitleScreenCode.GDmistakeScoreObjects5.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects1.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects2.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects3.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects4.length = 0;
gdjs.TitleScreenCode.GDgameversionObjects5.length = 0;
gdjs.TitleScreenCode.GDgameidObjects1.length = 0;
gdjs.TitleScreenCode.GDgameidObjects2.length = 0;
gdjs.TitleScreenCode.GDgameidObjects3.length = 0;
gdjs.TitleScreenCode.GDgameidObjects4.length = 0;
gdjs.TitleScreenCode.GDgameidObjects5.length = 0;
gdjs.TitleScreenCode.GDVersusObjects1.length = 0;
gdjs.TitleScreenCode.GDVersusObjects2.length = 0;
gdjs.TitleScreenCode.GDVersusObjects3.length = 0;
gdjs.TitleScreenCode.GDVersusObjects4.length = 0;
gdjs.TitleScreenCode.GDVersusObjects5.length = 0;

gdjs.TitleScreenCode.eventsList10(runtimeScene);
return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
