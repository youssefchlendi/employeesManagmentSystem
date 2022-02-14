<template>
    <div>
                    <topnav show='false' />

        <div >
            <!-- <LineChart/> -->
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-header card-header-warning card-header-icon">
                                    <div class="card-icon">
                                        <i class="material-icons">apartment</i>
                                    </div>
                                    <p class="card-category">total entreprises</p>
                                    <h3 class="card-title">{{ totalEntreprise }}</h3>
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <a
                                            @click="$router.push({ name: 'Entreprise' })"
                                        >Voir entreprise</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-header card-header-success card-header-icon">
                                    <div class="card-icon">
                                        <i class="material-icons">person</i>
                                    </div>
                                    <p class="card-category">total employés</p>
                                    <h3 class="card-title">{{ totalEmploye }}</h3>
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <a @click="$router.push({ name: 'Employe' })">Voir employés</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="card card-stats">
                                <div class="card-header card-header-danger card-header-icon">
                                    <div class="card-icon">
                                        <i class="material-icons">article</i>
                                    </div>
                                    <p class="card-category">total fiches</p>
                                    <h3 class="card-title">{{ totalFiche }}</h3>
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <a @click="$router.push({ name: 'Fiche' })">Voir fiches</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card card-chart">
                                <div class="card-header card-header-success">
                                    <LineChart v-if="loaded" :labels="labels" :data="data" />
                                    <!-- <div class="ct-chart" id="dailySalesChart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-line" style="width: 100%; height: 100%;"><g class="ct-grids"><line x1="40" x2="40" y1="0" y2="120" class="ct-grid ct-horizontal"></line><line x1="98.23660714285714" x2="98.23660714285714" y1="0" y2="120" class="ct-grid ct-horizontal"></line><line x1="156.47321428571428" x2="156.47321428571428" y1="0" y2="120" class="ct-grid ct-horizontal"></line><line x1="214.70982142857144" x2="214.70982142857144" y1="0" y2="120" class="ct-grid ct-horizontal"></line><line x1="272.94642857142856" x2="272.94642857142856" y1="0" y2="120" class="ct-grid ct-horizontal"></line><line x1="331.1830357142857" x2="331.1830357142857" y1="0" y2="120" class="ct-grid ct-horizontal"></line><line x1="389.4196428571429" x2="389.4196428571429" y1="0" y2="120" class="ct-grid ct-horizontal"></line><line y1="120" y2="120" x1="40" x2="447.65625" class="ct-grid ct-vertical"></line><line y1="96" y2="96" x1="40" x2="447.65625" class="ct-grid ct-vertical"></line><line y1="72" y2="72" x1="40" x2="447.65625" class="ct-grid ct-vertical"></line><line y1="48" y2="48" x1="40" x2="447.65625" class="ct-grid ct-vertical"></line><line y1="24" y2="24" x1="40" x2="447.65625" class="ct-grid ct-vertical"></line><line y1="0" y2="0" x1="40" x2="447.65625" class="ct-grid ct-vertical"></line></g><g><g class="ct-series ct-series-a"><path d="M40,91.2C98.237,79.2,98.237,79.2,98.237,79.2C156.473,103.2,156.473,103.2,156.473,103.2C214.71,79.2,214.71,79.2,214.71,79.2C272.946,64.8,272.946,64.8,272.946,64.8C331.183,76.8,331.183,76.8,331.183,76.8C389.42,28.8,389.42,28.8,389.42,28.8" class="ct-line"></path><line x1="40" y1="91.2" x2="40.01" y2="91.2" class="ct-point" ct:value="12"></line><line x1="98.23660714285714" y1="79.2" x2="98.24660714285714" y2="79.2" class="ct-point" ct:value="17"></line><line x1="156.47321428571428" y1="103.2" x2="156.48321428571427" y2="103.2" class="ct-point" ct:value="7"></line><line x1="214.70982142857144" y1="79.2" x2="214.71982142857144" y2="79.2" class="ct-point" ct:value="17"></line><line x1="272.94642857142856" y1="64.8" x2="272.95642857142855" y2="64.8" class="ct-point" ct:value="23"></line><line x1="331.1830357142857" y1="76.8" x2="331.1930357142857" y2="76.8" class="ct-point" ct:value="18"></line><line x1="389.4196428571429" y1="28.799999999999997" x2="389.4296428571429" y2="28.799999999999997" class="ct-point" ct:value="38"></line></g></g><g class="ct-labels"><foreignObject style="overflow: visible;" x="40" y="125" width="58.236607142857146" height="20"><span class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style="width: 58px; height: 20px;">M</span></foreignObject><foreignObject style="overflow: visible;" x="98.23660714285714" y="125" width="58.236607142857146" height="20"><span class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style="width: 58px; height: 20px;">T</span></foreignObject><foreignObject style="overflow: visible;" x="156.47321428571428" y="125" width="58.23660714285715" height="20"><span class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style="width: 58px; height: 20px;">W</span></foreignObject><foreignObject style="overflow: visible;" x="214.70982142857144" y="125" width="58.23660714285714" height="20"><span class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style="width: 58px; height: 20px;">T</span></foreignObject><foreignObject style="overflow: visible;" x="272.94642857142856" y="125" width="58.23660714285714" height="20"><span class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style="width: 58px; height: 20px;">F</span></foreignObject><foreignObject style="overflow: visible;" x="331.1830357142857" y="125" width="58.23660714285717" height="20"><span class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style="width: 58px; height: 20px;">S</span></foreignObject><foreignObject style="overflow: visible;" x="389.4196428571429" y="125" width="58.23660714285711" height="20"><span class="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style="width: 58px; height: 20px;">S</span></foreignObject><foreignObject style="overflow: visible;" y="96" x="0" height="24" width="30"><span class="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">0</span></foreignObject><foreignObject style="overflow: visible;" y="72" x="0" height="24" width="30"><span class="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">10</span></foreignObject><foreignObject style="overflow: visible;" y="48" x="0" height="24" width="30"><span class="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">20</span></foreignObject><foreignObject style="overflow: visible;" y="24" x="0" height="24" width="30"><span class="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">30</span></foreignObject><foreignObject style="overflow: visible;" y="0" x="0" height="24" width="30"><span class="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style="height: 24px; width: 30px;">40</span></foreignObject><foreignObject style="overflow: visible;" y="-30" x="0" height="30" width="30"><span class="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style="height: 30px; width: 30px;">50</span></foreignObject></g></svg></div> -->
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Fréquence de génération des fiches</h4>
                                    <!-- <p class="card-category">
                                    <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>-->
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="material-icons">access_time</i>
                                        Derniere modification {{ lastAddedFiche }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-chart">
                                <div class="card-header card-header-warning">
                                    <BarChart v-if="loaded" :labels="labelsE" :data="dataE" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Nombre d'employés par entreprise</h4>
                                    <!-- <p class="card-category">Last Campaign Performance</p> -->
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="material-icons">access_time</i>
                                        Derniere modification {{ lastAddedEmploye }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-chart">
                                <div class="card-header card-header-danger">
                                    <AreaChart v-if="loaded" :labels="labelsA" :data="dataA" />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">Salaire moyen par entreprise</h4>
                                    <!-- <p class="card-category">Last Campaign Performance</p> -->
                                </div>
                                <div class="card-footer">
                                    <div class="stats">
                                        <i class="material-icons">access_time</i>
                                        Derniere modification {{ lastAddedFiche }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-header card-header-tabs card-header-primary">
                                    <div class="nav-tabs-navigation">
                                        <div class="nav-tabs-wrapper">
                                            <span class="nav-tabs-title">Tasks:</span>
                                            <ul class="nav nav-tabs" data-tabs="tabs">
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link active"
                                                        href="#profile"
                                                        data-toggle="tab"
                                                    >
                                                        <i class="material-icons">bug_report</i> Bugs
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link"
                                                        href="#messages"
                                                        data-toggle="tab"
                                                    >
                                                        <i class="material-icons">code</i> Website
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        class="nav-link"
                                                        href="#settings"
                                                        data-toggle="tab"
                                                    >
                                                        <i class="material-icons">cloud</i> Server
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="profile">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check">
                                                                <label class="form-check-label">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        value
                                                                        checked
                                                                    />
                                                                    <span class="form-check-sign">
                                                                        <span class="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td class="td-actions text-right">
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Edit Task"
                                                                class="btn btn-primary btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">edit</i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Remove"
                                                                class="btn btn-danger btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check">
                                                                <label class="form-check-label">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        value
                                                                    />
                                                                    <span class="form-check-sign">
                                                                        <span class="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                        <td class="td-actions text-right">
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Edit Task"
                                                                class="btn btn-primary btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">edit</i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Remove"
                                                                class="btn btn-danger btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check">
                                                                <label class="form-check-label">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        value
                                                                    />
                                                                    <span class="form-check-sign">
                                                                        <span class="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit</td>
                                                        <td class="td-actions text-right">
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Edit Task"
                                                                class="btn btn-primary btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">edit</i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Remove"
                                                                class="btn btn-danger btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check">
                                                                <label class="form-check-label">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        value
                                                                        checked
                                                                    />
                                                                    <span class="form-check-sign">
                                                                        <span class="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                        <td class="td-actions text-right">
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Edit Task"
                                                                class="btn btn-primary btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">edit</i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Remove"
                                                                class="btn btn-danger btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane" id="messages">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check">
                                                                <label class="form-check-label">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        value
                                                                        checked
                                                                    />
                                                                    <span class="form-check-sign">
                                                                        <span class="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit</td>
                                                        <td class="td-actions text-right">
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Edit Task"
                                                                class="btn btn-primary btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">edit</i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Remove"
                                                                class="btn btn-danger btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check">
                                                                <label class="form-check-label">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        value
                                                                    />
                                                                    <span class="form-check-sign">
                                                                        <span class="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td class="td-actions text-right">
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Edit Task"
                                                                class="btn btn-primary btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">edit</i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Remove"
                                                                class="btn btn-danger btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane" id="settings">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check">
                                                                <label class="form-check-label">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        value
                                                                    />
                                                                    <span class="form-check-sign">
                                                                        <span class="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                        <td class="td-actions text-right">
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Edit Task"
                                                                class="btn btn-primary btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">edit</i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Remove"
                                                                class="btn btn-danger btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check">
                                                                <label class="form-check-label">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        value
                                                                        checked
                                                                    />
                                                                    <span class="form-check-sign">
                                                                        <span class="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit</td>
                                                        <td class="td-actions text-right">
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Edit Task"
                                                                class="btn btn-primary btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">edit</i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Remove"
                                                                class="btn btn-danger btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="form-check">
                                                                <label class="form-check-label">
                                                                    <input
                                                                        class="form-check-input"
                                                                        type="checkbox"
                                                                        value
                                                                        checked
                                                                    />
                                                                    <span class="form-check-sign">
                                                                        <span class="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td class="td-actions text-right">
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Edit Task"
                                                                class="btn btn-primary btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">edit</i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                rel="tooltip"
                                                                title="Remove"
                                                                class="btn btn-danger btn-link btn-sm"
                                                            >
                                                                <i class="material-icons">close</i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-header card-header-warning">
                                    <h4 class="card-title">Employees Stats</h4>
                                    <p class="card-category">New employees on 15th September, 2016</p>
                                </div>
                                <div class="card-body table-responsive">
                                    <table class="table table-hover">
                                        <thead class="text-warning">
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Salary</th>
                                                <th>Country</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Dakota Rice</td>
                                                <td>$36,738</td>
                                                <td>Niger</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Minerva Hooper</td>
                                                <td>$23,789</td>
                                                <td>Curaçao</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Sage Rodriguez</td>
                                                <td>$56,142</td>
                                                <td>Netherlands</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Philip Chaney</td>
                                                <td>$38,735</td>
                                                <td>Korea, South</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div class="container-fluid">
                    <nav class="pull-left">
                        <ul>
                            <li>
                                <a href="https://www.creative-tim.com">Creative Tim</a>
                            </li>
                            <li>
                                <a href="http://presentation.creative-tim.com">About Us</a>
                            </li>
                            <li>
                                <a href="http://blog.creative-tim.com">Blog</a>
                            </li>
                            <li>
                                <a href="https://www.creative-tim.com/license">Licenses</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="copyright pull-right">
                        ©
                        2018, made with love by
                        <a
                            href="https://www.creative-tim.com"
                            target="_blank"
                        >Creative Tim</a> for a better web.
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import LineChart from "./lineChart.vue"
import BarChart from "./barChart.vue"
import AreaChart from "./areaChart.vue"
import topnav from "../topnav.vue"

export default {
    components: {
        LineChart,
        BarChart,
        AreaChart,
        topnav
    },
    data() {
        return {
            totalEntreprise: 0,
            totalEmploye: 0,
            totalFiche: 0,
            employeParEntreprise: '',
            frequenceFiches: '',
            labels: '',
            data: '',
            chartdata: null,
            loaded: false,
            labelsA: '',
            dataA: '',
            lastAddedEmploye: '',
            lastAddedFiche: '',
            labelsE: '',
            dataE: '',
        }
    },
    async mounted() {
        this.fetchStats();
    },

    methods: {
        fetchStats() {
            fetch('api/stats', {
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.totalEntreprise = res.totalEntreprise;
                    this.totalEmploye = res.totalEmploye;
                    this.totalFiche = res.totalFiche;
                    this.employeParEntreprise = res.employeParEntreprise;
                    this.frequenceFiches = res.frequenceFiches;

                    this.labelsA = res.entrepriseMoySalaire.labels;
                    this.dataA = res.entrepriseMoySalaire.data;

                    this.lastAddedEmploye = res.lastAddedEmploye;
                    this.lastAddedFiche = res.lastAddedFiche;

                    this.labelsE = this.employeParEntreprise.labels;
                    this.dataE = this.employeParEntreprise.data;

                    this.labels = this.frequenceFiches.labels;
                    this.data = this.frequenceFiches.data;
                    this.loaded = true;
                })
                .catch(err => console.log(err))
        },

    }
}
</script>

<style>
</style>
