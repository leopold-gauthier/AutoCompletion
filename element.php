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
                <div>
                    <a href="./index.php">
                        <i class="fa-solid fa-door-open" style=" font-size:50px; color: #ffffff;"></i>
                    </a>
                </div>
            </div>
        </nav>
    </header>

    <!-- Main -->
    <main class="m-5">
        <div class="row">
            <div class="card mb-3 bg-dark">
                <div class="row g-0">
                    <div class="col-md-4">
                        <div class="border border-black m-3" style="width:200px;" id="img">

                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title text-white" id="name"></h2>
                            <div class="text-white row" id="result">
                                <div id="id">

                                </div>
                                <div id="type">

                                </div>
                                <div id="attack">

                                </div>
                                <div id="defense">

                                </div>
                                <div id="hp">

                                </div>
                                <div id="speed_atk">

                                </div>
                                <div id="speed_def">

                                </div>
                                <div id="speed">

                                </div>
                                <div id="total">

                                </div>

                            </div>
                            <div class="text-white card-text" id="generation">

                            </div>
                            <div class="text-white card-text" id="legendary">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
</body>

<script src="script.js"></script>

</html>