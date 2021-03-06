// This file is part of Vidyamantra - http:www.vidyamantra.com/
/** @Copyright 2014  Vidya Mantra EduSystems Pvt. Ltd.
 * @author  Suman Bogati <http://www.vidyamantra.com>
 */

(function (window) {
  function Optimize(id) {
    const { vcan } = virtualclass.wb[id];

    const optimize = {
      sendPacketWithOptimization(jobj, time) {
        const wId = virtualclass.gObj.currWb;
        if (typeof this.lastarrowtime === 'undefined') {
          this.lastarrowtime = new Date().getTime();
          // if (readyState == 1) {
          if (io.webSocketConnected()) {
            virtualclass.vutil.beforeSend(JSON.parse(jobj));
          }

          virtualclass.wb[wId].utility.updateSentInformation(jobj, true);
        }
        this.presentarrowtime = new Date().getTime();
        if ((this.presentarrowtime - this.lastarrowtime) >= time) {
          // if (readyState == 1) {
          if (io.webSocketConnected()) {
            // virutalclass.vutil.beforeSend(JSON.parse(jobj));
            const msg = JSON.parse(jobj);

            if (Object.prototype.hasOwnProperty.call(msg, 'createArrow')) {
              ioAdapter.send(msg);
            } else {
              ioAdapter.mustSend(msg);
            }
          }
          virtualclass.wb[wId].utility.updateSentInformation(jobj, true);
          this.lastarrowtime = new Date().getTime();
        }
      },

      doOptiMize(e, wId) {
        if (vcan.main.action === 'move') {
          if (roles.hasControls()) {
            e = vcan.utility.updateCordinate(e, wId);
          }
        }

        if (((typeof virtualclass.gObj.lastmousemovetime === 'undefined') || (virtualclass.gObj.lastmousemovetime == null))) {
          virtualclass.gObj.lastmousemovetime = new Date().getTime();
          if (!Object.prototype.hasOwnProperty.call(e.detail, 'cevent')) {
            vcan.optimize.calculatePackets(virtualclass.gObj.lastmousemovetime, 'm', (e.clientX - vcan.main.offset.x), (e.clientY - vcan.main.offset.y));
          }
        }

        virtualclass.gObj.presentmousemovetime = new Date().getTime();

        if ((virtualclass.gObj.presentmousemovetime - virtualclass.gObj.lastmousemovetime) >= 2000) {	 // Optimized
          const currTime = new Date().getTime();
          if (!Object.prototype.hasOwnProperty.call(e.detail, 'cevent')) {
            vcan.optimize.calculatePackets(virtualclass.gObj.lastmousemovetime, 'm', (e.clientX - vcan.main.offset.x), (e.clientY - vcan.main.offset.y));
            // vcan.optimize.calculatePackets(virtualclass.gObj.lastmousemovetime, 'm', (e.clientX), (e.clientY));
          }
          vcan.optimize.calculatePackets(virtualclass.gObj.lastmousemovetime, 'm', (e.clientX - vcan.main.offset.x), (e.clientY - vcan.main.offset.y));
          // vcan.optimize.calculatePackets(virtualclass.gObj.lastmousemovetime, 'm', (e.clientX), (e.clientY));
          virtualclass.gObj.lastmousemovetime = new Date().getTime();
        }
      },

      calculatePackets(time, ac, x, y, foundText) {
        var x = x / virtualclass.zoom.canvasScale;
        var y = y / virtualclass.zoom.canvasScale;

        const wId = virtualclass.gObj.currWb;
        const obj = vcan.makeStackObj(time, ac, x, y);
        if (typeof foundText !== 'undefined') {
          obj.foundText = true;
        }
        virtualclass.wb[wId].uid++;
        obj.uid = virtualclass.wb[wId].uid;
        vcan.main.replayObjs.push(obj);
        virtualclass.vutil.beforeSend({ repObj: [obj], cf: 'repObj' });
      },
    };
    vcan.optimize = optimize;
  }

  window.Optimize = Optimize;
}(window));
