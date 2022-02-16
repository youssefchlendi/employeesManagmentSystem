<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>

    <div class="container">
        <div class="row" style="margin-top:45px">
            <div class="col-md-4"></div>
           <div class="col-md-4 col-md-offset-4">
                <h4>S'identifier</h4><hr>
                <form action="
                {{ route('auth.check') }}
                " method="post">
                 @if(Session::get('fail'))
                    <div class="alert alert-danger">
                       {{ Session::get('fail') }}
                    </div>
                 @endif

                @csrf

                    <div class="form-group ml-4">
                        <input class="form-check-input" type="radio" name="EmployeEntreprise"   value="employe" onclick="showEmploye()" id="EmployeEntreprise1">
                        <label class="form-check-label" for="EmployeEntreprise1">
                        Employé
                        </label><br>
                        <input class="form-check-input" type="radio" name="EmployeEntreprise"  value="entreprise" onclick="showEntreprise()" id="EmployeEntreprise2" >
                        <label class="form-check-label" for="EmployeEntreprise2">
                        Entreprise
                        </label><br>
                        <input class="form-check-input" type="radio" checked name="EmployeEntreprise"  value="admin" onclick="showAdmin()" id="EmployeEntreprise2" >
                        <label class="form-check-label" for="EmployeEntreprise3">
                        Admin
                        </label>
                        <script type="text/javascript">
                            // allInp = document.querySelectorAll("input");
                            // for (i = 0; i < allInp.length; i++)
                            // {
                            // if (allInp[i].type == "radio")
                            // {
                            //     allInp[i].checked = false;
                            // }}
                            function showEmploye(){
                                   let allForms = document.querySelectorAll('.form-group');
                                   document.querySelector('#pass').style.display = "none";
                                   document.querySelector('#mail').innerText = "CIN";
                            }
                            function showEntreprise(){
                                   let allForms = document.querySelectorAll('.form-group');
                                   document.querySelector('#pass').style.display = "none";
                                   document.querySelector('#mail').innerText = "Matricule fiscale";
                            }
                            function showAdmin(){
                                   let allForms = document.querySelectorAll('.form-group');
                                   document.querySelector('#pass').style.display = "block";
                                   document.querySelector('#mail').innerText = "Email";
                            }

                        </script>
                    </div>
                   <div class="form-group">
                      <label id='mail'>Email</label>
                      <input type="text" class="form-control" id="email" name="current" placeholder="Enter addresse email" value="{{ old('email') }}">
                      <span class="text-danger">@error('current'){{ $message }} @enderror</span>
                   </div>
                   <div class="form-group" id="pass">
                      <label>Password</label>
                      <input type="password" class="form-control" name="password" placeholder="Entrer password">
                      <span class="text-danger">@error('password'){{ $message }} @enderror</span>
                   </div>
                   <button type="submit" class="btn btn-block btn-primary">S'identifier</button>
                   <br>
                   <a href="
                   {{ route('auth.register') }}
                   ">Je n'ai pas un compte, S'enregistrer</a>
                </form>
           </div>
           <div class="col-md-4"></div>

        </div>
     </div>

</body>
</html>
