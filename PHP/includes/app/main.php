<div class="container my-4">
    <h4>Area</h4>
    <p>Conteudo</p>
    <div class="container my-2 p-2">
        <ul class="list-group">
        <?php
            $array = scandir(realpath(__DIR__),0);
            for($i=2; $i<count($array); $i++){
                $filename = explode('.',$array[$i])[0];
                echo "<li class='list-group-item'>" . $filename . "</li>";
            }
        ?>
        </ul>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <?php echo "<a href='#!' type='button' class='btn btn-sm btn-primary' id='btnback'>Voltar</a>" ?>
            </div>
        </div>
    </div>
</div>

<script>

$("#btnback").click(function(){
    window.location.assign('../');
})

</script>
