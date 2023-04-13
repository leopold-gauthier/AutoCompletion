<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include_once("./inc/head-inc.php") ?>
</head>

<body class="bg-dark">
    <!-- Header -->
    <header>
        <nav class="navbar bg-dark text-white mx-5 m-5">
            <div class="container-fluid">
                <div class="f-row d-inline-flex ">
                    <img style="height:50px" src="./assets/img/pokeball.png" />
                    <h1 class="text-white">
                        <u>&nbsp;Pokédex&nbsp;</u>
                    </h1>
                </div>
                <form class="d-flex" role="search" method="GET">
                    <input placeholder="Search" aria-label="Search" class="form-control me-2 bg-body-secondary" type="search" id="search-bar" name="search" placeholder="Rechercher...">
                    <button class="btn btn-outline-danger" type="submit">Reset</button>
                </form>
            </div>
        </nav>
    </header>
    <!-- Main -->
    <main>
        <div id="title" class="mt-5">
            <h2 class="text-center text-white"></i><u>Search your pokemon </u><i class="fa-solid fa-arrow-turn-up fa-beat m-3"></i>
            </h2>
        </div>
        <div class="text-center text-white" id="result">
        </div>
    </main>

</body>
<script src="script.js"></script>

</html>