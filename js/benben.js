        var angularSpeed = 0.03;
        var lastTime = 0;
       
	  var nextSwap1 = 0;
	  var nextSwap2 = 0;
	  
	  var zdjecie = 9;
	  var tura1 = true;
	  
	  
	  
	  function zmianaZdjencia() {
	      if (cube.rotation.y <= nextSwap1) {
	          if (tura1 == true) {
	              cube.material.map = THREE.ImageUtils.loadTexture("img/log/" + zdjecie + "_w.jpg");
	              cube.material.needsUpdate = true;
	              cube.material.opacity = 0.8;
	              
	              texture.repeat.set(1.7, 1.7);
	              
	              zdjecie += 1;
	              nextSwap1 -= Math.PI;
                  

	              if (zdjecie == 24) {
	                  zdjecie = 1;
	              }

	              cube6.material.map = THREE.ImageUtils.loadTexture("img/log/" + zdjecie + "_w.jpg");
	              cube6.material.needsUpdate = true;
	              

	              texture6.repeat.set(2, 2);
	              zdjecie += 1;
	              

	              if (zdjecie == 24) {
	                  zdjecie = 1;
	              }


	              cube8.material.map = THREE.ImageUtils.loadTexture("img/log/" + zdjecie + "_w.jpg");
	              cube8.material.needsUpdate = true;
	              cube.material.opacity = 0.8;
	              
	              zdjecie += 1;
	              
	              

	              if (zdjecie == 24) {
	                  zdjecie = 1;
	              }

	              cube7.material.map = THREE.ImageUtils.loadTexture("img/log/" + zdjecie + "_w.jpg");
	              cube7.material.needsUpdate = true;
	              cube7.material.opacity = 0.8;
	              
	              zdjecie += 1;
	              
	              tura1 = false;

	              if (zdjecie == 24) {
	                  zdjecie = 1;
	              }
	          }

	          else {
	              cube5.material.map = THREE.ImageUtils.loadTexture("img/log/" + zdjecie + "_w.jpg");
	              cube5.material.needsUpdate = true;
	              
	              zdjecie += 1;
	              

	              if (zdjecie == 24) {
	                  zdjecie = 1;
	              }

	              cube2.material.map = THREE.ImageUtils.loadTexture("img/log/" + zdjecie + "_w.jpg");
	              cube2.material.needsUpdate = true;
	              
	              zdjecie += 1;
	              
	              if (zdjecie == 24) {
	                  zdjecie = 1;
	              }

	              cube4.material.map = THREE.ImageUtils.loadTexture("img/log/" + zdjecie + "_w.jpg");
	              cube4.material.needsUpdate = true;
	              
	              zdjecie += 1;
	             

	              if (zdjecie == 24) {
	                  zdjecie = 1;
	              }

	              cube3.material.map = THREE.ImageUtils.loadTexture("img/log/" + zdjecie + "_w.jpg");
	              cube3.material.needsUpdate = true;
	              
	              zdjecie += 1;
	              nextSwap1 -= Math.PI;
	              tura1 = true;
	              if (zdjecie == 24) {
	                  zdjecie = 1;
	              }
	          }

	      }
	  }
        //Funkcja obrotu
        function animate() {
            var time = new Date().getTime();
            //Róznica czasu
            var timeDiff = time - lastTime;
            var angularChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
            cube.rotation.y -= angularChange;
            cube2.rotation.y -= angularChange;
            cube3.rotation.y -= angularChange;
            cube4.rotation.y -= angularChange;
            cube5.rotation.y -= angularChange;
            cube6.rotation.y -= angularChange;
            cube7.rotation.y -= angularChange;
            cube8.rotation.y -= angularChange;
            
            // cube4.material.map = THREE.ImageUtils.loadTexture("img/" + zdjecie + "_w.jpg");
           //console.log(cube.rotation.y);
           // console.log(cube2.rotation.y );
            zmianaZdjencia();
            
            //front()
            
            lastTime = time;
            renderer.render(scene, camera);
            requestAnimationFrame(function () {
                animate();
            }
                )
        };


        //Ustawienie rendereru i jego wilkosci
        //rozmiar sceny
        var widht = 800,
            height = 400;
        //Usawienia atrybutow kamery
        var view_angle = 45,
            aspect = widht / height,
            near = 1,
            far = 1000;
        //Dom elemt w ktorym bedziemy to wyswietlac
        var $contener = $('.efekt3D');

        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(widht, height);
        renderer.antialias = true;

		
        $contener.append(renderer.domElement);
        //Ustawienie kamery
        var camera = new THREE.PerspectiveCamera(view_angle, aspect, near, far);

        camera.position.y = -450; //-450
        camera.position.z = 312; //400
		camera.position.x = 20; // 0
        camera.rotation.x = 0.8;
        //utworzenie sceny
        var scene = new THREE.Scene();

        //Obraski do textury
       
       THREE.ImageUtils.crossOrigin = '';
        //obiekt
        var texture = THREE.ImageUtils.loadTexture("img/log/1_w.jpg");	
	  
        var texture2 = THREE.ImageUtils.loadTexture("img/log/2_w.jpg");
        var texture3 = THREE.ImageUtils.loadTexture("img/log/3_w.jpg");
        var texture4 = THREE.ImageUtils.loadTexture("img/log/4_w.jpg");
        var texture5 = THREE.ImageUtils.loadTexture("img/log/5_w.jpg");
        var texture6 = THREE.ImageUtils.loadTexture("img/log/6_w.jpg");
        var texture7 = THREE.ImageUtils.loadTexture("img/log/7_w.jpg");
        var texture8 = THREE.ImageUtils.loadTexture("img/log/8_w.jpg");

       
                
       texture.wrapS = THREE.ClampToEdgeWrapping;
       texture.wrapT = THREE.ClampToEdgeWrapping;
       texture.minFilter = THREE.NearestFilter;
       /*texture.repeat.set(1.5, 1.5);
       texture2.repeat.set(1.5, 1.5);
       texture3.repeat.set(1.5, 1.5);
       texture4.repeat.set(1.5, 1.5);
       texture5.repeat.set(1.5, 1.5);
       texture6.repeat.set(1.5, 1.5);
       texture7.repeat.set(1.5, 1.5);
       texture8.repeat.set(1.5, 1.5);*/
       
       
	 texture2.wrapS = THREE.ClampToEdgeWrapping;
	 texture2.wrapT = THREE.ClampToEdgeWrapping;
	   texture2.minFilter = THREE.NearestFilter;
       texture3.minFilter = THREE.NearestFilter;
       texture4.minFilter = THREE.NearestFilter;
       texture5.minFilter = THREE.NearestFilter;
       texture6.minFilter = THREE.NearestFilter;
       texture7.minFilter = THREE.NearestFilter;
       texture8.minFilter = THREE.NearestFilter;
	 
	 
       
       //texture.needsUpdate = true;

        // texture.repeat.set(4, 4);
       
       var sphereMaterial =
 new THREE.MeshBasicMaterial(
   {
       color: 0xFFFFFFF,
       side: THREE.FrontSide,
       map: texture


   });
       var sphereMaterial2 =
new THREE.MeshBasicMaterial(
 {
     color: 0xFFFFFFF,
     side: THREE.FrontSide,
     map: texture2,
     opacity:0.9

 });
       var sphereMaterial3 =
new THREE.MeshBasicMaterial(
{
    color: 0xFFFFFFF,
    side: THREE.FrontSide,
    map: texture3


});
       var sphereMaterial4 =
new THREE.MeshBasicMaterial(
{
    color: 0xFFFFFFF,
    side: THREE.FrontSide,
    map: texture4


});

       var sphereMaterial5 =
new THREE.MeshBasicMaterial(
{
    color: 0xFFFFFFF,
    side: THREE.FrontSide,
    map: texture5


});
       var sphereMaterial6 =
new THREE.MeshBasicMaterial(
{
    color: 0xFFFFFFF,
    side: THREE.FrontSide,
    map: texture6


});
       var sphereMaterial7 =
new THREE.MeshBasicMaterial(
{
    color: 0xFFFFFFF,
    side: THREE.FrontSide,
    map: texture7


});
       var sphereMaterial8 =
new THREE.MeshBasicMaterial(
{
    color: 0xFFFFFFF,
    side: THREE.FrontSide,
    map: texture8


});


 

       
        var cyGeo = new THREE.CylinderGeometry(250, 250, 100, 100, 1, true, 0,Math.PI / 4);
     
        
        var cube = new THREE.Mesh(cyGeo, sphereMaterial);
       
        // var cube = new THREE.SceneUtils.createMultiMaterialObject(new THREE.CylinderGeometry(200, 200, 200, 100, 1 ,true), sphereMaterial);
        var cube2 = new THREE.Mesh(cyGeo, sphereMaterial2);

        var cube3 = new THREE.Mesh(cyGeo, sphereMaterial3);

        var cube4 = new THREE.Mesh(cyGeo, sphereMaterial4);

        var cube5 = new THREE.Mesh(cyGeo, sphereMaterial5);

        var cube6 = new THREE.Mesh(cyGeo, sphereMaterial6);

        var cube7 = new THREE.Mesh(cyGeo, sphereMaterial7);

        var cube8 = new THREE.Mesh(cyGeo, sphereMaterial8);
        
        //rotacje obiektu
        cube.rotation.x = 1;
        cube2.rotation.x = 1;
        cube3.rotation.x = 1;
        cube4.rotation.x = 1;
        cube5.rotation.x = 1;
        cube6.rotation.x = 1;
        cube7.rotation.x = 1;
        cube8.rotation.x = 1;
        
        cube.rotation.y =  1 * Math.PI / 4;
        cube2.rotation.y = 2 * Math.PI / 4;
        cube3.rotation.y = 3 * Math.PI / 4;
        cube4.rotation.y = 4 * Math.PI / 4;
        cube5.rotation.y = 5 * Math.PI / 4;
        cube6.rotation.y = 6 * Math.PI / 4;
        cube7.rotation.y = 7 * Math.PI / 4;
        cube8.rotation.y = 8 * Math.PI / 4;
        
    
        
        //dodanie do sceny obiektu oraz renderowanie(juz w finkcji animaction)
        scene.add(cube);
        scene.add(cube2);
        scene.add(cube3);
        scene.add(cube4);
        scene.add(cube5);
        scene.add(cube6);
        scene.add(cube7);
        scene.add(cube8);

       
	  nextSwap1 = cube.rotation.y -  Math.PI ;
	  nextSwap2 = cube8.rotation.y - Math.PI/4;
	  nextSwap3 = cube3.rotation.y -  Math.PI;
	  nextSwap5 = cube4.rotation.y -  Math.PI;
	  nextSwap5 = cube5.rotation.y -  Math.PI;
	  nextSwap6 = cube6.rotation.y -  Math.PI;
	  nextSwap7 = cube7.rotation.y -  Math.PI;
	  nextSwap8 = cube8.rotation.y -  Math.PI;
        lastTime =  new Date().getTime();
       // scene.add(cube2);
        animate();
   