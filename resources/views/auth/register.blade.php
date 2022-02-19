<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
        label{
            color:rgb(72, 71, 71)!important
        }
        </style>
</head>
<body>

    <div class="container">
        <div class="row" style="margin-top:45px">
            <div class="col-md-4"></div>

           <div class="col-md-4  card col-md-offset-4">
            <div class="text-center mb-2">
                <img src="images/large.png" width="20%" class="circle" alt="...">
                <hr>
              </div>
                <h4>S'enregistrer | NON ACTIVÉE</h4><hr>
                <form action="
                {{ route('auth.save') }}
                " method="post">

                @if(Session::get('success'))
                  <div class="alert alert-success">
                     {{ Session::get('success') }}
                  </div>
                @endif

                @if(Session::get('fail'))
                  <div class="alert alert-danger">
                     {{ Session::get('fail') }}
                  </div>
                @endif

                @csrf
                <div class="form-group">
                      <label>Nom</label>
                      <input type="text" class="form-control" name="name" placeholder="Entrer nom complet" value="{{ old('name') }}">
                      <span class="text-danger">@error('name'){{ $message }} @enderror</span>
                   </div>
                   <div class="form-group">
                      <label>Email</label>
                      <input type="text" class="form-control" name="email" placeholder="Entrer adresse email" value="{{ old('email') }}">
                      <span class="text-danger">@error('email'){{ $message }} @enderror</span>
                   </div>
                   <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" name="password" placeholder="Entrer password">
                      <span class="text-danger">@error('password'){{ $message }} @enderror</span>
                   </div>
                   <button type="submit" class="disabled btn btn-block btn-primary">Enregistrer</button>
                   <br>
                   <a href="
                   {{ route('auth.login') }}
                   ">J'ai deja un compte, S'identifier</a>
                </form>
           </div>
           <div class="col-md-4"></div>

        </div>
     </div>

</body>
</html>
