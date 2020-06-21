gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDplatformObjects1= [];
gdjs.New_32sceneCode.GDplatformObjects2= [];
gdjs.New_32sceneCode.GDplatformObjects3= [];
gdjs.New_32sceneCode.GDplayerObjects1= [];
gdjs.New_32sceneCode.GDplayerObjects2= [];
gdjs.New_32sceneCode.GDplayerObjects3= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects3= [];
gdjs.New_32sceneCode.GDstart_95textObjects1= [];
gdjs.New_32sceneCode.GDstart_95textObjects2= [];
gdjs.New_32sceneCode.GDstart_95textObjects3= [];
gdjs.New_32sceneCode.GDbackgroundObjects1= [];
gdjs.New_32sceneCode.GDbackgroundObjects2= [];
gdjs.New_32sceneCode.GDbackgroundObjects3= [];
gdjs.New_32sceneCode.GDfinishObjects1= [];
gdjs.New_32sceneCode.GDfinishObjects2= [];
gdjs.New_32sceneCode.GDfinishObjects3= [];
gdjs.New_32sceneCode.GDfinish_95textObjects1= [];
gdjs.New_32sceneCode.GDfinish_95textObjects2= [];
gdjs.New_32sceneCode.GDfinish_95textObjects3= [];
gdjs.New_32sceneCode.GDbackgroundCityObjects1= [];
gdjs.New_32sceneCode.GDbackgroundCityObjects2= [];
gdjs.New_32sceneCode.GDbackgroundCityObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0x6cbeec = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDplayerObjects2.createFrom(gdjs.New_32sceneCode.GDplayerObjects1);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects2[k] = gdjs.New_32sceneCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects2[i].setAnimationName("walking");
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimationName("idle");
}
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x6cbeec
gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.New_32sceneCode.GDplayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.New_32sceneCode.GDfinishObjects1});gdjs.New_32sceneCode.eventsList0x5b71c8 = function(runtimeScene) {

{

gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDplayerObjects1[i].setAnimationName("jumping");
}
}}

}


{

gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDplayerObjects1[k] = gdjs.New_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDplayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0x6cbeec(runtimeScene);} //End of subevents
}

}


{

gdjs.New_32sceneCode.GDfinishObjects1.createFrom(runtimeScene.getObjects("finish"));
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDplayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDfinishObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDfinish_95textObjects1.createFrom(runtimeScene.getObjects("finish_text"));
{for(var i = 0, len = gdjs.New_32sceneCode.GDfinish_95textObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDfinish_95textObjects1[i].setLayer("");
}
}}

}


{


{
gdjs.New_32sceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDplayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDplayerObjects1[0] : null), true, "", 0);
}}

}


{


{
{gdjs.evtTools.sound.playMusic(runtimeScene, "cheesy bassoon (loop).mp3", true, 10, 1);
}}

}


}; //End of gdjs.New_32sceneCode.eventsList0x5b71c8


gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDplatformObjects1.length = 0;
gdjs.New_32sceneCode.GDplatformObjects2.length = 0;
gdjs.New_32sceneCode.GDplatformObjects3.length = 0;
gdjs.New_32sceneCode.GDplayerObjects1.length = 0;
gdjs.New_32sceneCode.GDplayerObjects2.length = 0;
gdjs.New_32sceneCode.GDplayerObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects3.length = 0;
gdjs.New_32sceneCode.GDstart_95textObjects1.length = 0;
gdjs.New_32sceneCode.GDstart_95textObjects2.length = 0;
gdjs.New_32sceneCode.GDstart_95textObjects3.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects3.length = 0;
gdjs.New_32sceneCode.GDfinishObjects1.length = 0;
gdjs.New_32sceneCode.GDfinishObjects2.length = 0;
gdjs.New_32sceneCode.GDfinishObjects3.length = 0;
gdjs.New_32sceneCode.GDfinish_95textObjects1.length = 0;
gdjs.New_32sceneCode.GDfinish_95textObjects2.length = 0;
gdjs.New_32sceneCode.GDfinish_95textObjects3.length = 0;
gdjs.New_32sceneCode.GDbackgroundCityObjects1.length = 0;
gdjs.New_32sceneCode.GDbackgroundCityObjects2.length = 0;
gdjs.New_32sceneCode.GDbackgroundCityObjects3.length = 0;

gdjs.New_32sceneCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
