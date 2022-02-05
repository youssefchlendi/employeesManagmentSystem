<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Fiche de paie</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<style type="text/css">
    /* * {
        font-family: Verdana, Arial, sans-serif;
    }
    table{
        font-size: x-small;
    }
    tfoot tr td{
        font-weight: bold;
        font-size: x-small;
    }
    .gray {
        background-color: lightgray
    } */
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
    <div class="text-center lh-1 mb-2">
        <h6 class="fw-bold">Fiche de paie</h6> <span class="fw-normal">Fiiche de paie pour {{ $date }}</span>
    </div>
  <table width="100%" class="mt-2">
    <tr>
        <td align="left">
            <pre style="white-space: pre-line;">
                {{ 'Nom et prenom : '.$employe['nom'].' '.$employe['prenom'] }}
                {{  'CIN : '.$employe['cin'] }}
                {{  'Matricule cnss : '.$employe['mat_cnss'] }}
                {{  'Fonction : '.$employe['fonction'] }}
            </pre>
        </td>
        <td align="right">
            <pre style="white-space: pre-line;">
                {{ 'entreprise : '.$entreprise['titre'] }}
                {{  $entreprise['adresse'].' '.$entreprise['ville'] }}
                {{  'Matricule fiscale : '.$entreprise['matricule_fiscale'] }}
                {{  'Registre de commerce : '.$entreprise['registre_commerce'] }}
            </pre>
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
            <th colspan="2" scope="col">Earnings</th>
            <th colspan="2"  scope="col">Amount</th>
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
{{ $totalLit }}
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
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
