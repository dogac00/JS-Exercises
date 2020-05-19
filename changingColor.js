

<!DOCTYPE html>
<html>
<style>

div {
	position: absolute; 
	top: 0; 
	left: 0;
    width: 100%;
    height: 100%;
}

</style>

<body>

<div onmousemove="mouseMove(event, this)"></div>

<script>


function mouseMove(e, div) {
	const r = (e.clientX / 1360) * 255;
	const g = (e.clientY / 624)* 255;
	const b = (r + g) / 2;
	
	div.style.backgroundColor = `rgb(${r},${g},${b})`;
}

</script>

</body>
</html>
