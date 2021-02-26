let swatchProperty = 'color'
function changeSwatchProperty (newSwatchProperty) {
	swatchProperty = newSwatchProperty
	$('button').removeClass('active')
}
$('#color').click(function() {
	changeSwatchProperty('color')
	$(this).addClass('active')
})
$('#bg-color').click(function() {
	changeSwatchProperty('background-color')
	$(this).addClass('active')
})

function hexFromRGB(r, g, b) {
	const hex = [r.toString(16), g.toString(16), b.toString(16)]
	$.each(hex, function (nr, val) {
		if (val.length === 1) {
			hex[nr] = '0' + val
		}
	})
	return hex.join('').toUpperCase()
}
function refreshSwatch(swatchProperty) {
	const red = $('#red').slider('value'),
		green = $('#green').slider('value'),
		blue = $('#blue').slider('value'),
		hex = hexFromRGB(red, green, blue)
	$('#swatch').css(swatchProperty, '#' + hex)
}
//   Init Slider
$(function () {
	$('#red, #green, #blue').slider({
		orientation: 'horizontal',
		range: 'min',
		max: 255,
		value: 127,
		slide: function() {
            refreshSwatch(swatchProperty)
        },
		change: function() {
            refreshSwatch(swatchProperty)
        }
	})
	$('#red').slider('value', 0)
	$('#green').slider('value', 0)
	$('#blue').slider('value', 0)
})
