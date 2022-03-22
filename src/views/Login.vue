<template>
  <div class="login pa-0">
      <v-row class="form-input" no-gutters
          style="width:100%; max-width:320px" >
        <v-col  cols="4" 
                align="center" 
                class="d-flex justify-center "
              >
          <v-icon 
            color="#21E6C1" size="40">
            mdi-shield-account
          </v-icon>
        </v-col>
        <v-col cols="8">
          <v-text-field
              style="color: #21E6C1 !important; border: none !important;"
              class="text-input"
              label="username"
              color="#21E6C1"
          >

          </v-text-field>
        </v-col>
         <v-col 
                cols="4" 
                align="center" 
                class="d-flex justify-center "
              >
          <v-icon 
            color="#21E6C1" size="40">
            mdi-shield-key
          </v-icon>
        </v-col>
        <v-col cols="8">
          <v-text-field
              label="password"
              color="#21E6C1"
              type="password"
          >

          </v-text-field>
        </v-col>
        <v-col  cols="12" align="center" class="pb-3">
          <v-btn
              class="btn pa-0"
            >
                <v-icon>

                </v-icon>
          </v-btn>
        </v-col>
      </v-row>

  </div>
  
</template>

<script>

  export default {
    name: 'Login',

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
  box-shadow: 0px 0px 12px 0px rgba(194,194,194,1);
  border-radius:8px;
}
.icon {
  background-color: #191A19;
  border-radius: 0px !important;
}

.v-text-field >>> input{
  color: #21E6C1 !important;
  border: none !important;
}

.v-input >>> label {
  color: #21E6C1;
}

.btn {
  width:100%;
  max-width: 180px;
  background-color: #55efc4;
  background-image: linear-gradient(315deg, #55efc4 0%, #3fd18d 74%);
}
</style>
