/* eslint-disable */
<template lang="html">
<div>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="/">GrowX</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Dashboard</b-nav-item>
        <b-nav-item href="/">Records</b-nav-item>
        <b-nav-item href="/">Photos</b-nav-item>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="/">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 
  <b-container fluid>
    <b-row align-v="end">
      <b-col cols="10"></b-col>
      <b-col cols="2">
        <b-nav-item-dropdown left>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><e>Select Farm</e></template>
          <b-dropdown-item href="/#/records/1">1</b-dropdown-item>
          <b-dropdown-item href="/#/records/2">2</b-dropdown-item>
          <b-dropdown-item href="/#/records/3">3</b-dropdown-item>
          <b-dropdown-item href="/#/records/4">4</b-dropdown-item>
          
        </b-nav-item-dropdown>
        </b-col>
    </b-row>

  </b-container>
  <b-container>
    <b-row align-v="start"> 
      <b-col> 
        {{senType[0]+' sensor'}}
        <apexchart type=area height=350 :options="chartOptions" :series="series" />
        {{senType[1] +' sensor'}}
        <apexchart2 type=area height=350 :options="chartOptions1" :series="series1" />
      </b-col>
    </b-row>
  </b-container>

</div>
</template>

<script>
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
        apexchart: VueApexCharts,
        apexchart2: VueApexCharts,
      },
    data(){
        return {
            senList: [],
            senType: [],
          series: [{
            name: '',
            data: []
          }],
          chartOptions: {
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: [],
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy'
              },
            }
          },
          series1: [{
            name: '',
            data: []
          }],
          chartOptions1: {
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: [],
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy'
              },
            }
          }
        }
    },
    mounted (){  
        axios.post('http://localhost:8000/sensors',{
          farm_id: 1,
          option: 'list'
        })
            .then(res => {
              res.data.result.forEach(element => {
              this.senList.push(element.sen_id)
              this.senType.push(element.type)
              });
              axios.post('http://localhost:8000/sensor_logs',{
                sen_id: this.senList[0],
                option: 'list'
              })
                  .then(res => {
                    res.data.result.forEach(element => {
                    this.series[0].data.push(element.value)
                    this.chartOptions.xaxis.categories.push(element.time)
                    });
                  })
              axios.post('http://localhost:8000/sensor_logs',{
                sen_id: this.senList[1],
                option: 'list'
              })
                  .then(res => {
                    res.data.result.forEach(element => {
                    this.series1[0].data.push(element.value)
                    this.chartOptions1.xaxis.categories.push(element.time)
                    });
                  })
            });
            
        
    },
}


</script>

<style lang="css">

</style>