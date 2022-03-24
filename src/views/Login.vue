<template>
  <div class="login pa-0">
      <v-row class="form-input" no-gutters
          style="width:100%; max-width:320px" >
        <v-col  cols="4" 
                align="center" 
                class="d-flex justify-center "
              >
          <v-icon 
            color="#BDC7C9" size="40">
            mdi-shield-account
          </v-icon>
        </v-col>
        <v-col cols="8">
          <v-text-field
              style="color: #BDC7C9 !important; border: none !important;"
              class="text-input"
              label="username"
              color="#BDC7C9"
          >

          </v-text-field>
        </v-col>
         <v-col 
                cols="4" 
                align="center" 
                class="d-flex justify-center "
              >
          <v-icon 
            color="#BDC7C9" size="40">
            mdi-shield-key
          </v-icon>
        </v-col>
        <v-col cols="8">
          <v-text-field
              label="password"
              color="#BDC7C9"
              type="password"
          >

          </v-text-field>
        </v-col>
        <v-col  cols="12" align="center" class="pb-3">
          <v-btn
              class="btn"
            >
                <v-icon class="py-3">
                    mdi-login
                </v-icon>
                <span class="ml-3">
                  Login
                </span>
          </v-btn>
           <v-btn
              class="btn mt-3"
              @click="getHome()"
            >
                <img src="../assets/ClickUp-logo1.png" alt="" 
                  style="width:100%; max-width: 100px" >
          </v-btn>
        </v-col>
      </v-row>

  </div>
  
</template>

<script>

  export default {
    name: 'Login',
    
    methods:{
      getHome(){
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped>
.login{
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  
}
.form-input{
  background-color: #191A19;
  box-shadow: 0px 0px 12px 0px rgb(0, 0, 0);
  border-radius:8px;
  border: 2px solid #BDC7C9;
}
.icon {
  background-color: #191A19;
  border-radius: 0px !important;
}

.v-text-field >>> input{
  color: #BDC7C9 !important;
  border: none !important;
}

.v-input >>> label {
  color: #BDC7C9;
}

.btn {
  width:100%;
  max-width: 180px;
  background-color: #2FA4FF !important;
  color:#BDC7C9 !important;
}
</style>
