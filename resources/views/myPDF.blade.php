<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Fiche de paie</title>
{{-- <link rel="stylesheet" type="text/css" href="{{ asset('css/bts.css') }}"> --}}
<style>

</style>
{{-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> --}}
<style type="text/css">
  /*! CSS Used from: https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css */
:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));}
*,::after,::before{box-sizing:border-box;}
@media (prefers-reduced-motion:no-preference){
:root{scroll-behavior:smooth;}
}
body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;}
h2,h5{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;}
h2{font-size:calc(1.325rem + .9vw);}
@media (min-width:1200px){
h2{font-size:2rem;}
}
h5{font-size:1.25rem;}
p{margin-top:0;margin-bottom:1rem;}
ul{padding-left:2rem;}
ul{margin-top:0;margin-bottom:1rem;}
a{color:#0d6efd;text-decoration:underline;}
a:hover{color:#0a58ca;}
img{vertical-align:middle;}
table{caption-side:bottom;border-collapse:collapse;}
th{text-align:inherit;text-align:-webkit-match-parent;}
tbody,td,th,thead,tr{border-color:inherit;border-style:solid;border-width:0;}
::-moz-focus-inner{padding:0;border-style:none;}
.container{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto;}
@media (min-width:576px){
.container{max-width:540px;}
}
@media (min-width:768px){
.container{max-width:720px;}
}
@media (min-width:992px){
.container{max-width:960px;}
}
@media (min-width:1200px){
.container{max-width:1140px;}
}
@media (min-width:1400px){
.container{max-width:1320px;}
}
.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x) * -.5);margin-left:calc(var(--bs-gutter-x) * -.5);}
.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y);}
.col-4{flex:0 0 auto;width:33.33333333%;}
@media (min-width:768px){
.col-md-2{flex:0 0 auto;width:16.66666667%;}
.col-md-5{flex:0 0 auto;width:41.66666667%;}
}
.table{--bs-table-bg:transparent;--bs-table-accent-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6;}
.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg);}
.table>tbody{vertical-align:inherit;}
.table>thead{vertical-align:bottom;}
.table>:not(:last-child)>:last-child>*{border-bottom-color:currentColor;}
.table-bordered>:not(caption)>*{border-width:1px 0;}
.table-bordered>:not(caption)>*>*{border-width:0 1px;}
.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none;}
.nav-link{display:block;padding:.5rem 1rem;color:#0d6efd;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;}
@media (prefers-reduced-motion:reduce){
.nav-link{transition:none;}
}
.nav-link:focus,.nav-link:hover{color:#0a58ca;}
.link-dark{color:#212529;}
.link-dark:focus,.link-dark:hover{color:#1a1e21;}
.d-flex{display:flex!important;}
.border-top{border-top:1px solid #dee2e6!important;}
.flex-wrap{flex-wrap:wrap!important;}
.justify-content-end{justify-content:flex-end!important;}
.justify-content-center{justify-content:center!important;}
.justify-content-between{justify-content:space-between!important;}
.align-items-center{align-items:center!important;}
.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important;}
.mt-2{margin-top:.5rem!important;}
.mt-4{margin-top:1.5rem!important;}
.mt-5{margin-top:3rem!important;}
.mb-0{margin-bottom:0!important;}
.mb-2{margin-bottom:.5rem!important;}
.mb-3{margin-bottom:1rem!important;}
.px-2{padding-right:.5rem!important;padding-left:.5rem!important;}
.py-3{padding-top:1rem!important;padding-bottom:1rem!important;}
.fw-normal{font-weight:400!important;}
.fw-bold{font-weight:700!important;}
.lh-1{line-height:1!important;}
.text-center{text-align:center!important;}
.text-decoration-none{text-decoration:none!important;}
.text-white{color:#fff!important;}
.text-muted{color:#6c757d!important;}
.bg-dark{background-color:#212529!important;}
@media (min-width:768px){
.me-md-auto{margin-right:auto!important;}
.mb-md-0{margin-bottom:0!important;}
}
</style>

</head>
<body>

        <div class="row">

            <div class="col-4 ml-0 pl-0" style=";">
                <img src="{{ public_path('/images/logo.png')}}" width="15%">
            </div>
            <div class="col-4 text-center lh-1 mb-2">
                <h2 class="fw-bold">Fiche de paie</h2> <h5 class="fw-normal">Fiche de paie pour {{ $date }}</h5>
            </div>
            <div class="col-4"></div>
        </div>

  <table width="100%" class="mt-2">
    <tr>
        <td align="left">
            <div style="white-space: pre-line;">
                {{ 'Nom et prenom : '.$employe['nom'].' '.$employe['prenom'] }}
                {{  'CIN : '.$employe['cin'] }}
                {{  'Matricule cnss : '.$employe['mat_cnss'] }}
                {{  'Fonction : '.$employe['fonction'] }}
            </div>
        </td>
        <td align="right">
            <div style="white-space: pre-line;">
                {{ 'entreprise : '.$entreprise['titre'] }}
                {{  $entreprise['adresse'].' '.$entreprise['ville'] }}
                {{  'Matricule fiscale : '.$entreprise['matricule_fiscale'] }}
                {{  'Registre de commerce : '.$entreprise['registre_commerce'] }}
            </div>
        </td>
    </tr>

  </table>

  {{-- <table width="100%">
    <tr>
        <td><strong>From:</strong> Linblum - Barrio teatral</td>
        <td><strong>To:</strong> Linblum - Barrio Comercial</td>
    </tr>

  </table> --}}

  <br/>
  <table class="mt-4 table table-bordered">
    <thead class="bg-dark text-white">
        <tr>
            <th colspan="2" scope="col">Rubrique</th>
            <th colspan="2"  scope="col">Montant (dt)</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($rebriques as $rebrique)
        <tr>
            <th colspan="2"  scope="row">{{ $rebrique['titre'] }}</th>
            <td colspan="2">{{ $rebrique['montant'] }}</td>
        </tr>
        @endforeach

        <tr class="border-top">
            <th colspan="2" scope="row">Total</th>
            <td colspan="2">{{ $total }}</td>
        </tr>
    </tbody>
</table>
<hr>
TOTAL : {{ $totalLit }}
  {{-- <table width="100%">
    <thead style="background-color: lightgray;">
      <tr>
        <th>#</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Unit Price $</th>
        <th>Total $</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Playstation IV - Black</td>
        <td align="right">1</td>
        <td align="right">1400.00</td>
        <td align="right">1400.00</td>
      </tr>
      <tr>
          <th scope="row">1</th>
          <td>Metal Gear Solid - Phantom</td>
          <td align="right">1</td>
          <td align="right">105.00</td>
          <td align="right">105.00</td>
      </tr>
      <tr>
          <th scope="row">1</th>
          <td>Final Fantasy XV - Game</td>
          <td align="right">1</td>
          <td align="right">130.00</td>
          <td align="right">130.00</td>
      </tr>
    </tbody>

    <tfoot>
        <tr>
            <td colspan="3"></td>
            <td align="right">Subtotal $</td>
            <td align="right">1635.00</td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td align="right">Tax $</td>
            <td align="right">294.3</td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td align="right">Total $</td>
            <td align="right" class="gray">$ 1929.3</td>
        </tr>
    </tfoot>
  </table> --}}
  <table style="position:fixed;bottom:25px">
    <hr>
    <thead>
      <tr>
        <td colspan="" >© Tunvita
        </td>
        <td  ><img src="{{ public_path('/images/logo.png')}}" alt="" />
        </td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td >Imm. Diar lassouad zarzis Bureau numero 11</td>
      </tr>
    </thead>
    <tbody>
      <tr align="right">
        <td align="right" colspan="2" >Tel : +216 75 690 366</td>
        <td align="right" >Tel : +216 52 748 829</td>
        <td align="right" >Contact@tunvita.com</td>
      </tr>

    </tbody>
    </table>



  {{-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> --}}
</body>
</html>
