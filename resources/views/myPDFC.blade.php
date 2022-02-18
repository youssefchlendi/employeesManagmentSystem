<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Fiche de paie</title>
{{-- <link rel="stylesheet" type="text/css" href="{{ asset('/css/bootstrap.min.css') }}"> --}}

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
    {{-- <div >
        <div class="row">
            <div class="col-md-12">
                <div class="text-center lh-1 mb-2">
                    <h6 class="fw-bold">Payslip</h6> <span class="fw-normal">Payment slip for the month of June 2021</span>
                </div>
                <div class="d-flex justify-content-end"> <span>Working Branch:ROHINI</span> </div>
                <div class="row">
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">EMP Code</span> <small class="ms-3">39124</small> </div>
                            </div>
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">EMP Name</span> <small class="ms-3">Ashok</small> </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">PF No.</span> <small class="ms-3">101523065714</small> </div>
                            </div>
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">NOD</span> <small class="ms-3">28</small> </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">ESI No.</span> <small class="ms-3"></small> </div>
                            </div>
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">Mode of Pay</span> <small class="ms-3">SBI</small> </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">Designation</span> <small class="ms-3">Marketing Staff (MK)</small> </div>
                            </div>
                            <div class="col-md-6">
                                <div> <span class="fw-bolder">Ac No.</span> <small class="ms-3">*******0701</small> </div>
                            </div>
                        </div>
                    </div>
                    <table class="mt-4 table table-bordered">
                        <thead class="bg-dark text-white">
                            <tr>
                                <th scope="col">Earnings</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Deductions</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Basic</th>
                                <td>16250.00</td>
                                <td>PF</td>
                                <td>1800.00</td>
                            </tr>
                            <tr>
                                <th scope="row">DA</th>
                                <td>550.00</td>
                                <td>ESI</td>
                                <td>142.00</td>
                            </tr>
                            <tr>
                                <th scope="row">HRA</th>
                                <td>1650.00 </td>
                                <td>TDS</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <th scope="row">WA</th>
                                <td>120.00 </td>
                                <td>LOP</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <th scope="row">CA</th>
                                <td>0.00 </td>
                                <td>PT</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <th scope="row">CCA</th>
                                <td>0.00 </td>
                                <td>SPL. Deduction</td>
                                <td>500.00</td>
                            </tr>
                            <tr>
                                <th scope="row">MA</th>
                                <td>3000.00</td>
                                <td>EWF</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <th scope="row">Sales Incentive</th>
                                <td>0.00</td>
                                <td>CD</td>
                                <td>0.00</td>
                            </tr>
                            <tr>
                                <th scope="row">Leave Encashment</th>
                                <td>0.00</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row">Holiday Wages</th>
                                <td>500.00</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row">Special Allowance</th>
                                <td>100.00</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row">Bonus</th>
                                <td>1400.00</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <th scope="row">Individual Incentive</th>
                                <td>2400.00</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr class="border-top">
                                <th scope="row">Total Earning</th>
                                <td>25970.00</td>
                                <td>Total Deductions</td>
                                <td>2442.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row">
                    <div class="col-md-4"> <br> <span class="fw-bold">Net Pay : 24528.00</span> </div>
                    <div class="border col-md-8">
                        <div class="d-flex flex-column"> <span>In Words</span> <span>Twenty Five thousand nine hundred seventy only</span> </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <div class="d-flex flex-column mt-2"> <span class="fw-bolder">For Kalyan Jewellers</span> <span class="mt-4">Authorised Signatory</span> </div>
                </div>
            </div>
        </div>
    </div> --}}
    <div class="container mt-5">containerrow
        <div class="row">

            <div class="col-4 ml-0 pl-0" style=";">
                <img src="/images/logo.png" width="50%">
            </div>
            <div class="col-4 text-center lh-1 mb-2">
                <h2 class="fw-bold">Fiche de paie</h2> <h5 class="fw-normal">Fiche de paie pour {{ $data['date'] }}</h5>
            </div>
            <div class="col-4"></div>
        </div>
  <table width="100%" class="mt-2">
    <tr>
        <td align="left">
            <div style="white-space: pre-line;">
                {{ 'Nom et prenom : '.$data['employe']['nom'].' '.$data['employe']['prenom'] }}
                {{  'CIN : '.$data['employe']['cin'] }}
                {{  'Matricule cnss : '.$data['employe']['mat_cnss'] }}
                {{  'Fonction : '.$data['employe']['fonction'] }}
            </div>
        </td>
        <td align="right">
            <div style="white-space: pre-line;">
                {{ 'entreprise : '.$data['entreprise']['titre'] }}
                {{  $data['entreprise']['adresse'].' '.$data['entreprise']['ville'] }}
                {{  'Matricule fiscale : '.$data['entreprise']['matricule_fiscale'] }}
                {{  'Registre de commerce : '.$data['entreprise']['registre_commerce'] }}
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
        @foreach ($data['rebriques'] as $rebrique)
        <tr>
            <th colspan="2"  scope="row">{{ $rebrique['titre'] }}</th>
            <td colspan="2">{{ $rebrique['montant'] }}</td>
        </tr>
        @endforeach

        <tr class="border-top">
            <th colspan="2" scope="row">Total</th>
            <td colspan="2">{{ $data['total'] }}</td>
        </tr>
    </tbody>
</table>
{{ $data['totalLit'] }}
  {{-- <table width="100%">
    <thead style="background-color: lightgray;">
      <tr>
        <th>#</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Unit Price $data[</th>
        <th>Total $data[</th>
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
            <td align="right">Subtotal $data[</td>
            <td align="right">1635.00</td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td align="right">Tax $data[</td>
            <td align="right">294.3</td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td align="right">Total $data[</td>
            <td align="right" class="gray">$data[ 1929.3</td>
        </tr>
    </tfoot>
  </table> --}}
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-5 mb-0 text-muted">© Tunvita</p>

    <a href="/" class="col-md-2 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img src="/images/logo.png" alt="" />
    </a>

    <ul class="nav col-md-5 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Imm. Diar lassouad zarzis Bureau numero 11</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Tel : +216 75 690 366</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Tel : +216 52 748 829</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact@tunvita.com</a></li>
    </ul>
  </footer>
</div>

  {{-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> --}}
</body>
</html>
