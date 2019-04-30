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
          <b-dropdown-item href="/">1</b-dropdown-item>
          <b-dropdown-item href="/">2</b-dropdown-item>
          <b-dropdown-item href="/">3</b-dropdown-item>
          <b-dropdown-item href="/">4</b-dropdown-item>
          <b-dropdown-item href="/">{{x}}</b-dropdown-item>
          
        </b-nav-item-dropdown>
        </b-col>
    </b-row>

  </b-container>
  <b-container>
    <b-row align-v="end">
      <b-col> 
        
      <li v-for='record in records'>
        {{record}}
      </li>

      </b-col>
    </b-row>
  </b-container>
   
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            records: [],
        }
    },
    mounted (){
        axios .get('http://localhost:8081/records/1')
              .then(res => (
                this.records = res.data
              ))
        //this.loadRecords()
    },
    // methods: {
    //     async loadRecords (){
    //         const response = await RecordsAPI.getRecords ()
    //         this.records = response.data
    //     }
    // }
}
</script>

<style lang="css">

</style>