<div id="lAlert" class="w-50 text-center mx-auto"></div>

<div class="card mt-5 mx-auto border rounded-4 bg-light2" style="width: 28rem;" id="card-login">
    <article class="card-body">
        <div class="border-bottom border-dark">
            <h3 class="card-title text-center mb-4 mt-1">Login</h3>
        </div>
        <form id="frm-login" action="config/access.php" method="POST">
        <div class="form-group my-3">
        <div class="input-group">
            <span class="input-group-text" id="icon"><i class="fas fa-user"></i></span>
            <input name="user_login" id="user" class="form-control" placeholder="Usuario" type="text">
        </div> <!-- input-group.// -->
        </div> <!-- form-group// -->
        <div class="form-group mb-3 pb-4 border-bottom border-dark">
        <div class="input-group">
            <span class="input-group-text"><i class="fas fa-lock"></i></span>
            <input name="pass_login" id="pass" class="form-control" placeholder="*****" type="password">
            <span class="input-group-text"><a href="#!" class="text-dark" id="show"><i id="eye" class="fas fa-eye"></i></a></span>
        </div> <!-- input-group.// -->
        </div> <!-- form-group// -->
        <div class="form-check mt-4">
            <div class="d-grip gap-1 col-4 mx-auto mb-4">
                <button type="submit" class="btn btn-outline-secondary" id="login"> Login
                    <i class="fas fa-sign-in-alt right"></i>
                </button>
            </div>
        </div>
        <!-- <p class="text-center"><a href="#" class="link-grey2">Esqueci a Senha!</a></p> -->
        <!-- <p class="text-center" id="pLogin"><a href="#" class="link-grey2">Nao possui cadastro, clique aqui!</a></p> -->
        </form>
    </article>
</div>