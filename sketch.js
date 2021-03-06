var s = function(p) {
        var v1 = 0;
        var v2 = 0;
        var v3 = 0;
//--------------- Setup ---------------------
    p.setup = function() {
        p.createCanvas(innerWidth, innerHeight);
         // カンマ区切りで入力したい値を追加できます。
        window.max.bindInlet('set_value', function(_v1, _v2, _v3) {
            v1 = _v1;
            v2 = _v2;
            v3 = _v3;
    });
  };

//--------------- Draw ---------------------
    p.draw = function() {
        p.background(0);
        let mx = p.mouseX;
        let my = p.height / 2;
        p.rect(0, 0, mx, my);

        // カンマ区切りで出力したい値を追加できます。
        window.max.outlet('output', p.frameCount, p.windowWidth); 
        
        //テキストキャンバスに表示
        p.fill(255);
        p.text(v1, 10, p.height - 20);
        p.text(v2, 10, p.height - 40);
        p.text(v3, 10, p.height - 60);
    };
    
    // マウスを押した時に呼ばれる関数
    p.mousePressed = function(){
     
    }

//--------------- ReSize---------------------
    //画面サイズの自動調整
  p.windowResized = function() {
        p.resizeCanvas(innerWidth, innerHeight);
  }
  
};

const myp5 = new p5(s);
