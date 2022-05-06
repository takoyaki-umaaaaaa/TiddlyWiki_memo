!(function ($doc, $win) {
		$elems = $doc.getElementsByClassName("elem"),
		otherProperty = 'perspective(1000px)',
		elemStyle = $elems[0].style;

	$doc.addEventListener('mousemove', function (e) {
		panelRotate(e.clientX, e.clientY, e.currentTarget.body.clientWidth / 2, e.currentTarget.body.clientHeight / 2);
	});
	$doc.addEventListener('touchmove', function (e) {
		panelRotate(e.touches["0"].clientX, e.touches["0"].clientY);
		evt.stopPropagation();
		evt.stopImmediatePropagation();
		evt.preventDefault();
	});

	function panelRotate(cX, cY, targetCenterX, targetCenterY){
		var diffX = cX - targetCenterX,
			diffY = targetCenterY - cY,
			ratioX = diffX / targetCenterX,
			ratioY = diffY / targetCenterY,
			degX = 90 * ratioX,
			degY = 90 * ratioY,
			$elem

		for (var i = 0; i < $elems.length; i++) {
			$elem = $elems[i];
			$elem.style['transform'] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
		};
	};
})(document, window);
