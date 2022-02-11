<template>
  <section class="content-wrapper" style="min-height: 960px;">
        <section class="content-header">
            <h1>Employees</h1>
        </section>
<div>
  <stats-card data-background-color="green">
    <template slot="header">
      <md-icon>store</md-icon>
    </template>

    <template slot="content">
      <p class="category">Revenue</p>
      <h3 class="title">$34,245</h3>
    </template>

    <template slot="footer">
      <div class="stats">
          <md-icon>date_range</md-icon>
          Last 24 Hours
      </div>
    </template>
  </stats-card>
  </div>
  </section>
</template>

<script>
import {StatsCard} from '../../component'
import {ChartCard} from '../../component'
export default {
  components :{
    StatsCard,
    ChartCard
  }
}
</script>

<style>
</style>
