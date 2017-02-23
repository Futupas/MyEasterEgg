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
        console.dir(array);
        console.dir(right);
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

    var closebtns = document.querySelectorAll('[data-paneaseregg="main"] [data-paneaseregg-alert="close"]');
    for (var i = 0; i < closebtns.length; i++) {
        closebtns[i].onclick = function (e) {
            document.querySelector('[data-paneaseregg="background"]').classList.remove('visible');
            document.querySelector('[data-paneaseregg="main"]').classList.remove('visible');
        }
    }
    var bcgrnd = document.createElement('div');
    bcgrnd.setAttribute('data-paneaseregg', 'background');
    bcgrnd.onclick = function () {
        document.querySelector('[data-paneaseregg="background"]').classList.remove('visible');
        document.querySelector('[data-paneaseregg="main"]').classList.remove('visible');
    }
    document.body.appendChild(bcgrnd);
}
CreatePanEasterEgg();
