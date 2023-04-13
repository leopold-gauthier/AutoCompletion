<?php require('config.php');
if (isset($_GET['search'])) {
    $req = $bdd->prepare("SELECT `id`, `name` FROM `pokemon` WHERE `name` LIKE ? ORDER BY name ASC");
    $req->execute(['%' . $_GET['search'] . '%']);
    $result = $req->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($result);
    echo $json;
}

if (isset($_GET['id'])) {
    $req = $bdd->prepare("SELECT * FROM `pokemon` WHERE `id` = ? ");
    $req->execute([$_GET['id']]);
    $result = $req->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($result);
    echo $json;
}
