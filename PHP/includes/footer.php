<script src="https://cdn.jsdelivr.net/npm/@dashboardcode/bsmultiselect@1.1.18/dist/js/BsMultiSelect.min.js"></script>
<script>

var url = window.location.href;
console.log(url);

var origem = 'http://projetos.test:8080/PHP/';
if(url == origem){
    window.location.href= origem + 'index.php?app=main';
}

</script>
</body>
</html>