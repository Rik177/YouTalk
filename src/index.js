document.addEventListener('mousedown', function(e) {
	if (document.activeElement && document.activeElement !== document.body) {
		document.activeElement.blur();
	}
});
