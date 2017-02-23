function CreatePanEasterEgg () {
    var array = [];
    var right = document.querySelector('[data-paneaseregg="main"]').getAttribute('data-paneaseregg-config').split('/');
    for (var i = 0; i < right.length; i++) {
        array.push(null);
    }
    var keyelements = document.querySelectorAll('[data-paneaseregg-key]');
    for (var i = 0; i < keyelements.length; i++) {
        keyelements[i].onclick = function (e) {
            var clickedkey = e.target.getAttribute('data-paneaseregg-key');
            array.shift();
            array.push(clickedkey);
            check();
        }
    }
    function check () {
        var a = true;
        for (var i = 0; i < right.length; i++) {
            if (right[i] !== array[i]) {
                a = false;
            }
        }
        if (a) showMessage();
    }
    function showMessage () {
        document.querySelector('[data-paneaseregg="background"]').classList.add('visible');
        document.querySelector('[data-paneaseregg="main"]').classList.add('visible');
    }

    
    var styles = document.createElement('style');
    styles.innerHTML = 'div[data-paneaseregg=background]{display:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:1000;background-color:rgba(0,0,0,0);transition:background-color 0s linear .5s;animation:display-n-b .5s}div[data-paneaseregg=background].visible{display:block;background-color:rgba(0,0,0,.5);transition:background-color 0s linear 0s;animation:display-b-n .5s}div[data-paneaseregg=main]{visibility:hidden;transform:translate(0,-100px);opacity:0;transition:transform .5s ease-in,opacity .5s ease-in;animation:display-n-b .5s}div[data-paneaseregg=main].visible{visibility:visible;transform:translate(0,0);opacity:1;z-index:1001;position:fixed;width:100%;text-align:center;transition:transform .5s ease-out,opacity .5s ease-out;animation:display-b-n .5s}div[data-paneaseregg=main].visible>div,div[data-paneaseregg=main]>div{width:600px;max-width:90%;background-color:rgba(255,255,255,1);margin:30px auto auto;padding:20px;border-radius:20px}@keyframes display-b-n{0%,99%{visibility:visible}100%{visibility:hidden}}@keyframes display-n-b{0%{visibility:hidden}1%,100%{visibility:visible}}';
    document.head.appendChild(styles);

    var bcgrnd = document.createElement('div');
    bcgrnd.setAttribute('data-paneaseregg', 'background');
    bcgrnd.onclick = function () {
        document.querySelector('[data-paneaseregg="background"]').classList.remove('visible');
        document.querySelector('[data-paneaseregg="main"]').classList.remove('visible');
    }
    document.body.appendChild(bcgrnd);
    var closebtns = document.querySelectorAll('[data-paneaseregg="main"] [data-paneaseregg-alert="close"]');
    for (var i = 0; i < closebtns.length; i++) {
        closebtns[i].onclick = function (e) {
            document.querySelector('[data-paneaseregg="background"]').classList.remove('visible');
            document.querySelector('[data-paneaseregg="main"]').classList.remove('visible');
        }
    }
}
CreatePanEasterEgg();
