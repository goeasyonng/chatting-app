<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>클릭</title>
    
    
</head>
<body>
	<h1 id="heading">어서오세요</h1>
    <p id="text">의 텍스트를 클릭하시오</p>
	<script>
		var heading = document.querySelector("#heading");
        heading.onclick = function(){
            heading.style.color ="red";
        }
	</script>
</body>
</html>