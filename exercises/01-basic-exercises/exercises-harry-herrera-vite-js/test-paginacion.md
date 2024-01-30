
  # TEST PAGINATION SIN JS
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paginación HTML sin JavaScript</title>
    <style>
        .page {
            display: none;
        }

        .page:target {
            display: block;
        }
    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="#page1">Page 1</a></li>
            <li><a href="#page2">Page 2</a></li>
        </ul>
    </nav>

    <div id="page1" class="page">
        <h2>Page 1</h2>
        <p>Esta es la página 1</p>
    </div>

    <div id="page2" class="page">
        <h2>Page 2</h2>
        <p>Esta es la página 2</p>
    </div>
</body>
</html>
