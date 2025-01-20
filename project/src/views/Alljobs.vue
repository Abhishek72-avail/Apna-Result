# i want add in this page show all jobs upcoming and lastest for all fields
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">All Jobs</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <h5 class="card-title">Latest Jobs</h5>
                </div>
                <div class="col-md-6">
                  <router-link to="/addjob" class="btn btn-primary float-right">Add Job</router-link>
                </div>
              </div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Company</th>

                    <th scope="col">Location</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(job, index) in jobs" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ job.title }}</td>
                    <td>{{ job.company }}</td>
                    <td>{{ job.location }}</td>
                    <td>
                      <router-link :to="'/editjob/' + job.id" class="btn btn-warning">Edit</router-link>
                        <button @click="deleteJob(job.id)" class="btn btn-danger">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    this.getJobs();
  },
  methods: {
    getJobs() {
                  }