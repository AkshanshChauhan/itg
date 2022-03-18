<style>
    * {
        padding: 0px;
        margin: 0px;
        position: fixed;
    }

    body {
        justify-content: center;
        background-color: black;
    }
</style>

<?php
$rating = $_POST["rating"];
$name = $_POST["name"];
echo "<h4 style='color: white;'>Thanks for Rating,<br> $name.</h4>";

date_default_timezone_set("Asia/Calcutta");
$time = date('d-m-y H:i:s');

$file = fopen("ratingData.html", "a");

if($rating == 0) {
    fwrite($file, "
            <tr style='background-color: black; color: white;'> 
                <td>
                    $name
                </td>
                <td class='numRating'>
                    $rating
                </td>
                <td>
                    $time
                </td>
            </tr>
    ");
}

if($rating == 0 || $rating == 1) {
    fwrite($file, "
            <tr style='background-color: #ff4545; color: black;'> 
                <td>
                    $name
                </td>
                <td class='numRating'>
                    $rating: &#9733;
                </td>
                <td>
                    $time
                </td>
            </tr>
    ");
}

if($rating == 2) {
    fwrite($file, "
            <tr style='background-color: #ffa534; color: black;'> 
                <td>
                    $name
                </td>
                <td class='numRating'>
                    $rating: &#9733; &#9733;
                </td>
                <td>
                    $time
                </td>
            </tr>
    ");
}

if($rating == 3) {
    fwrite($file, "
            <tr style='background-color: #ffe234; color: black;'> 
                <td>
                    $name
                </td>
                <td class='numRating'>
                    $rating: &#9733; &#9733; &#9733;
                </td>
                <td>
                    $time
                </td>
            </tr>
    ");
}

if($rating == 4) {
    fwrite($file, "
            <tr style='background-color: #b7dd29; color: black;'> 
                <td>
                    $name
                </td>
                <td class='numRating'>
                    $rating: &#9733; &#9733; &#9733; &#9733;
                </td>
                <td>
                    $time
                </td>
            </tr>
    ");
}

if($rating == 5) {
    fwrite($file, "
            <tr style='background-color: #57e32c; color: black;'> 
                <td>
                    $name
                </td>
                <td class='numRating'>
                    $rating: &#9733; &#9733; &#9733; &#9733; &#9733;
                </td>
                <td>
                    $time
                </td>
            </tr>
    ");
}

?> 